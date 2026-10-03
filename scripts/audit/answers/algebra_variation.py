"""Independent proportionality and rate equations parsed from problem statements."""
import re
import sympy as s

def derive(q,choices,expr,maths,ans_value,same):
    low=q.lower();ms=maths(q);x,y,z,k=s.symbols('x y z k',real=True)
    def numeric(m):return expr(m.replace('\\$','').replace('\\%',''))
    nums=[]
    for m in ms:
        try:
            v=numeric(m)
            if not v.free_symbols:nums.append(v)
        except Exception:pass
    def select(test,proof):return ('choices',[i for i,c in enumerate(choices) if test(c)]),proof
    def pairs(text):return [tuple(map(expr,p)) for p in re.findall(r'\(([^(),]+),\s*([^(),]+)\)',text)]
    if low.startswith('two quantities satisfy') and len(ms)==3:
        eqs=[expr(m.split('=')[0])-expr(m.split('=')[1]) for m in ms if '=' in m]
        want=expr(ms[1]);sol=s.solve(eqs,[x,y],dict=True);assert len(sol)==1
        return sol[0][want],'Solve the constant-product equation jointly with the supplied input value.'
    if choices and ('table' in low) and ('proportional' in low or 'constant' in low):
        inverse='inversely' in low or 'xy = k' in q
        def test(c):
            pp=pairs(c);assert len(pp)>=2
            vv=[a*b if inverse else b/a for a,b in pp];return len(set(vv))==1
        return select(test,'For each table compare all '+('products xy' if inverse else 'ratios y/x')+' exactly; no key is consulted.')
    if choices and 'rule fits all' in low:
        pp=pairs(q);assert len(pp)>1
        def test(c):
            a,b=maths(c)[0].split('=');v=expr(a)-expr(b)
            return all(s.simplify(v.subs({x:a,y:b}))==0 for a,b in pp)
        return select(test,'Substitute every given ordered pair into every candidate rule.')
    # Build the proportionality equation from its definition, independently of any supplied key.
    form=None;dep=None
    if 'proportional to' in low or 'varies directly with' in low:
        if '$y$ is' in q:
            dep=y;power=s.Rational(1,2) if '\\sqrt{x}' in q else 2 if '$x^2$' in q else 1
            if 'inversely' in low:power=-power
            form=k*x**power
        elif '$z$' in q:
            dep=z;power=2 if '$x^2$' in q or 'directly with the square of $x$' in low else 1
            power_y=-2 if 'inversely with the square' in low else -1 if 'inversely' in low else 2 if '$y^2$' in q else 1
            form=k*x**power*y**power_y
    definitions=[]
    for m in ms:
        if m.count('=')!=1:continue
        try:
            a,b=map(expr,m.split('='))
            if isinstance(a,s.Symbol) and b.free_symbols:definitions.append((a,b))
        except Exception:pass
    if definitions and form is None:
        dep,form=definitions[0]
    question=re.split(r'(?:What is|what is|Find|find|For what|for what)',q)
    if form is not None and len(question)>=2 and 'stays the same' not in low:
        before=question[0];after=question[-1];first={};second={}
        for target,text in [(first,before),(second,after)]:
            for m in maths(text):
                if m.count('=')==1:
                    try:
                        a,b=map(expr,m.split('='))
                        if isinstance(a,s.Symbol) and not b.free_symbols:target[a]=b
                    except Exception:pass
        if 'constant' in low:
            if k in form.free_symbols:
                sol=s.solve((dep-form).subs(first),k);assert len(sol)==1
                return sol[0],'Proportionality model '+str(dep)+'='+str(form)+' with initial data '+str(first)+' determines k.'
            ratio=s.simplify(form/x)
            if not ratio.free_symbols:return ratio,'Direct proportionality coefficient is y/x.'
        if k in form.free_symbols:
            sol=s.solve((dep-form).subs(first),k)
            if len(sol)!=1 or sol[0].free_symbols:raise ValueError('Initial proportionality data do not uniquely fix k.')
            if maths(after)==['k']:return sol[0],'Substitute the given sample into '+str(dep)+'='+str(form)+' and solve uniquely for k.'
            form=form.subs(k,sol[0])
        # If there is no earlier sample, the numerical assignment is in the question.
        want=maths(after)[0] if maths(after) else None
        if want and re.fullmatch('[xyzPTVLw]',want):
            var=expr(want);equation=(dep-form).subs(second if second else first)
            roots=s.solveset(equation,var,domain=s.Interval.open(0,s.oo) if 'positive value' in low else s.S.Reals)
            if isinstance(roots,s.FiniteSet) and len(roots)==1:
                result=next(iter(roots))
                if not result.free_symbols:return result,'Proportionality '+str(dep)+'='+str(form)+'; substitute requested data '+str(second)+' and solve for '+str(var)+'.'
    # Work/quantity conservation, with explicit number counts preventing accidental matches.
    if len(nums)==3 and 'same rate' in low and ('workers' in low or 'machines' in low or 'tilers' in low or 'crew' in low):
        a,t,b=nums;assert a>0 and b>0
        return a*t/b,'Conserved work = worker count × duration; new duration='+str(a*t/b)+'.'
    if len(nums)==3 and ('same trip' in low or 'meshed' in low):
        a,b,c=nums;assert c>0
        return a*b/c,'Conserved distance/tooth-turn product from the stated equal product: '+str(a*b)+'; divide by new rate/count.'
    if len(nums)==3 and ('per kilogram' in low or 'per metre' in low or 'cups of flour' in low or 'cartridges' in low):
        a,b,c=nums
        out=a*c/b if ('cups' in low or 'cartridges' in low) else b*c/a
        return out,'Constant unit price/material ratio; multiply the requested quantity by the original unit ratio.'
    if len(nums)==5 and 'cost' in low and 'jointly proportional' in low:
        a,b,c,d,e=nums
        out=e*a*b/(c*d) if 'how long' in low else c*d*e/(a*b)
        return out,'Constant cost per area = first price/(length×width); solve for the requested price or dimension.'
    if len(nums)==5 and low.startswith('if') and 'how long' in low:
        machines,items,time,newmachines,newitems=nums
        return time*newitems*machines/(items*newmachines),'Output per worker-hour is constant; time scales with output and inversely with worker count.'
    if len(nums)==2 and 'what is its rate' in low:return nums[0]/nums[1],'Rate = produced quantity divided by elapsed time.'
    if len(nums)==2 and ('how far' in low) and ('per hour' in low):return s.prod(nums),'Distance = speed × elapsed time in matching hours.'
    if len(nums)==1 and 'what fraction' in low and ('one hour' in low or 'one minute' in low):return 1/nums[0],'Uniform fill/empty work in one unit of time is reciprocal of total time.'
    if len(nums)==2 and 'gap' in low and ('close' in low or 'closing' in low):
        return (nums[0]-nums[1] if 'other ride' in low else sum(nums)),'Opposite-direction approach speeds add; subtract a known component when the total is given.'
    if len(nums)==2 and 'alone' in low and ('together' in low or 'with' in low):
        together,alone=nums if 'together' in low else nums[::-1]
        rate=1/together-1/alone;assert rate>0
        return 1/rate,'Missing worker rate = joint rate − known individual rate, all rates reciprocals of stated times.'
    if len(nums) in [2,3] and any(v in low for v in ['pipe','tap','drain','leak']) and any(v in low for v in ['together','both','all three']):
        rate=sum(1/n for n in nums)
        if 'drain' in low or 'leak' in low:rate-=2/nums[-1]
        assert rate>0
        return 1/rate,'Add signed fractional tank rates; fill='+str(rate)+' tanks per unit time, so duration is its reciprocal.'
    if len(nums)==2 and 'alone' in low and ('working together' in low or 'with' in low):
        together,alone=nums if 'working together' in low else nums[::-1]
        rate=1/together-1/alone;assert rate>0
        return 1/rate,'Missing worker rate = joint rate − known individual rate, all rates reciprocals of stated times.'
    if len(nums)==3 and ('meet' in low) and ('toward each other' in low or 'opposite ends' in low):
        if 'how far apart' in low:return (nums[0]+nums[1])*nums[2],'Initial separation = sum of opposite-direction speeds × meeting time.'
        if 'how fast is the other' in low:return nums[0]/nums[1]-nums[2],'Total approach speed = distance/time; subtract the known train speed.'
        distance,a,b=nums;time=distance/(a+b)
        result=time
        if 'farther' in low:result*=abs(a-b)
        elif any(t in low for t in ['how far','how many miles']):result*=min(a,b) if 'slower' in low else max(a,b)
        return result,'Meeting time = initial separation/(sum of approach speeds); multiply by requested participant speed if distance is asked.'
    return None
