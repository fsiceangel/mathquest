"""Exact exponential/logarithm calculations from the supplied mathematical stem."""
import re
import sympy as s

def log_expression(text,expr):
    t=text.replace('\\left','').replace('\\right','').replace('\\,','')
    def group_at(pos,open='(',close=')'):
        assert t[pos]==open
        depth=1;j=pos+1
        while depth:
            if t[j]==open:depth+=1
            if t[j]==close:depth-=1
            j+=1
        return t[pos+1:j-1],j
    def atom(pos):
        while t[pos].isspace():pos+=1
        if t[pos]=='(':return group_at(pos)
        if t.startswith('\\frac',pos):
            a,j=group_at(pos+5,'{','}');b,j=group_at(j,'{','}');return '\\frac{'+a+'}{'+b+'}',j
        if t.startswith('\\sqrt',pos):
            a,j=group_at(pos+5,'{','}');return '\\sqrt{'+a+'}',j
        m=re.match(r'-?(?:\d+(?:\.\d+)?|[A-Za-z])',t[pos:]);assert m
        return m[0],pos+len(m[0])
    while '\\log_' in t:
        start=t.index('\\log_');pos=start+5
        if t[pos]=='{':base,pos=group_at(pos,'{','}')
        else:base,pos=atom(pos)
        arg,end=atom(pos)
        a=log_expression(arg,expr) if '\\log_' in arg else expr(arg)
        b=expr(base);value=s.log(a)/s.log(b)
        t=t[:start]+'('+str(value)+')'+t[end:]
    return s.simplify(expr(t))

def derive(q,choices,expr,maths,same):
    low=q.lower();ms=maths(q)
    if low.startswith(('evaluate','compute')) and ms and '\\log_' in ms[0]:
        return log_expression(ms[0],expr),'Evaluate logarithms exactly as log(argument)/log(base), retaining nested structure and positive real arguments.'
    if '\\log_' in q and any('=' in m for m in ms):
        eq=next(m for m in ms if '\\log_' in m and '=' in m)
        match=re.fullmatch(r'\\log_(?:\{([^}]+)\}|(\w))\s*(.+?)\s*=\s*(.+)',eq)
        if match:
            base=expr(match[1] or match[2]);arg=expr(match[3]);power=expr(match[4]);unknowns=base.free_symbols|arg.free_symbols|power.free_symbols
            if len(unknowns)==1:
                v=next(iter(unknowns));roots=s.solve(base**power-arg,v)
                roots=[r for r in roots if (base.subs(v,r)>0)==True and base.subs(v,r)!=1 and (arg.subs(v,r)>0)==True and r.is_real]
                if len(roots)==1:return roots[0],'Definition log_b(A)=c iff b^c=A, with b>0,b≠1,A>0 checked after solving.'
    # Explicit P,r,t in uncomplicated simple/compound interest statements.
    nums=[]
    for m in ms:
        try:
            v=expr(m.replace('\\$','').replace('\\%',''))
            if not v.free_symbols:nums.append(v)
        except Exception:pass
    periods=4 if 'quarterly' in low else 2 if 'semiannually' in low else 12 if 'monthly' in low else 1
    if low.startswith('you deposit') and len(nums) in [2,3] and ('balance after' in low or 'interest do you earn in the first year' in low):
        P,r=nums[:2];t=nums[2] if len(nums)==3 else s.Integer(1)
        if 'months' in low:t/=12
        if 'simple interest' in low:
            out=P*r*t/100 if 'how much interest' in low else P*(1+r*t/100)
        else:out=P*(1+r/(100*periods))**(periods*t)
        return out,'Principal='+str(P)+', annual rate='+str(r/100)+', years='+str(t)+', periods/year='+str(periods)+'; exact '+('simple-interest' if 'simple interest' in low else 'compound-interest')+' formula.'
    if low.startswith('you deposit') and len(nums)==3 and ('how much more' in low):
        P,r,t=nums;return P*((1+r/100)**t-(1+r*t/100)),'Compound minus simple balance=P[(1+r)^t−(1+rt)] with exact rational rate.'
    if 'what was the principal' in low and len(nums)==3 and 'holds' in low:
        r,t,A=nums
        if 'months' in low:t/=12
        return A/(1+r/(100*periods))**(periods*t),'Invert the compound-interest formula: P=A/(1+r/m)^(mt), with months converted to years.'
    if 'annual rate' in low and 'what is' in low and 'grows to' in low and len(nums)==3:
        P,A,t=nums
        if 'months' in low:t/=12
        return 100*periods*((A/P)**(1/(periods*t))-1),'Invert growth factor A/P=(1+r/m)^(mt) using the positive growth factor and years as time unit.'
    if 'rate does' in low and 'each quarter' in low and len(nums)==1:return nums[0]/4,'Nominal annual rate is split into four equal quarterly rates.'
    if 'compounding periods' in low and len(nums)==1:return nums[0]/periods if 'how long' in low else nums[0]*periods,'Number of periods=years×periods per year; solve for the requested quantity.'
    return None
