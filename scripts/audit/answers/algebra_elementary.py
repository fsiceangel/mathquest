import re
import sympy as s

def phrase(text,expr,maths):
    text=text.lower().replace('$','').strip(' "?')
    for word,n in [('twice',2),('half of',s.Rational(1,2)),('two',2),('three',3),('four',4),('five',5),('six',6),('seven',7),('eight',8),('nine',9)]:
        text=text.replace(word,str(n)+' times' if word=='twice' else str(n))
    text=text.replace('a number ','').replace('a number','x')
    m=re.fullmatch(r'([\d/]+) less than ([\d/]+)(?: times)? ([a-z])',text)
    if m:return expr(m[2])*expr(m[3])-expr(m[1])
    m=re.fullmatch(r'the product of (\d+) and the sum of ([a-z]) and (\d+)',text)
    if m:return expr(m[1])*(expr(m[2])+expr(m[3]))
    m=re.fullmatch(r'([\d/]+) times the (sum|difference) of ([a-z]) and ([a-z]|\d+)(?:, (increased|decreased) by ([a-z]|\d+))?',text)
    if m:
        out=expr(m[1])*(expr(m[3])+(1 if m[2]=='sum' else -1)*expr(m[4]))
        return out+((1 if m[5]=='increased' else -1)*expr(m[6]) if m[5] else 0)
    m=re.fullmatch(r'(\d+) less than (\d+) times the sum of ([a-z]) and ([a-z])',text)
    if m:return expr(m[2])*(expr(m[3])+expr(m[4]))-expr(m[1])
    m=re.fullmatch(r'the product of (\d+) and ([a-z]), decreased by (\d+)',text)
    if m:return expr(m[1])*expr(m[2])-expr(m[3])
    raise ValueError('Unparsed verbal algebra expression: '+text)

def derive(q,choices,expr,maths,ans_value,same):
    low=q.lower();ms=maths(q)
    if 'which expression means' in low or low.startswith('write "'):
        words=re.search(r'"([^"]+)"',q)[1];out=phrase(words,expr,maths)
        if 'evaluate' in low:
            value=expr(ms[-1].split('=')[-1]);assert len(out.free_symbols)==1;out=out.subs(next(iter(out.free_symbols)),value)
        return s.expand(out),'Independently translate quoted verbal expression to '+str(out)+', then apply the explicitly requested substitution.'
    if 'which phrase describes' in low:
        target=expr(ms[0]);values=[phrase(c,expr,maths) for c in choices]
        return ('choices',[i for i,v in enumerate(values) if same(target,v)]),'Translate every phrase independently: '+str(values)
    if 'which pair' in low or 'in which pair' in low or 'pairs consists' in low:
        if 'equivalent' in low:
            pairs=[[expr(m) for m in maths(c)] for c in choices];assert all(len(p)==2 for p in pairs)
            return ('choices',[i for i,(a,b) in enumerate(pairs) if same(a,b)]),'Subtract each candidate pair of polynomials and require identically zero.'
        if 'like terms' in low:
            pairs=[[expr(m).as_coeff_Mul()[1] for m in maths(c)] for c in choices]
            return ('choices',[i for i,p in enumerate(pairs) if len(p)==2 and p[0]==p[1]]),'Strip numerical coefficients and compare all variable exponents in each pair.'
    if 'like term of' in low:
        target=expr(ms[0]).as_coeff_Mul()[1]
        return ('choices',[i for i,c in enumerate(choices) if ans_value(c).as_coeff_Mul()[1]==target]),'A like term has exactly the same symbolic monomial after numerical coefficient is stripped.'
    if 'not be rewritten as a single term' in low:
        values=[s.expand(ans_value(c)) for c in choices]
        return ('choices',[i for i,v in enumerate(values) if len(s.Add.make_args(v))>1]),'Fully combine each polynomial; count remaining distinct monomials.'
    if ('equivalent to' in low or 'equal to' in low) and low.startswith('which'):
        return expr(ms[0]),'Independent symbolic identity target from supplied expression.'
    if choices and ('settles the question' in low or 'proves him wrong' in low):
        a,b=map(expr,ms[:2]);diff=s.simplify(a-b);x=next(iter(diff.free_symbols));valid=[];proof=[]
        for i,c in enumerate(choices):
            cm=maths(c);assign=[m for m in cm if '=' in m]
            if assign:
                value=expr(assign[0].split('=')[1]);v=s.simplify(diff.subs(x,value));truth=v!=0
                proof.append((value,v,truth))
            elif 'equivalent' in c.lower():truth=diff==0;proof.append(truth)
            elif 'differ for every' in c.lower() or 'unequal for every' in c.lower():truth=s.solveset(diff,x,domain=s.S.Reals)==s.EmptySet;proof.append(truth)
            else:raise ValueError('Unparsed statement in counterexample choice.')
            if truth:valid.append(i)
        return ('choices',valid),'Independent expression difference '+str(diff)+'; each proposed test or universal assertion evaluated: '+str(proof)
    if 'rectangle' in low and 'has width' in low and 'length' in low and 'perimeter' in low and len(ms)==2:
        a,b=map(expr,ms);return s.expand(2*(a+b)),'Rectangle perimeter = twice sum of width and length.'
    if 'triangle' in low and 'sides' in low and 'perimeter' in low and len(ms)==3:
        return s.expand(sum(map(expr,ms))),'Triangle perimeter is sum of its three stated sides.'
    if 'square' in low and 'sides of length' in low and 'perimeter' in low:
        return s.expand(4*expr(ms[0])),'Square perimeter = four times stated side.'
    if 'rice' in low and 'total mass' in low:return s.expand(sum(map(expr,ms))),'Add the masses of all three bags.'
    if 'each gift bag' in low:
        a,b,n=map(expr,ms);return s.expand(n*(a+b)),'n equal bags each contain a+b items.'
    if 'reads' in low and 'in a day' in low:return s.factor(sum(map(expr,ms))),'Total duration is morning plus evening durations.'
    if 'bean plant' in low:
        form=expr(ms[0]);x=next(iter(form.free_symbols));return form.subs(x,expr(ms[-1])),'Substitute requested number of days into stated height function.'
    if 'hiker starts' in low or 'mosaic' in low:
        assignment=ms[-1];x,value=map(expr,assignment.split('='));form=expr(ms[-2]);return form.subs(x,value),'Substitute explicit assignment into given model '+str(form)
    if r'\cdots' in q and ('simplify' in low or 'coefficient' in low):
        m=next(m for m in ms if r'\cdots' in m);before,after=m.split(r'\cdots');parts=[expr(t) for t in before.strip(' +').split('+')];last=expr(after.strip(' +'))
        symbol=next(iter(last.free_symbols));coefs=[s.simplify(t/symbol) for t in parts];end=s.simplify(last/symbol)
        d=coefs[1]-coefs[0];assert all(b-a==d for a,b in zip(coefs,coefs[1:]));n=(end-coefs[0])/d+1;assert n.is_integer
        coefficient=n*(coefs[0]+end)/2
        return coefficient if 'coefficient' in low else coefficient*symbol,'Independently sum arithmetic progression of coefficients; preserve common variable factor.'
    if any(word in low for word in ['triangle has area','rectangle has perimeter']) and 'using' in low:
        assignments={};equations=[]
        for m in ms:
            if '=' not in m:continue
            a,b=map(expr,m.split('='))
            if isinstance(a,s.Symbol) and not b.free_symbols:assignments[a]=b
            else:equations.append(a-b)
        target=expr(ms[-1]);equation=equations[0].subs(assignments);roots=s.solve(equation,target);assert len(roots)==1
        return roots[0],'Substitute all given measurements into stated formula, then solve '+str(equation)+'=0.'
    return None
