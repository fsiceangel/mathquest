"""Exact named-function evaluator with table and composition support."""
import re
import sympy as s

def derive(q,choices,expr,maths,same,relation_set):
    low=q.lower();ms=maths(q);defs={};table={};x=s.Symbol('x',real=True)
    for m in ms:
        match=re.fullmatch(r'([A-Za-z])\(([^()]*)\)\s*=\s*(.+)',m)
        if not match:continue
        name,arg,rhs=match.groups()
        if re.search(r'[A-Za-z](?:\^\{-1\})?\(',rhs):continue
        try:
            v=expr(rhs);a=expr(arg)
            if not a.free_symbols and not v.free_symbols:table[(name,a)]=v
            elif isinstance(a,s.Symbol):defs[name]=(a,v)
        except Exception:pass
    def evaluate(t):
        t=t.replace('\\left','').replace('\\right','')
        # Pointwise function arithmetic.
        m=re.fullmatch(r'\(([A-Za-z])\s*(\+|-|\\cdot)\s*([A-Za-z])\)\((.+)\)',t)
        if m:
            a=evaluate(m[1]+'('+m[4]+')');b=evaluate(m[3]+'('+m[4]+')')
            return a+b if m[2]=='+' else a-b if m[2]=='-' else a*b
        m=re.fullmatch(r'\\frac\{([A-Za-z])\}\{([A-Za-z])\}\((.+)\)',t)
        if m:
            a=evaluate(m[1]+'('+m[3]+')');b=evaluate(m[2]+'('+m[3]+')');assert b!=0;return a/b
        # Innermost function calls first, including inverse applications.
        for _ in range(20):
            m=re.search(r'([A-Za-z])(\^\{-1\})?\(([^()]*)\)',t)
            if not m:return s.simplify(expr(t))
            name,inv,arg=m.groups();v=expr(arg)
            if inv:
                if name in defs:
                    var,form=defs[name];u=s.Dummy('input',real=True);domain=s.S.Reals
                    for bound in ms:
                        if re.search(r'\\(?:le|ge)|[<>]',bound):domain=s.Intersection(domain,relation_set(bound))
                    roots=s.solveset(form.subs(var,u)-v,u,domain=domain)
                else:roots=s.FiniteSet(*(a for (n,a),out in table.items() if n==name and same(out,v)))
                assert isinstance(roots,s.FiniteSet) and len(roots)==1,'Inverse needs a unique admissible preimage.'
                result=next(iter(roots))
            elif (name,v) in table:result=table[(name,v)]
            elif name in defs:
                var,form=defs[name];result=form.subs(var,v)
            else:raise ValueError('Unspecified function/table input '+name+'('+str(v)+').')
            # A placeholder keeps nested function arguments free of parentheses without losing arithmetic grouping.
            t=t[:m.start()]+'('+str(result)+')'+t[m.end():]
            # Strip parentheses around a pure argument for the next nested call.
            t=re.sub(r'([A-Za-z](?:\^\{-1\})?)\(\(([^()]*)\)\)',r'\1(\2)',t)
        raise ValueError('Function nesting exceeded supported depth.')
    if defs or table:
        if 'find the inverse of' in low and len(defs)==1:
            name=next(iter(defs));return evaluate(name+'^{-1}(x)'),'Solve f(u)=x for a fresh variable u; retain domain restrictions.'
        if 'range' in low and len(defs)==1 and 'any real' in low:
            from sympy.calculus.util import function_range
            var,form=next(iter(defs.values()));return function_range(form,var,s.S.Reals),'Exact real image of '+str(form)+'.'
        question=re.split(r'(?:what is|find both|find|compute)',q,flags=re.I)
        if len(question)>1 and not any(t in low for t in ['domain','range','linear function','satisfies','which','inverse of']):
            targets=maths(question[-1]);targets=[t for t in targets if '=' not in t]
            if targets and all(re.search(r'[A-Za-z].*\(',t) for t in targets):
                vals={t:evaluate(t) for t in targets}
                if len(vals)==1:return next(iter(vals.values())),'Parse definitions/table '+str(defs or table)+' and apply each requested function from innermost to outermost.'
                return ('named',vals),'Independently evaluate every named expression, retaining order and labels: '+str(vals)
        if table and choices and 'formula fits' in low:
            valid=[]
            for i,c in enumerate(choices):
                cm=maths(c)[0];rhs=cm.split('=',1)[-1];form=expr(rhs)
                if all(same(form.subs(x,a),v) for (name,a),v in table.items()):valid.append(i)
            return ('choices',valid),'Substitute every table input into every candidate formula and require all outputs to match.'
        if table and ('for which input' in low or 'which input' in low):
            target=re.fullmatch(r'([A-Za-z])\(x\)\s*=\s*(.+)',ms[-1])
            if target:
                val=expr(target[2]);roots=[a for (n,a),v in table.items() if n==target[1] and same(v,val)]
                if len(roots)==1:return roots[0],'Search the entire given table for the unique requested output.'
    return None
