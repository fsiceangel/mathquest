import re
import sympy as s

def derive(q,choices,expr,maths,ans_value,solve_equation):
    low=q.lower();ms=maths(q)
    if 'between which two consecutive integers' in low:
        v=expr(ms[0]);n=s.floor(v);assert n<v<n+1
        return s.FiniteSet(n,n+1),'Exact integer bounds: '+str(n)+' < '+str(v)+' < '+str(n+1)
    if choices and ('least to greatest' in low or 'greatest to least' in low):
        vals=[expr(m) for m in ms];descending='greatest to least' in low;valid=[]
        for i,c in enumerate(choices):
            cc=maths(c);seq=[expr(x) for x in (cc[0].split(',') if len(cc)==1 else cc)]
            if len(seq)==len(vals) and set(seq)==set(vals) and all((a>b if descending else a<b) for a,b in zip(seq,seq[1:])):valid.append(i)
        return ('choices',valid),'Check each list is a permutation of supplied values and every consecutive comparison has the requested sign.'
    if choices and ('operations' in low or 'swapping the two' in low):
        standard={'addition':True,'multiplication':True,'subtraction':False,'division':False};valid=[]
        for i,c in enumerate(choices):
            if c.lower() in standard and standard[c.lower()]!=('not commutative' in low):valid.append(i)
        return ('choices',valid),'Addition and multiplication are commutative/associative by real-field axioms; subtraction and division fail (2,3,4) examples.'
    if choices and any(x in low for x in ['whole number','not an integer','not rational','is rational']):
        vals=[ans_value(c) for c in choices]
        if 'not a whole number' in low:ok=lambda v:v.is_integer and v<0
        elif 'whole number' in low:ok=lambda v:v.is_integer and v>=0
        elif 'not an integer' in low:ok=lambda v:v.is_integer is False
        elif 'not rational' in low:ok=lambda v:v.is_rational is False
        else:ok=lambda v:v.is_rational is True
        return ('choices',[i for i,v in enumerate(vals) if ok(v)]),'Exact type classification of each option: '+str(vals)
    if choices and ('which is greater' in low or 'which is smaller' in low):
        vals=[expr(m) for m in ms];assert len(vals)==2 and vals[0]!=vals[1]
        result=min(vals) if 'smaller' in low else max(vals);valid=[]
        for i,c in enumerate(choices):
            if re.fullmatch(r'\$[^$]+\$',c) and ans_value(c)==result:valid.append(i)
        return ('choices',valid),'Exact strict comparison of both supplied real numbers; equality/incomparability alternatives are false.'
    if choices and ('statement' in low or 'comparison' in low) and any(any(op in c for op in ['<','>','=']) for c in choices):
        valid=[];proof=[]
        for i,c in enumerate(choices):
            if len(maths(c))!=1:proof.append('verbal incomparability false for these real numbers');continue
            m=maths(c)[0];parts=re.split(r'([<>=])',m)
            if len(parts)!=3:raise ValueError('Unparsed comparison choice.')
            a,b=expr(parts[0]),expr(parts[2]);v={'<':a<b,'>':a>b,'=':s.Eq(a,b)}[parts[1]];proof.append(str(v))
            if v==s.true:valid.append(i)
        return ('choices',valid),'Independently evaluated every real comparison: '+str(proof)
    if ('means the same thing as' in low or 'same value as' in low or 'expression' in low and 'equal to' in low) and len(ms)==1:
        return expr(ms[0]),'Evaluate source expression, then compare every full option exactly.'
    if low.startswith('you know that'):
        return expr(ms[-1]),'Directly compute requested final subtraction; supplied example not used as an answer key.'
    if 'fill in the blank' in low:
        result,proof=solve_equation(ms[0].replace(r'\square','z'))
        return result,proof
    if ('how far apart' in low or 'distance between' in low) and 'number line' in low:
        a,b=map(expr,ms);return abs(a-b),'Number-line distance = absolute difference of endpoints.'
    if choices and low.startswith('which of these equations'):
        roots=[solve_equation(maths(c)[0])[0] for c in choices]
        valid=[i for i,v in enumerate(roots) if v==(s.EmptySet if 'no solution' in low else s.S.Reals)]
        return ('choices',valid),'Solve every candidate equation independently: '+str(roots)
    if low.startswith('for what value of') and 'every number' in low:
        target=expr(ms[0]);m=next(m for m in ms if '=' in m);lhs,rhs=map(expr,m.split('='));remaining={expr(ms[-1])}
        polynomial=s.Poly(s.expand(lhs-rhs),*remaining);roots=s.solve(polynomial.all_coeffs(),target)
        result=roots[target] if isinstance(roots,dict) else roots[0][0]
        assert s.expand((lhs-rhs).subs(target,result))==0
        return result,'Every coefficient of equation difference must vanish; parameter '+str(target)+'='+str(result)+' makes identity zero.'
    if low.startswith('if') and len(ms)==2 and '^' in ms[0] and '=' in ms[0]:
        roots,proof=solve_equation(ms[0]);target=expr(ms[1]);x=next(iter(target.free_symbols))
        vals={s.simplify(target.subs(x,v)) for v in roots};assert len(vals)==1
        return next(iter(vals)),proof+' Substitute all independently found roots into requested expression.'
    if low.startswith('compute') and len(ms)==1 and r'\cdots' in ms[0]:
        numbers=list(map(int,re.findall(r'\d+',ms[0])));start,end=numbers[0],numbers[-1]
        step=1 if end>start else -1;values=list(range(start,end+step,step));assert len(values)%2==0
        prefix=re.split(r'\\cdots',ms[0])[0];assert len(re.findall(r'[+-]',prefix))>=3
        out=sum(v*(-1)**i for i,v in enumerate(values))
        return s.Integer(out),'Enumerated every consecutive integer with alternating signs from '+str(start)+' through '+str(end)+'.'
    try:nums=[expr(m.replace(r'\$','')) for m in ms]
    except Exception:nums=[]
    if 'gift bags' in low and 'each bag' in low:
        n,a,b=nums;return n*(a+b),'Each of n bags contains a+b items.'
    if 'stadium sells all' in low:
        a,n=nums;return a*n,'Tickets = seats per show times number of shows.'
    if 'stack of cards' in low and 'gave him' in low:
        a,total=nums;return total-a,'Undo addition of received cards.'
    if 'after paying' in low and 'left' in low:
        paid,left=nums;return paid+left,'Initial money = amount paid + amount left.'
    if 'shelf holds' in low and 'one box' in low:
        n,total=nums;return total/n,'Equal group size = total books / boxes.'
    if 'ribbon is cut' in low:
        n,a=nums;return n*a,'Whole ribbon = number of equal pieces times each length.'
    if 'bike shop charges' in low:
        deposit,rate,total=nums;return (total-deposit)/rate,'Total = deposit + hourly rate*hours.'
    if 'thinks of a number' in low and 'then subtracts' in low:
        rate,minus,total=nums;return (total+minus)/rate,'Undo subtraction, then multiplication.'
    if 'plan a costs' in low and 'plan b costs' in low:
        a,b,c,d=nums;return (c-a)/(b-d),'Solve A_fee+A_rate*m=B_fee+B_rate*m.'
    return None
