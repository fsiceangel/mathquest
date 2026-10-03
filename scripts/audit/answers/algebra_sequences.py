"""Chapter 21 independent stem models; imports are injected to avoid parser duplication."""
import re
import sympy as s

def derive(q, choices, expr, maths, ans_value):
    low=q.lower(); ms=maths(q)
    repeat=re.search(r'0\.\\overline\{(\d+)\}',q)
    if repeat:return s.Rational(int(repeat[1]),10**len(repeat[1])-1),'Repeating block divided by 10^block_length-1.'
    def listvalues(m):return [expr(v.strip()) for v in m.replace(r'\ldots','').replace(r'\cdots','').split(',') if v.strip()]
    if choices and not ms and ('sequence' in low or 'series' in low):
        valid=[];evidence=[]
        for i,c in enumerate(choices):
            m=maths(c)[0]
            vals=listvalues(m) if ',' in m else [expr(v) for v in re.split(r'\s*\+\s*',m.replace(r'\cdots','').strip(' +'))]
            differences=[b-a for a,b in zip(vals,vals[1:])];ratios=[b/a for a,b in zip(vals,vals[1:])] if all(vals[:-1]) else []
            arithmetic=bool(differences) and len(set(differences))==1
            geometric=bool(ratios) and len(set(ratios))==1
            ok=arithmetic if 'arithmetic' in low else (geometric and abs(ratios[0])<1 if 'series' in low else geometric)
            if ok:valid.append(i)
            evidence.append((vals,differences,ratios,ok))
        return ('choices',valid),'Every displayed prefix independently checked for requested constant difference/ratio or |ratio|<1 convergence: '+str(evidence)
    seqs=[m for m in ms if ',' in m and r'\ldots' in m]
    if seqs:
        vals=listvalues(seqs[0]);a=vals[0];d=vals[1]-a;r=vals[1]/a
        arithmetic='arithmetic' in low or 'adding the same amount' in low or 'how many terms are in' in low
        if arithmetic:
            prefix=vals[:-1] if not seqs[0].rstrip().endswith(r'\ldots') else vals
            assert all(b-a==d for a,b in zip(prefix,prefix[1:]))
            if 'common difference' in low:out=d
            elif 'next term' in low:out=vals[-1]+d
            elif 'which of these numbers' in low:
                valid=[i for i,c in enumerate(choices) if (ans_value(c)-a)/d in s.S.Naturals0]
                return ('choices',valid),'For each option v, checked (v-first)/difference is a nonnegative integer.'
            elif 'less than' in low:out=s.Max(0,s.ceiling((expr(ms[-1])-a)/d))
            elif 'how many terms are in' in low:out=(vals[-1]-a)/d+1;assert out.is_integer
            else:
                n=int(re.search(r'\$(\d+)\$(?:st|nd|rd|th)',q)[1]);out=a+(n-1)*d
            return out,'Arithmetic sequence independently validated; first='+str(a)+', difference='+str(d)+', a_n=first+(n-1)d.'
        if 'geometric' in low or 'same fraction' in low:
            assert all(b/a==r for a,b in zip(vals,vals[1:]))
            if 'common ratio' in low:out=r
            elif 'next term' in low:out=vals[-1]*r
            else:n=int(re.search(r'\$(\d+)\$(?:st|nd|rd|th)',q)[1]);out=a*r**(n-1)
            return out,'Geometric prefix validated; first='+str(a)+', ratio='+str(r)+', a_n=first*ratio^(n-1).'
    if 'form an arithmetic sequence' in low:
        a,_,b=listvalues(ms[0]);return (a+b)/2,'Middle term is arithmetic mean of its two neighbors.'
    if 'form a geometric sequence' in low and 'negative' in low:
        a,_,b=listvalues(ms[0]);return -s.sqrt(a*b),'Middle term squared equals product of neighbors; explicit negative condition selects negative root.'
    if 'three consecutive' in low and 'increasing arithmetic' in low:
        total,last=map(expr,ms);return last-total/3,'Middle term = total/3; positive common difference = largest-middle.'
    if 'arithmetic sequence' in low and 'first term' in low and 'common difference' in low:
        a,n,b=map(expr,ms);return (b-a)/(n-1),'Solve first+(n-1)d=given nth term.'
    if 'arithmetic sequence' in low and len(ms)==5:
        i,a,j,b,k=map(expr,ms);d=(b-a)/(j-i);return a+(k-i)*d,'Two specified indexed terms determine d='+str(d)+'; extend to requested index.'
    if 'arithmetic series' in low:
        n,a,b=map(expr,ms)
        return (2*b/n-a if 'last term' in low else n*(a+b)/2),'Pair endpoints: S=n(first+last)/2; solve the requested missing quantity.'
    if 'geometric mean' in low:
        a,b=map(expr,ms);return s.sqrt(a*b),'Positive geometric mean is sqrt(product).'
    if 'geometric sequence' in low and 'which term equals' in low:
        a,r,b=map(expr,ms);indices=[n for n in range(1,1001) if a*r**(n-1)==b]
        assert len(indices)==1
        return s.Integer(indices[0]),'Enumerated exact a*r^(n-1), n=1..1000; monotonic magnitude excludes later matches.'
    if 'geometric sequence' in low and 'term' in low and len(ms)==4:
        i,a,j,b=map(expr,ms);delta=j-i
        if delta%2==1:r=s.real_root(b/a,delta)
        elif 'positive common ratio' in low:r=s.sqrt(b/a)
        else:raise ValueError('Geometric ratio sign not determined.')
        return s.simplify(a/r**(i-1)),'Recover real ratio from a_j/a_i=r^(j-i), with explicit sign condition if even power; back-substitute first term.'
    if 'geometric sequence of positive numbers' in low and len(ms)==5:
        i,a,j,b,k=map(expr,ms);assert k==(i+j)/2
        return s.sqrt(a*b),'Positive middle geometric term is sqrt(product of equidistant known terms).'
    if 'infinite geometric series' in low:
        a,b=map(expr,ms)
        out=1-a/b if 'common ratio?' in low else a*(1-b)
        ratio=out if 'common ratio?' in low else b
        assert abs(ratio)<1
        return out,'Convergent geometric sum S=a/(1-r); verified |r|<1 and solved requested quantity.'
    if 'after how many' in low and any(w in low for w in ['exceed','more than']):
        forms=[expr(m) for m in ms if '^' in m];assert len(forms)==1
        form=forms[0];x=next(iter(form.free_symbols));bound=expr(ms[-1]);n=0
        assert form.subs(x,1)>form.subs(x,0)>0
        while form.subs(x,n)<=bound:n+=1;assert n<1000
        return s.Integer(n),'Enumerated exact increasing exponential at nonnegative integer times; previous value='+str(form.subs(x,n-1))+', first exceeding value='+str(form.subs(x,n))+'.'
    if 'sum of the first' in low:
        n=expr(ms[0]);d=2 if 'even' in low or 'odd' in low else expr(ms[1]);a=1 if 'odd' in low else d
        return n*(2*a+(n-1)*d)/2,'Arithmetic endpoint pairing for first n positive specified multiples/odd numbers.'
    if 'odd numbers from' in low or 'every whole number from' in low:
        a,b=map(expr,ms);d=2 if 'odd' in low else 1;n=(b-a)/d+1;assert n.is_integer
        return n*(a+b)/2,'Inclusive arithmetic progression sum with step '+str(d)
    if 'multiples of' in low and 'between' in low:
        d,a,b=map(expr,ms);return s.ceiling(b/d)-s.floor(a/d)-1,'Strict interval a<dk<b: integers k=floor(a/d)+1,...,ceil(b/d)-1.'
    if 'one' in low and 'fewer' in low and len(ms)==2:
        a,b=map(expr,ms);return (a-b+1)*(a+b)/2,'One fewer per row: inclusive sum of all counts from top to bottom.'
    if any(w in low for w in ['seats','chairs']) and len(ms)==3 and 'more' in low:
        n,a,d=map(expr,ms);return n*(2*a+(n-1)*d)/2,'Row counts are a+(i-1)d; pair first and final row over n rows.'
    if 'plan' in low and len(ms)==4 and 'day' in low:
        a,start,d,n=map(expr,ms);assert start==1
        if 'drops' in low:d=-d
        assert a+(n-1)*d>=0
        return n*(2*a+(n-1)*d)/2,'Daily arithmetic totals; last count nonnegative; exact endpoint pairing.'
    if 'ball' in low and ('dropped' in low or 'drops' in low) and ('forever' in low or 'never stops' in low):
        a=expr(ms[0]);r=expr(ms[1]) if len(ms)>1 else s.Rational(1,2);assert 0<r<1
        return a*(1+r)/(1-r),'Initial downward travel a, followed by twice geometric rebound heights: a+2ar/(1-r).'
    if ('pendulum' in low or 'metronome' in low) and 'arc' in low:
        a,b,r=map(expr,ms);assert b/a==r and 0<r<1
        return a+2*b/(1-r),'Arc distance: initial a to rest, then every subsequent signed excursion traversed twice; a+2b/(1-r).'
    if 'spring toy' in low:
        a,r=map(expr,ms);assert 0<r<1
        return 2*a/(1-r),'Starts at floor, so every ascent is paired with descent: 2a/(1-r).'
    if len(ms)==1 and ('compute' in low or 'adds' in low or 'which difference equals' in low):
        m=ms[0]
        if r'\cdots' not in m:return expr(m),'Direct exact finite arithmetic.'
        consecutive=re.findall(r'\\frac\{1\}\{(\d+)\s*\\cdot\s*(\d+)\}',m)
        if consecutive:
            pairs=[tuple(map(int,p)) for p in consecutive];assert all(b==a+1 for a,b in pairs)
            assert pairs[1][0]==pairs[0][0]+1
            a=pairs[0][0];b=pairs[-1][1]
            return (s.Rational(1,a) if 'infinite' in low else s.Rational(1,a)-s.Rational(1,b)),'Telescope 1/[k(k+1)]=1/k-1/(k+1); final reciprocal tends to zero only for the explicitly infinite series.'
        product=re.findall(r'\\frac\{(\d+)\}\{(\d+)\}',m)
        if product and ('product' in low or r'\left' in m):
            pairs=[tuple(map(int,p)) for p in product]
            if r'\left' in m:
                den=[b for a,b in pairs];assert all(a==1 for a,b in pairs) and den[1]==den[0]+1
                plus='1 +' in m;a,b=den[0],den[-1]
                return s.Rational(b+1,a) if plus else s.Rational(a-1,b),'Cancel adjacent factors (k+1)/k or (k-1)/k over all consecutive indices.'
            assert all(a==b+1 for a,b in pairs) and pairs[1][1]==pairs[0][1]+1
            return s.Rational(pairs[-1][0],pairs[0][1]),'Adjacent numerator/denominator cancellation in consecutive product.'
        before,after=m.split(r'\cdots');prefix=[expr(v) for v in re.split(r'\s+\+\s+|\s+(?=-\s)',before.strip(' +')) if v.strip()]
        last=expr(after.strip(' +')) if after.strip(' +') else None
        a=prefix[0];d=prefix[1]-a;r=prefix[1]/a
        if len(prefix)>=3 and all(y-x==d for x,y in zip(prefix,prefix[1:])) and last is not None:
            n=(last-a)/d+1;assert n.is_integer and n>0
            return n*(a+last)/2,'Validated displayed arithmetic differences; exact endpoint index and paired sum.'
        assert all(y/x==r for x,y in zip(prefix,prefix[1:]))
        if last is None:
            assert abs(r)<1 and ('infinite' in low or 'forever' in low)
            return a/(1-r),'Validated geometric ratios and |r|<1; infinite sum a/(1-r).'
        indices=[n for n in range(1,1001) if a*r**(n-1)==last];assert len(indices)==1
        n=indices[0]
        return sum(a*r**i for i in range(n)),'Validated geometric prefix and exact last-term index; independently summed all '+str(n)+' terms.'
    raise ValueError('Chapter 21 stem still requires a dedicated proof.')
