"""Independent exact-arithmetic checks. No answer key enters derive().

This is intentionally conservative: unrecognized language is needs-review,
not a pass. Every attempt, including failures, is retained in the ledger.
"""
from pathlib import Path
import json, re, math
import sympy as s
from sympy.parsing.sympy_parser import parse_expr, standard_transformations, implicit_multiplication_application, convert_xor, rationalize

ROOT = Path(__file__).resolve().parents[3]
TRANSFORMS = standard_transformations + (implicit_multiplication_application, convert_xor, rationalize)
LETTERS = {c: s.Symbol(c, real=True) for c in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'}
LOCAL = {**LETTERS, 'sqrt': s.sqrt, 'Abs': s.Abs, 'floor': s.floor, 'ceiling': s.ceiling,
         'log': s.log, 'pi': s.pi, 'oo': s.oo}

def group(text, start):
    assert text[start] == '{'
    depth = 1
    for end in range(start + 1, len(text)):
        depth += (text[end] == '{') - (text[end] == '}')
        if depth == 0:
            return text[start + 1:end], end + 1
    raise ValueError('unbalanced braces')

def latex(text):
    text = text.strip().replace('$', '').replace('−', '-').replace('–', '-')
    if any(t in text for t in ['\\cdots','\\ldots','\\dots']):raise ValueError('ellipsis requires a finite/infinite series model')
    text = re.sub(r'\\(?:dfrac|tfrac)', r'\\frac', text)
    text = re.sub(r'(?<![A-Za-z\d])([0-9]+)\\frac\{([0-9]+)\}\{([0-9]+)\}',
                  lambda m:'('+m[1]+'+\\frac{'+m[2]+'}{'+m[3]+'})',text)
    text = text.replace('\\left', '').replace('\\right', '').replace('\\,', '').replace('\\!', '').replace('\\;', '')
    text = text.replace('{,}', '').replace(',', '')
    for command in ['frac', 'sqrt']:
        token = '\\' + command
        while token in text:
            i = text.index(token); j = i + len(token)
            if command == 'sqrt':
                root = '2'
                if text[j:j+1] == '[':
                    k = text.index(']', j); root = text[j+1:k]; j = k+1
                a, end = group(text, j)
                val = '(' + latex(a) + ')**(1/(' + root + '))'
            else:
                a, j = group(text, j); b, end = group(text, j)
                val = '((' + latex(a) + ')/(' + latex(b) + '))'
            text = text[:i] + val + text[end:]
    text = text.replace('\\cdot', '*').replace('\\times', '*').replace('\\div', '/')
    text = text.replace('\\pi', 'pi').replace('\\infty', 'oo')
    text = text.replace('\\lfloor', 'floor(').replace('\\rfloor', ')')
    text = text.replace('\\lceil', 'ceiling(').replace('\\rceil', ')')
    # A bar pair is absolute value only if its interior has no bar.
    while re.search(r'\|[^|]+\|', text):
        text = re.sub(r'\|([^|]+)\|', r'Abs(\1)', text, count=1)
    text = text.replace('{', '(').replace('}', ')').replace('[', '(').replace(']', ')').replace('^', '**')
    if '\\' in text or any(c in text for c in '<>=;:'):
        raise ValueError('unsupported mathematical syntax: ' + text)
    if re.search(r'[A-Za-z]{4,}', re.sub(r'Abs|sqrt|floor|ceiling|log|pi|oo', '', text)):
        raise ValueError('not a pure expression')
    return text

def expr(text, complex_i=False):
    out = parse_expr(latex(text), local_dict={**LOCAL, **({'i': s.I,'I':s.I} if complex_i else {})}, transformations=TRANSFORMS)
    # Convert decimal constants to exact rationals before doing arithmetic.
    return out.xreplace({x: s.Rational(str(x)) for x in out.atoms(s.Float)})

def maths(text):
    return re.findall(r'(?<!\\)\$(.*?)(?<!\\)\$', text)

def denominators(text):
    out=[]
    for match in re.finditer(r'\\(?:dfrac|tfrac|frac)',text):
        try:
            _,j=group(text,match.end());d,_=group(text,j);out.append(expr(d))
        except Exception:raise ValueError('Could not preserve original fraction domain.')
    return out

def relation_set(text):
    text=text.replace('\\leq','<=').replace('\\geq','>=').replace('\\le','<=').replace('\\ge','>=').replace('\\neq','!=').replace('\\ne','!=')
    pieces=re.split(r'(<=|>=|!=|<|>)',text)
    if len(pieces)<3:raise ValueError('not a bound')
    values=[expr(x) for x in pieces[::2]]
    symbols=set().union(*(v.free_symbols for v in values))
    if len(symbols)!=1:raise ValueError('bound needs one real variable')
    x=next(iter(symbols));result=s.S.Reals
    ops={'<':s.Lt,'>':s.Gt,'<=':s.Le,'>=':s.Ge,'!=':s.Ne}
    for left,op,right in zip(values,pieces[1::2],values[1:]):
        rel=ops[op](left,right)
        result=s.Intersection(result,s.solve_univariate_inequality(rel,x,relational=False))
    for d in denominators(text):result=result-s.solveset(d,x,domain=s.S.Reals)
    return result

def same(a, b):
    if a == b:return True
    if isinstance(a, s.Set) or isinstance(b, s.Set):
        return a == b or (isinstance(a, s.Set) and isinstance(b, s.Set) and a.symmetric_difference(b) == s.EmptySet)
    return s.simplify(a - b) == 0

def complete_factor_form(text):
    ms=maths(str(text));assert len(ms)==1
    raw=parse_expr(latex(ms[0]),local_dict=LOCAL,transformations=TRANSFORMS,evaluate=False)
    checks=[]
    for factor in s.Mul.make_args(raw):
        base=factor.base if isinstance(factor,s.Pow) else factor
        if not base.free_symbols:continue
        symbols=sorted(base.free_symbols,key=str);poly=s.Poly(base,*symbols)
        content,primitive=poly.primitive();_,factors=s.factor_list(primitive.as_expr())
        assert abs(content)==1 and len(factors)==1 and factors[0][1]==1,'Displayed factor still reducible or has unextracted content.'
        checks.append(str(base))
    return checks

def ans_value(text, complex_i=False):
    ms = maths(str(text))
    low = str(text).lower()
    if 'grows without bound' in low or 'diverges' in low or 'does not converge' in low:return s.oo
    if 'undefined' in low: return s.zoo
    if 'no number is a solution' in low:return s.EmptySet
    if 'every number is a solution' in low:return s.S.Reals
    if 'no such value exists' in low:return s.EmptySet
    if re.search(r'no (?:real )?solutions?', low): return s.EmptySet
    if 'all' in low and 'except' in low:
        after=ms[-1];v=expr(after);return s.S.Reals-s.FiniteSet(v)
    if 'all real' in low or 'every real' in low or 'every value' in low or 'infinitely many' in low: return s.S.Reals
    if ms and any(re.search(r'\\(?:le|ge|ne)|[<>]',m) for m in ms):
        bounds=[relation_set(m) for m in ms]
        return s.Union(*bounds) if re.search(r'\bor\b',low) else s.Intersection(*bounds)
    if not ms:
        if re.fullmatch(r'-?\d+(?:\.\d+)?', str(text).strip()): return expr(str(text))
        raise ValueError('answer is verbal')
    if len(ms) > 1 and not re.search(r'\b(?:and|or|both)\b', low):
        raise ValueError('multiple answer expressions')
    values = []
    for m in ms:
        m = m.replace('\\$', '').replace('\\%', '')
        if '=' in m:
            left, right = m.rsplit('=', 1)
            m = right
        if '\\pm' in m:
            values += [expr(m.replace('\\pm', '+'), complex_i), expr(m.replace('\\pm', '-'), complex_i)]
        elif ',' in m and '{,}' not in m:
            values += [expr(x, complex_i) for x in m.split(',')]
        else:
            values.append(expr(m, complex_i))
    return s.FiniteSet(*values) if len(values) > 1 else values[0]

def solve_equation(m, complex_i=False):
    if m.count('=') != 1: raise ValueError('not one equation')
    lhs, rhs = [expr(x, complex_i) for x in m.split('=')]
    unknowns = lhs.free_symbols | rhs.free_symbols
    if len(unknowns) != 1: raise ValueError('multiple unknowns')
    x = next(iter(unknowns))
    domain = s.S.Complexes if complex_i else s.S.Reals
    out = s.solveset(lhs-rhs, x, domain=domain)
    for d in denominators(m):out=out-s.solveset(d,x,domain=domain)
    if out.has(s.ConditionSet): raise ValueError('unsolved equation')
    return out, f'Exact solve over {domain}: {s.sstr(lhs)} = {s.sstr(rhs)}; original-expression domain retained.'

def graph_compute(q,figure):
    curves=[e['pts'] for e in figure.get('elems',[]) if e.get('t')=='curve']
    if len(curves)!=1:raise ValueError('Graph requires interpretation of several plotted objects.')
    pts=[tuple(s.Rational(str(v)) for v in p) for p in curves[0]]
    if not all(a[0]<b[0] for a,b in zip(pts,pts[1:])):raise ValueError('Plot is not a single-valued ordered polyline.')
    low=q.lower();ms=maths(q)
    def lookup(t):
        for (x0,y0),(x1,y1) in zip(pts,pts[1:]):
            if x0<=t<=x1:return s.simplify(y0+(y1-y0)*(t-x0)/(x1-x0))
        raise ValueError('Requested input outside plotted domain.')
    def preimage(t):
        roots=set()
        for (x0,y0),(x1,y1) in zip(pts,pts[1:]):
            if y0==y1:
                if y0==t:raise ValueError('A whole segment lies on the requested level.')
            elif min(y0,y1)<=t<=max(y0,y1):roots.add(s.simplify(x0+(x1-x0)*(t-y0)/(y1-y0)))
        return roots
    if 'range' in low:return s.Interval(min(y for x,y in pts),max(y for x,y in pts)),'Exact extrema of every plotted linear segment: '+str(pts)
    if 'how many solutions' in low:
        eqs=[m for m in ms if re.fullmatch(r'[A-Za-z]\(x\)\s*=\s*.+',m)]
        if len(eqs)==1:
            target=expr(eqs[0].split('=')[1]);roots=preimage(target)
            return s.Integer(len(roots)),'Exact polyline intersections at level'+str(target)+': '+str(sorted(roots))+'; shared vertices counted once.'
    target=ms[-1]
    inverse=re.fullmatch(r'[A-Za-z]\^\{-1\}\((.+)\)',target)
    if inverse:
        roots=preimage(expr(inverse[1]))
        if len(roots)==1:return next(iter(roots)),'Unique inverse input on plotted polyline: '+str(pts)
        raise ValueError('Inverse target has multiple preimages.')
    call=re.fullmatch(r'([A-Za-z])\((.+)\)',target)
    if call and re.search(r'what is|find',low):
        name,arg=call[1],expr(call[2]);definitions=[m for m in ms if m.startswith(name+'(x)') and '=' in m]
        if not definitions:return lookup(arg),'Exact piecewise-linear interpolation at input'+str(arg)+' from vertices'+str(pts)
        form=definitions[0].split('=',1)[1]
        inner=re.search(r'([A-Za-z])\(([^()]*)\)',form)
        if inner and inner[1]!=name:
            input_value=expr(inner[2]).subs(LETTERS['x'],arg)
            output=lookup(input_value)
            outer=form[:inner.start()]+'('+str(output)+')'+form[inner.end():]
            result=expr(outer).subs(LETTERS['x'],arg)
            if not result.free_symbols:return s.simplify(result),'Transform input to'+str(input_value)+', polyline output'+str(output)+', then apply outer transformation '+outer
    raise ValueError('Dedicated graph proof still required for this query.')

def derive(q, figure=None, chapter=None, choices=None):
    """Return result, independent method/evidence. This function sees no choices or key."""
    low = q.lower(); ms = maths(q); ci = chapter in [12,13] and 'real solution' not in low and 'real root' not in low
    if chapter==19:
        from algebra_exponential import derive as exponential
        result=exponential(q,choices,expr,maths,same)
        if result is not None:return result
    if chapter==14:
        from algebra_conics import derive as conics
        result=conics(q,choices,figure,expr,maths,same)
        if result is not None:return result
    if chapter in [5,8]:
        from algebra_linear import derive as linear
        result=linear(q,choices,expr,maths,same,chapter,figure)
        if result is not None:return result
    if chapter in [16,17,19]:
        from algebra_functions import derive as functions
        result=functions(q,choices,expr,maths,same,relation_set)
        if result is not None:return result
    if chapter==7:
        from algebra_variation import derive as variation
        result=variation(q,choices,expr,maths,ans_value,same)
        if result is not None:return result
    if chapter in [10,11,12,13,14,15]:
        from algebra_quadratics import derive as quadratics
        result=quadratics(q,choices,expr,maths,same,relation_set,solve_equation,chapter)
        if result is not None:return result
    if chapter==1:
        from algebra_basics import derive as basics
        result=basics(q,choices,expr,maths,ans_value,solve_equation)
        if result is not None:return result
    if chapter==21:
        from algebra_sequences import derive as sequences
        return sequences(q,choices,expr,maths,ans_value)
    if chapter in [2,4]:
        from algebra_elementary import derive as elementary
        result=elementary(q,choices,expr,maths,ans_value,same)
        if result is not None:return result
    if chapter==3:
        from algebra_linear_stories import derive as stories
        result=stories(q,choices,expr,maths,ans_value,solve_equation)
        if result is not None:return result
    if figure and chapter==17:return graph_compute(q,figure)
    # Percentage arithmetic, independently translated from the stem.
    clean=q.replace('\\$','').replace('\\%','%')
    if re.fullmatch(r'What is (?:\$[\d.]+%\$ of )+\$[\d.]+\$\?',clean):
        numbers=[s.Rational(x.replace('%','')) for x in maths(clean)]
        out=numbers[-1]*s.prod(p/100 for p in numbers[:-1])
        return out,'Multiply the supplied base by each percentage factor: '+str(numbers)
    if re.fullmatch(r'\$[\d.]+\$ is what percent of \$[\d.]+\$\?',clean):
        a,b=map(s.Rational,maths(clean));return 100*a/b,'Requested percent = 100 * part / whole = '+str(100*a/b)
    if re.fullmatch(r'\$[\d.]+\$ is \$[\d.]+%\$ of what number\?',clean):
        a,p=[s.Rational(x.replace('%','')) for x in maths(clean)];return 100*a/p,'Original quantity = part / (percent/100).'
    if re.fullmatch(r'\$[\d.]+%\$ of a number is \$[\d.]+\$\. What is the number\?',clean):
        p,a=[s.Rational(x.replace('%','')) for x in maths(clean)];return 100*a/p,'Solve (p/100)*N = supplied amount.'
    if re.fullmatch(r'(?:Increase|Decrease) \$[\d.]+\$ by \$[\d.]+%\$\. What is the result\?',clean):
        a,p=[s.Rational(x.replace('%','')) for x in maths(clean)];sign=-1 if low.startswith('decrease') else 1
        return a*(1+sign*p/100),'Apply signed percent multiplier to original amount.'
    if re.fullmatch(r'Which fraction equals \$[\d.]+%\$\?',clean):
        return s.Rational(maths(clean)[0].replace('%',''))/100,'Percent literally means per hundred.'
    # Numeric comparisons and number-line distance.
    if ms and re.search(r'which.*(?:largest|smallest|greater|least|greatest)',low) and not any(w in low for w in ['term','sequence','integer','expression','value of','order','list']):
        vals=[expr(m,ci) for m in ms]
        if all(not x.free_symbols and x.is_real for x in vals) and len(vals)>1:
            out=min(vals,key=lambda x:float(x)) if 'smallest' in low or 'least' in low else max(vals,key=lambda x:float(x))
            if all(s.simplify(out-v).is_nonpositive for v in vals) or all(s.simplify(out-v).is_nonnegative for v in vals):
                return out,'Exact sign comparisons between all supplied numbers '+str(vals)
    if 'distance between' in low and 'number line' in low and len(ms)==2:
        a,b=[expr(m) for m in ms]
        return s.Abs(a-b),'Number-line distance is |a-b|; endpoints '+str((a,b))
    # Rectangle/triangle perimeter expressions explicitly provide all dimensions.
    if 'rectangle' in low and 'has length' in low and 'width' in low and 'perimeter' in low and len(ms)==2 and not any(w in low for w in ['area','more than','less than']):
        if re.search(r'what is its perimeter|expression (?:gives|represents).*perimeter',low):
            a,b=[expr(m) for m in ms];return s.expand(2*(a+b)),'Rectangle perimeter = 2(length + width).'
    # Options are part of the problem, but the key is unavailable in this phase.
    if choices and re.search(r'which.*(?:irrational|integer but not a whole|not a polynomial)',low):
        values=[ans_value(c,ci) for c in choices]
        if 'irrational' in low:valid=[i for i,v in enumerate(values) if v.is_real and v.is_rational is False]
        elif 'integer but' in low:valid=[i for i,v in enumerate(values) if v.is_integer and v<0]
        else:valid=[i for i,v in enumerate(values) if not v.is_polynomial()]
        return ('choices',valid),'Independent classification of every option: '+str(values)
    if 'what kind of number' in low and len(ms)==1 and choices:
        value=expr(ms[0],ci);valid=[]
        for i,c in enumerate(choices):
            v=ans_value(c,ci);label=c.lower()
            type_ok=('irrational' in label and value.is_rational is False) or ('rational' in label and 'irrational' not in label and value.is_rational is True)
            if same(value,v) and type_ok:valid.append(i)
        return ('choices',valid),'Evaluate '+str(value)+' and independently classify rationality: '+str(value.is_rational)
    if re.match(r'\s*multiply',low) and 'by its conjugate' in low and len(ms)==1:
        value=expr(ms[0],True);return s.expand_complex(value*s.conjugate(value)),'Multiply z by its complex conjugate: |z|^2.'
    # Named function evaluation, including polynomial sums/compositions.
    defs={}
    for m in ms:
        match=re.fullmatch(r'([A-Za-z])\(([a-z])\)\s*=\s*(.+)',m)
        if match:
            if re.search(r'[A-Za-z]\(',match[3]):raise ValueError('Definition contains another function; needs composition/table model.')
            defs[match[1]]=(LETTERS[match[2]],expr(match[3],ci))
    inv=re.fullmatch(r'([A-Za-z])\^\{-1\}\((.+)\)',ms[-1]) if ms else None
    if inv and inv[1] in defs:
        x,form=defs[inv[1]];target=expr(inv[2]);domain=s.S.Reals
        bounds=[m for m in ms if re.search(r'\\(?:le|ge)|[<>]',m)]
        for bound in bounds:domain=s.Intersection(domain,relation_set(bound))
        # Use a fresh input variable: f^-1(x) asks for a function, not f(x)=x.
        u=s.Dummy('input',real=True);roots=s.solveset(form.subs(x,u)-target,u,domain=domain)
        if isinstance(roots,s.FiniteSet) and len(roots)==1:return next(iter(roots)),'Solve function(input)=requested output within explicit restricted domain '+str(domain)
        raise ValueError('Inverse input not uniquely established.')
    if re.search(r'(?:what is|find|state|give|determine) (?:the )?domain',low) and len(defs)==1 and not any(t in low for t in ['inverse','composition','sum of']):
        from sympy.calculus.util import continuous_domain
        x,form=next(iter(defs.values()));domain=continuous_domain(form,x,s.S.Reals)
        for d in denominators(q):domain=domain-s.solveset(d,x,domain=s.S.Reals)
        return domain,'Continuous real domain of '+str(form)+' with every original denominator separately excluded.'
    if defs and not any(w in low for w in [' if ', 'domain', 'range', 'inverse', 'solve', 'degree']):
        if ' and ' in q[q.lower().rfind('find'):] and q.lower().rfind('find')>=0:
            raise ValueError('Multiple requested named expressions require ordered/named answer proof.')
        target=ms[-1]
        if '=' in target and re.search(r'\bat\b',low):
            v=expr(target.split('=')[-1],ci);name=next(iter(defs));symbol,form=defs[name]
            return s.simplify(form.subs(symbol,v)),'Substitute '+str(v)+' in independently parsed function '+str(form)
        if '=' not in target and re.search(r'what is|find|compute|evaluate',low):
            while re.search(r'([A-Za-z])\(([^()]*)\)',target):
                match=re.search(r'([A-Za-z])\(([^()]*)\)',target)
                if match[1] not in defs:raise ValueError('undefined function')
                symbol,form=defs[match[1]];value=form.subs(symbol,expr(match[2],ci))
                target=target[:match.start()]+(str(value) if not value.free_symbols else '('+str(value)+')')+target[match.end():]
            value=expr(target,ci)
            if not value.free_symbols:return s.simplify(value),'Parsed function definitions '+str(defs)+'; evaluated requested composition exactly.'
    # Algebraic rearrangement: the requested variable is specified explicitly.
    target_var=re.search(r'(?:solve(?:d)?(?: the .*?)? for|solved for)\s*\$([A-Za-z])\$',q,re.I)
    if not target_var:target_var=re.search(r'\bfor\s*\$([A-Za-z])\$[.?!]?$',q)
    if target_var and any(m.count('=')==1 for m in ms):
        m=next(m for m in ms if m.count('=')==1)
        lhs,rhs=[expr(x,ci) for x in m.split('=')]
        x=LETTERS[target_var[1]];result=s.solve(lhs-rhs,x)
        if len(result)==1:return result[0],'Rearranged '+str(lhs)+'='+str(rhs)+' for '+str(x)+'; divisions require nonzero denominators.'
    # A complete linear system with an explicit requested variable/expression.
    if re.match(r'\s*(?:solve|use substitution to solve|two numbers satisfy)',low):
        eqs=[m for m in ms if m.count('=')==1]
        if len(eqs)>=2 and '=' not in ms[-1]:
            equations=[expr(m.split('=')[0],ci)-expr(m.split('=')[1],ci) for m in eqs]
            target=expr(ms[-1],ci);symbols=sorted(set().union(*(e.free_symbols for e in equations)),key=str)
            sols=s.solve(equations,symbols,dict=True)
            vals=[s.simplify(target.subs(sol)) for sol in sols]
            if vals and not any(v.free_symbols for v in vals) and all(same(vals[0],v) for v in vals):
                return vals[0],'Independent simultaneous equations '+str(equations)+'; all branches give requested '+str(target)+' = '+str(vals[0])
    # Direct polynomial properties are computed from expanded coefficients.
    if ms and any(t in low for t in ['degree of','leading coefficient','constant term','coefficient of','sum of all the coefficients','sum of the coefficients','leading term']):
        if re.search(r'what is\s+\$[A-Za-z]\$[?]',q,re.I) or 'other factor' in low:
            raise ValueError('Reverse coefficient recovery needs its own parameter model.')
        target=ms[-1]
        for name,(symbol,form) in defs.items():target=target.replace(name+'('+str(symbol)+')','('+str(form)+')')
        if '=' not in target:
            value=expr(target,ci)
            if len(value.free_symbols)==1 or (not value.free_symbols and 'degree of' in low and defs):
                x=next(iter(value.free_symbols)) if value.free_symbols else next(iter(defs.values()))[0];poly=s.Poly(s.expand(value),x)
                if 'degree of' in low:out=s.Integer(poly.degree())
                elif 'leading coefficient' in low:out=poly.LC()
                elif 'constant term' in low:out=poly.nth(0)
                elif 'sum of' in low and 'coefficients' in low:out=poly.eval(1)
                elif 'leading term' in low:out=poly.LC()*x**poly.degree()
                else:
                    monomial=expr(ms[0],ci);power=s.Poly(monomial,x).degree();out=poly.nth(power)
                return out,'Expanded polynomial '+str(poly.as_expr())+'; exact coefficient/degree operation requested by stem.'
    if defs or (re.search(r'\b[A-Za-z]\(',q) and figure and (chapter or 0)>=16):
        raise ValueError('Function/graph model is not completely specified by this generic solver.')
    if 'completely' in low and 'factor' in low and len(ms)==1:
        value=expr(ms[0]);coef,factors=s.factor_list(value)
        return value,'Independent irreducible factorization over rationals: coefficient='+str(coef)+', factors='+str(factors)+'; answer form separately checked.'
    if 'least to greatest' in low or 'greatest to least' in low:raise ValueError('Ordered list comparison requires an ordered answer model.')
    if re.match(r'\s*(?:solve|which describes all solutions of)',low) and len(ms)==1 and re.search(r'\\(?:le|ge)|[<>]',ms[0]):
        out=relation_set(ms[0]);return out,'Exact real inequality solution, including strict/non-strict endpoints: '+str(out)
    if re.match(r'\s*how many integers',low) and len(ms)>=1:
        bounds=[m for m in ms if re.search(r'\\(?:le|ge)|[<>]',m)]
        if len(bounds)==1:
            valid=relation_set(bounds[0]);integers=s.Intersection(valid,s.S.Integers)
            if integers.is_finite_set:
                values=list(integers);return s.Integer(len(values)),'Intersect exact bound '+str(valid)+' with integers, yielding '+str(values)
    # Explicit equation-solving stems, including one named numerical unknown.
    if re.match(r'\s*(?:solve|find all (?:real )?solutions)', low):
        eqs = [m for m in ms if '=' in m]
        if len(eqs) == 1:
            return solve_equation(eqs[0], ci)
        if eqs and 'excluded' in low:
            return solve_equation(eqs[0], ci)
    if re.match(r'\s*how many (?:real )?solutions does', low):
        eqs = [m for m in ms if '=' in m]
        if len(eqs) == 1:
            roots, proof = solve_equation(eqs[0], ci)
            if isinstance(roots, s.FiniteSet) or roots == s.EmptySet:
                return ('count', roots), proof + ' Counted distinct roots: ' + str(roots)
            if roots == s.S.Reals: return ('count', roots), proof
    # An explicit assignment after the target, e.g. Evaluate x^2 when x=-3.
    if re.match(r'\s*(?:evaluate|compute|find)', low) and ' when ' in low and len(ms)>=2:
        target=expr(ms[0],ci); substitutions={}
        for m in ms[1:]:
            if m.count('=')==1:
                lhs,rhs=[expr(x,ci) for x in m.split('=')]
                if isinstance(lhs,s.Symbol) and not rhs.free_symbols:substitutions[lhs]=rhs
        val=s.simplify(target.subs(substitutions))
        if not val.free_symbols:return val,'Exact substitution '+str(substitutions)+' into '+str(target)
    # Optional nonzero assumptions are retained in the evidence, not mistaken for targets.
    assumptions=[m for m in ms if '\\ne' in m or '\\neq' in m]
    if assumptions:ms=[m for m in ms if m not in assumptions]
    # Pure computations: reject stories, infinite patterns and requested meta-properties.
    if len(ms) == 1 and re.match(r'\s*(?:compute|evaluate|simplify|expand|rationalize|factor\b|add\b|subtract\b|multiply\b|use distribution to compute|what is\s+\$)', low):
        if re.search(r'\bratio\b',low) or any(w in low for w in ['infinite', 'domain', 'degree', 'coefficient', 'which', 'difference', 'sum of', 'term', 'solutions']):
            raise ValueError('property/model requested, not direct evaluation')
        value = expr(ms[0], ci)
        if value.free_symbols and not re.match(r'\s*(?:compute|simplify|expand|rationalize|factor|add\b|subtract\b|multiply\b|what is\s+\$)', low):
            raise ValueError('unbound symbols')
        return s.simplify(value), 'Exact expression evaluation / polynomial identity from the sole supplied expression: ' + str(value) + ('; explicit assumptions: '+str(assumptions) if assumptions else '')
    # Simultaneous equations / direct substitutions with one requested expression.
    if len(ms) >= 2 and re.match(r'\s*(?:if|given|let|suppose)', low) and not any(w in low for w in ['function', 'roots', 'sequence', 'line', 'circle', 'parabola', 'range', 'domain']):
        eqs = [m for m in ms if m.count('=') == 1]
        target = ms[-1]
        if eqs and '=' not in target and (re.search(r'(?:what is|find|compute|evaluate)', low)):
            t = expr(target, ci)
            equations = [expr(m.split('=')[0], ci)-expr(m.split('=')[1], ci) for m in eqs]
            symbols = sorted(set().union(*(e.free_symbols for e in equations), t.free_symbols), key=str)
            if len(symbols)>3 or not all(e.is_polynomial(*symbols) or s.together(e).as_numer_denom()[0].is_polynomial(*symbols) for e in equations):
                raise ValueError('Nonpolynomial or high-dimensional model needs a dedicated bounded solver.')
            solutions = s.solve(equations, symbols, dict=True)
            vals = [s.simplify(t.subs(sol)) for sol in solutions]
            if vals and not any(v.free_symbols for v in vals) and all(same(vals[0], v) for v in vals):
                return vals[0], 'Exact equations ' + str(equations) + '; requested ' + str(t) + '; all solution branches give ' + str(vals[0])
    raise ValueError('no independent model implemented for this stem')

def arithmetic_claims(solution):
    """Check numerical equalities in explanations; never use these to derive a key."""
    checked=[]; failed=[]
    for m in maths(solution):
        if '=' not in m or any(token in m for token in ['\\approx', '\\ne', '\\le', '\\ge', '\\to', '\\ldots', '\\cdots']): continue
        if re.search(r'\b[A-Za-z](?:\^\{-1\})?\(',m):continue
        if m.lstrip().startswith('+'):continue
        parts=m.split('=')
        try:
            values=[expr(x) for x in parts]
            if any(v.free_symbols for v in values): continue
            if all(same(values[0], x) for x in values[1:]): checked.append(m)
            else: failed.append(m)
        except Exception: pass
    return {'checked':checked, 'mismatches':failed, 'scope':'Numeric equality fragments only; prose and symbolic arguments need separate review.'}

def audit(r):
    p=r['p']
    row={k:r[k] for k in ['id','path']}
    row['sourceDigest']=r['digest']
    row['conditions']='Independent model uses the stem; unsupported verbal conditions remain needs-review.'
    row['limitations']=['Explanation numeric equalities screened; symbolic/prose explanation is not exhaustively certified.']
    row['status']='needs-review'
    row['explanation']=arithmetic_claims(p.get('solution',''))
    try:
        computed,method=derive(p['q'],p.get('fig'),r.get('chapter'),p.get('choices'))
        row.update(computed=str(computed),method=method)
        choices=p.get('choices')
        ci=r.get('chapter') in [12,13]
        if isinstance(computed,tuple) and computed[0] in ['point','points','point-kind','center-radius','word','equation','assignments']:
            kind,expected=computed
            def match_structured(text):
                if kind=='word':return bool(re.match(r'\s*'+expected+r'\b',text,re.I))
                if kind=='equation':
                    equations=[m for m in maths(text) if m.count('=')==1]
                    if len(equations)!=1:raise ValueError('Equation answer must contain exactly one equality.')
                    a,b=map(expr,equations[0].split('='));ratio=s.cancel((a-b)/expected)
                    return ratio!=0 and not ratio.free_symbols
                if kind in ['point','points','point-kind','center-radius']:
                    points=[]
                    for a,b in re.findall(r'\(([^(),]+),\s*([^(),]+)\)',text):
                        try:
                            point=(expr(a),expr(b))
                            if not any(v.free_symbols for v in point):points.append(point)
                        except Exception:pass
                    if kind=='points':
                        if not points and all(pt[1]==0 for pt in expected):
                            for m in maths(text):
                                if re.fullmatch(r'x\s*=.+',m):points.append((expr(m.split('=')[1]),s.Integer(0)))
                        return set(points)==set(expected)
                    if kind=='point-kind':return len(points)==1 and all(same(a,b) for a,b in zip(points[0],expected[0])) and expected[1] in text.lower()
                    if kind=='center-radius':
                        radius=re.search(r'radius\s*(?:is|=)?\s*\$([^$]+)\$',text,re.I)
                        if not radius:raise ValueError('Radius label not identified.')
                        return len(points)==1 and all(same(a,b) for a,b in zip(points[0],expected[:2])) and same(expr(radius[1]),expected[2])
                    if len(points)==1:return all(same(a,b) for a,b in zip(points[0],expected))
                    raise ValueError('Point answer must have exactly one ordered coordinate pair.')
                assignments={}
                for m in maths(text):
                    for piece in m.split(','):
                        if piece.count('=')==1:
                            a,b=piece.split('=')
                            if a.strip() in expected:assignments[a.strip()]=expr(b)
                if not assignments and choices and len(expected)==2:
                    points=re.findall(r'\(([^(),]+),\s*([^(),]+)\)',text)
                    if len(points)==1:assignments=dict(zip(expected,map(expr,points[0])))
                if set(assignments)!=set(expected):raise ValueError('Not every named solution variable was identified.')
                return all(same(assignments[k],v) for k,v in expected.items())
            if choices:
                matches=[i for i,c in enumerate(choices) if match_structured(c)]
                row.update(matchingChoices=matches,keyMatch=matches==[p['answer']],uniqueChoice=len(matches)==1,status='verified' if matches==[p['answer']] else 'possible-error')
            else:
                match=match_structured(p['answer']);row.update(keyMatch=match,uniqueChoice=None,status='verified' if match else 'possible-error')
            return row
        if isinstance(computed,tuple) and computed[0]=='named':
            expected=computed[1];assert not choices
            supplied={}
            for m in maths(p['answer']):
                lhs,rhs=m.split('=',1);supplied[lhs.strip()]=expr(rhs)
            match=set(supplied)==set(expected) and all(same(expected[t],supplied[t]) for t in expected)
            row.update(status='verified' if match else 'possible-error',keyMatch=match,uniqueChoice=None)
            return row
        if choices:
            matches=[]; unreadable=[]
            if isinstance(computed,tuple) and computed[0]=='choices':
                matches=computed[1]
                row.update(matchingChoices=matches,uninterpretedChoices=[],key=p['answer'],keyMatch=p['answer'] in matches,uniqueChoice=len(matches)==1)
                row['status']='verified' if matches==[p['answer']] else 'possible-error'
                return row
            for i,c in enumerate(choices):
                try:
                    count_claim=re.match(r'(One|Two|Three|Four) solutions?',c,re.I)
                    if count_claim and isinstance(computed,s.FiniteSet):
                        claimed={'one':1,'two':2,'three':3,'four':4}[count_claim[1].lower()]
                        if len(computed)!=claimed:continue
                    if isinstance(computed,tuple) and computed[0]=='count' and not maths(c):
                        roots=computed[1];label=c.lower();count=s.oo if roots==s.S.Reals else len(roots)
                        if 'infinitely' in label:match=count==s.oo
                        elif label in ['none','no solutions']:match=count==0
                        elif 'one' in label:match=count==1
                        elif 'two' in label:match=count==2
                        else:raise ValueError('Unparsed count choice.')
                        if match:matches.append(i)
                        continue
                    if c.lower().startswith('it cannot be simplified'):
                        m=maths(p['q'])[0];raw=parse_expr(latex(m),local_dict=LOCAL,transformations=TRANSFORMS,evaluate=False)
                        if len(s.Add.make_args(s.expand(raw)))<len(s.Add.make_args(raw)):continue
                        raise ValueError('Cannot exclude verbal simplification choice.')
                    v=ans_value(c,ci)
                    if isinstance(computed,tuple) and computed[0]=='count':
                        roots=computed[1]
                        if 'solution' in c.lower() or 'infinitely' in c.lower() or any('=' in m for m in maths(c)) or re.match(r'(?:one|two|three|four),',c.lower()):
                            if not isinstance(v,s.Set):v=s.FiniteSet(v)
                            match=same(roots,v)
                        else:match=same(s.Integer(len(roots)),v) if isinstance(roots,s.FiniteSet) or roots==s.EmptySet else False
                    else:
                        if isinstance(computed,s.Set) and not isinstance(v,s.Set):v=s.FiniteSet(v)
                        match=same(computed,v)
                    if match:matches.append(i)
                except Exception:unreadable.append(i)
            row.update(matchingChoices=matches,uninterpretedChoices=unreadable,key=p['answer'],keyMatch=p['answer'] in matches,uniqueChoice=len(matches)==1 and not unreadable)
            if unreadable:row['reason']='At least one choice still needs semantic interpretation.'
            elif matches == [p['answer']]:row['status']='verified'
            else:row['status']='possible-error';row['reason']='Independent result does not identify exactly the keyed choice.'
        else:
            if 'excluded values first' in p['q'].lower():
                ms=maths(p['answer']);solution=next(m for m in ms if '=' in m and '\\ne' not in m)
                declared=ans_value('$'+solution+'$',ci)
                domain_bounds=[m for m in ms if '\\ne' in m]
                x=next(iter(set().union(*(d.free_symbols for d in denominators(p['q'])))))
                excluded=s.Union(*(s.solveset(d,x,domain=s.S.Reals) for d in denominators(p['q'])))
                listed=s.Union(*(s.S.Reals-relation_set(m) for m in domain_bounds))
                match=same(computed,s.FiniteSet(declared)) and same(excluded,listed)
                row.update(keyMatch=match,uniqueChoice=None,computed=str(computed),domainEvidence='Original denominators exclude '+str(excluded)+'; authored exclusions='+str(listed),status='verified' if match else 'possible-error')
                return row
            v=ans_value(p['answer'],ci)
            if isinstance(computed,s.Set) and not isinstance(v,s.Set):v=s.FiniteSet(v)
            row['authoredAnswer']=p['answer']
            row['keyMatch']=same(computed,v);row['uniqueChoice']=None
            if same(computed,v):row['status']='verified'
            else:row['status']='possible-error';row['reason']='Independent result differs from authored worksheet answer.'
        if row['status']=='verified' and 'factor' in p['q'].lower() and 'completely' in p['q'].lower():
            authored=p['choices'][p['answer']] if choices else p['answer']
            row['factorFormEvidence']='Every displayed nonconstant factor is primitive and irreducible over Q: '+str(complete_factor_form(authored))
    except Exception as e:
        row['status']='needs-review'
        row['reason']=str(e)
    return row

def worker(pipe):
    while True:
        item=pipe.recv()
        if item is None:return
        try:pipe.send(audit(item))
        except Exception as e:pipe.send({'id':item['id'],'sourceDigest':item['digest'],'status':'needs-review','reason':str(e)})

if __name__=='__main__':
    import sys
    import multiprocessing as mp
    all_items=json.loads((ROOT/'notes/answer-audits/intro-algebra-source.json').read_text(encoding='utf-8'))
    items=all_items
    selected=set(map(int,sys.argv[1:])) if len(sys.argv)>1 else None
    if selected:items=[r for r in items if r.get('chapter') in selected]
    out=ROOT/'notes/answer-audits/intro-algebra-ledger.jsonl'
    manual_path=ROOT/'notes/answer-audits/intro-algebra-manual.json'
    manual={r['id']:r for r in json.loads(manual_path.read_text(encoding='utf-8'))} if manual_path.exists() else {}
    reviewed_path=ROOT/'notes/answer-audits/intro-algebra-reviewed.json'
    if reviewed_path.exists():manual.update({r['id']:r for r in json.loads(reviewed_path.read_text(encoding='utf-8'))})
    for chapter_receipts in sorted((ROOT/'notes/answer-audits').glob('intro-algebra-ch*-reviewed.json')):
        manual.update({r['id']:r for r in json.loads(chapter_receipts.read_text(encoding='utf-8'))})
    previous={r['id']:r for r in (json.loads(line) for line in out.read_text(encoding='utf-8').splitlines())} if selected and out.exists() else {}
    rows=[previous[r['id']] for r in all_items if r.get('chapter') not in selected and r['id'] in previous and previous[r['id']]['sourceDigest']==r['digest']] if selected else []
    parent,child=mp.Pipe();proc=mp.Process(target=worker,args=(child,));proc.start()
    # Publish a complete snapshot only: interrupted runs must not truncate the
    # last usable ledger while another audit reads it.
    pending=out.with_suffix('.jsonl.pending')
    with pending.open('w',encoding='utf-8') as stream:
        for row in rows:stream.write(json.dumps(row,ensure_ascii=False)+'\n')
        for i,r in enumerate(items):
            parent.send(r)
            if parent.poll(5):row=parent.recv()
            else:
                proc.terminate();proc.join();parent,child=mp.Pipe();proc=mp.Process(target=worker,args=(child,));proc.start()
                row={'id':r['id'],'sourceDigest':r['digest'],'status':'needs-review','method':'Independent solver timed out after 5 seconds; no result trusted.','reason':'Dedicated symbolic/casework model required.'}
            if r['id'] in manual and manual[r['id']]['sourceDigest']==r['digest']:
                # The independent reviewed proof replaces the attempted model.
                # Do not retain a failed parser's reason, unmatched choices or
                # partial computed result alongside a valid manual receipt.
                row={'id':r['id'],'path':r['path'],**manual[r['id']]}
            rows.append(row);stream.write(json.dumps(row,ensure_ascii=False)+'\n');stream.flush()
            if i%100==0:print(i,r['id'],flush=True)
    parent.send(None);proc.join(5)
    pending.replace(out)
    from collections import Counter
    print(dict(Counter(r['status'] for r in rows)))
