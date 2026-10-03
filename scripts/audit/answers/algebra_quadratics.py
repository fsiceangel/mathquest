"""Stem-only exact quadratic/identity models; no answer key or solution is read."""
import re
import sympy as s

def derive(q, choices, expr, maths, same, relation_set, solve_equation, chapter):
    low=q.lower();ms=maths(q);x=s.Symbol('x',real=True)
    def equation(m):
        a,b=m.split('=');return s.expand(expr(a)-expr(b))
    def select(test, proof):
        return ('choices',[i for i,c in enumerate(choices) if test(c)]),proof
    eqs=[m for m in ms if m.count('=')==1 and not re.search(r'\\(?:le|ge|ne)|[<>]',m)]
    if eqs:
        poly_eq=next((m for m in eqs if 'x^2' in m),None)
        if poly_eq:
            p=s.Poly(equation(poly_eq),x)
            if p.degree()==2:
                a,b,c=p.all_coeffs();params=(a.free_symbols|b.free_symbols|c.free_symbols)-{x}
                if len(params)==1:
                    parameter=next(iter(params));given=re.search(r'(?:sum|product|discriminant)[^$]*\$'+re.escape(poly_eq)+r'\$\s*is\s*\$([^$]+)\$',q,re.I)
                    if given:
                        value=expr(given[1]);form=-b/a if 'sum' in low else c/a if 'product' in low else b*b-4*a*c
                        sol=s.solve(form-value,parameter)
                        if len(sol)==1 and 'then find' not in low:return sol[0],'Use the supplied root sum/product/discriminant and solve the coefficient equation '+str(form)+'='+str(value)+'.'
                    delta=re.search(r'differ by\s*\$([^$]+)\$',q,re.I)
                    if delta:
                        d=expr(delta[1]);S=-b/a
                        if not S.free_symbols:
                            r1=(S-d)/2;r2=(S+d)/2
                            if 'larger root' in low:return r2,'Root sum='+str(S)+' and positive difference='+str(d)+' give roots '+str((r1,r2))+'.'
                            sol=s.solve(c/a-r1*r2,parameter)
                            if len(sol)==1:return sol[0],'Root sum and difference give roots '+str((r1,r2))+'; equate their product to c/a.'
                    known=[m for m in eqs if re.fullmatch(r'x\s*=\s*.+',m)]
                    if len(known)==1 and 'one solution' in low:
                        root=expr(known[0].split('=')[1]);sol=s.solve(p.as_expr().subs(x,root),parameter)
                        if len(sol)==1:return sol[0],'Substitute the independently stated root into the quadratic, then solve for its unknown coefficient.'
    if 'sum' in low and 'product' in low and 'two numbers' in low and len(ms)==2:
        S,P=map(expr,ms);roots=s.solveset(x*x-S*x+P,x,domain=s.S.Reals)
        if isinstance(roots,s.FiniteSet):return roots,'Two numbers are roots of t²−(sum)t+product=0.'
    if 'consecutive positive' in low and 'product' in low:
        nums=[expr(m) for m in ms if re.fullmatch(r'\d+',m)]
        if len(nums)==1:
            gap=2 if 'odd' in low or 'even' in low else 1;N=nums[0];roots=s.solveset(x*(x+gap)-N,x,domain=s.Interval.open(0,s.oo))
            assert isinstance(roots,s.FiniteSet) and len(roots)==1;r=next(iter(roots));assert r.is_integer
            if 'odd' in low:assert r%2==1
            if 'even' in low:assert r%2==0
            out=r+gap if 'larger' in low else r if 'smaller' in low else 2*r+gap if 'their sum' in low or 'what is their sum' in low else s.FiniteSet(r,r+gap)
            return out,'Model consecutive positive integers with stated parity as n,n+'+str(gap)+'; solve product='+str(N)+' and retain valid integer branch.'
    if 'positive integers' in low and eqs and chapter==11:
        y=s.Symbol('y',real=True);p=equation(eqs[0]);poly=s.Poly(p,x,y)
        if poly.coeff_monomial(x*y)==1 and poly.total_degree()==2:
            A=poly.coeff_monomial(x);B=poly.coeff_monomial(y);D=poly.coeff_monomial(1)
            assert s.expand(p-(x*y+A*x+B*y+D))==0
            N=A*B-D;assert N.is_Integer and N!=0
            pairs=[]
            for d in s.divisors(abs(int(N))):
                for u in [s.Integer(d),-s.Integer(d)]:
                    xx=u-B;yy=N/u-A
                    if xx>0 and yy>0:pairs.append((xx,yy))
            proof='Complete to (x+'+str(B)+')(y+'+str(A)+')='+str(N)+'; enumerate every signed divisor pair and keep positive x,y: '+str(sorted(pairs))+'.'
            if 'how many' in low:return s.Integer(len(pairs)),proof
            if 'sum of all the possible values of $x$' in low:return sum(set(a for a,b in pairs)),proof
            if 'find all pairs' in low:return ('points',pairs),proof
            if 'which positive integers' in low and len(pairs)==1:return ('assignments',{'x':pairs[0][0],'y':pairs[0][1]}),proof
            target=ms[-1]
            if target in ['x','y','xy','x + y']:
                t=expr(target);vals=[s.simplify(t.subs({x:a,y:b})) for a,b in pairs]
                if 'largest' in low:return max(vals),proof
                if vals and len(set(vals))==1:return vals[0],proof
    if chapter==11 and len(ms)>=1 and any(t in low for t in ['constant should be added','what number do you add','one constant must be added']):
        y=s.Symbol('y',real=True);target=next((m for m in ms if 'xy' in m),None)
        if target:
            p=expr(target.split('=')[0]);P=s.Poly(p,x,y);assert P.coeff_monomial(x*y)==1
            A=P.coeff_monomial(x);B=P.coeff_monomial(y)
            return A*B,'Complete xy+Ax+By to (x+B)(y+A) by adding AB='+str(A*B)+'.'
    if choices and 'quadratic equation' in low and 'which of' in low:
        var=expr(ms[0]) if len(ms)==1 and len(ms[0])==1 else x
        def quadratic(c):
            try:return s.Poly(equation(maths(c)[0]),var).degree()==2
            except s.PolynomialError:return False
        return select(quadratic,'Expand both sides; a quadratic has nonzero square coefficient and no higher powers.')
    if choices and ('perfect square' in low) and ('which' in low) and not ms:
        def is_square(c):
            p=expr(maths(c)[0]);coef,factors=s.factor_list(p)
            result=coef>=0 and all(n%2==0 for f,n in factors)
            return not result if re.search(r'which[^?]*\bnot\b',low) else result
        return select(is_square,'Factor each candidate over Q; a square polynomial has nonnegative constant multiplier and all irreducible multiplicities even.')
    if choices and 'perfect cube' in low and 'which' in low:
        def cube(c):
            v=expr(maths(c)[0]);n=s.integer_nthroot(abs(int(v)),3)
            result=v.is_integer and n[1]
            return not result if 'not' in low else result
        return select(cube,'Exact integer cube-root check on every supplied candidate.')
    if choices and 'difference of squares of two monomials' in low:
        def diff(c):
            terms=s.Add.make_args(s.expand(expr(maths(c)[0])))
            if len(terms)!=2:return False
            signs=[]
            for t in terms:
                co,mon=t.as_coeff_Mul();signs.append(s.sign(co))
                if not co.is_Integer or not s.integer_nthroot(abs(int(co)),2)[1]:return False
                if any(not e.is_Integer or e%2 for base,e in mon.as_powers_dict().items() if base!=1):return False
            return set(signs)=={-1,1}
        return select(lambda c: not diff(c) if 'not' in low else diff(c),'Both terms must have opposite signs, integer-square coefficient magnitude, and even powers of every variable; honor NOT if requested.')
    if 'middle term' in low and len(ms)==1:
        p=s.Poly(s.expand(expr(ms[0])),x);assert p.degree()==2
        return p.nth(1)*x,'Expand the square and extract its degree-one term.'
    if re.match(r'compute',low) and 'by writing' in low:
        return expr(ms[0]),'Evaluate the original numerical expression exactly; the supplied decomposition is not used as an answer.'
    if re.match(r'factor',low) and 'completely' not in low and (len(ms)==1 or 'hint:' in low):
        p=expr(ms[0]);return s.factor(p),'Exact polynomial identity; independently factored as '+str(s.factor(p))
    if choices and ('complete factorization' in low or ('factor' in low and 'completely' in low)):
        from algebra import complete_factor_form
        p=expr(ms[0])
        def complete(c):
            if not same(expr(maths(c)[0]),p):return False
            try:complete_factor_form(c);return True
            except Exception:return False
        return select(complete,'Expand every option to test the identity, then require each displayed factor primitive and irreducible over Q.')
    if 'conjugate of' in low and len(ms)==1:
        a=expr(ms[0],chapter==12)
        if chapter==12:return s.conjugate(a),'Conjugation fixes the real part and reverses the imaginary part.'
        depth=0;split=None
        for i,ch in enumerate(ms[0]):
            if ch in '{([':depth+=1
            elif ch in '})]':depth-=1
            elif ch in '+-' and i>0 and depth==0:split=i
        assert split is not None
        left=expr(ms[0][:split]);right=expr(ms[0][split:])
        return left-right,'Binomial conjugate in the textbook convention reverses the sign between the two displayed terms.'
    if 'real part' in low and len(ms)==1:return s.re(expr(ms[0],True)),'Expand a+bi; extract the real coefficient.'
    if 'imaginary part' in low and len(ms)==1:return s.im(expr(ms[0],True)),'Expand a+bi; extract the coefficient of i.'
    if low.startswith('write') and 'in the form' in low and chapter==12:
        return s.expand_complex(expr(ms[0],True)),'Exact complex division/multiplication using i²=-1.'
    if any(t in low for t in ['fill in the blank','fills the blank']) and len(ms)==1 and '\\square' in ms[0]:
        k=s.Symbol('K',real=True);p=equation(ms[0].replace('\\square','K'));sol=s.solve(s.Poly(p,x).all_coeffs(),k)
        return sol[k],'Equate all coefficients of both polynomials after replacing the blank by K.'
    if ('must be added' in low or 'what value of' in low) and 'perfect square' in low:
        target=next((m for m in ms if 'x^2' in m),None)
        if target:
            p=s.Poly(expr(target),x);a,b,c=p.all_coeffs();k=(b*b/(4*a)-c)
            if c.free_symbols:
                v=next(iter(c.free_symbols));out=s.solve(k,v);assert len(out)==1;k=out[0]
            if 'write the resulting' not in low:return k,'A quadratic is a repeated square exactly when its discriminant b²−4ac is zero.'
    if low.startswith('rewrite') and 'state' not in low:
        p=expr(ms[0]);assert s.Poly(p,x).degree()==2
        return p,'Completion of the square preserves the exact polynomial: '+str(s.Poly(p,x).LC())+'(x-h)²+k with h=-b/(2a).'
    if choices and 'which of these equals' in low:
        return expr(ms[0]),'Test exact polynomial identity against every proposed expression.'
    if 'discriminant' in low and eqs and not ('how many' in low):
        p=s.Poly(equation(eqs[0]),x);assert p.degree()==2;a,b,c=p.all_coeffs()
        if (a.free_symbols|b.free_symbols|c.free_symbols):return None
        return b*b-4*a*c,'Discriminant b²−4ac from independently expanded coefficients '+str((a,b,c))
    if 'in the equation' in low and re.search(r'what is \$[abc]\$',low) and eqs:
        p=s.Poly(equation(eqs[0]),x);a,b,c=p.all_coeffs()
        return {'a':a,'b':b,'c':c}[ms[-1]],'Read coefficients after moving every term to the left and expanding.'
    if 'exactly one solution' in low and eqs:
        p=s.Poly(equation(next(m for m in eqs if 'x^2' in m)),x);a,b,c=p.all_coeffs();pars=(a.free_symbols|b.free_symbols|c.free_symbols)-{x}
        if len(pars)==1 and not any(t in low for t in ['find that solution','give the solution','what is that solution']):
            k=next(iter(pars));roots=s.solveset(b*b-4*a*c,k,domain=s.S.Reals)
            # Do not silently discard possible linear degeneration.
            zero=s.solveset(a,k,domain=s.S.Reals)
            if zero!=s.EmptySet and not ('ne 0' in q or 'neq 0' in q):raise ValueError('Quadratic degeneration requires separate proof.')
            if 'positive' in low:roots=s.Intersection(roots,s.Interval.open(0,s.oo))
            if 'negative' in low:roots=s.Intersection(roots,s.Interval.open(-s.oo,0))
            return roots,'Exactly one quadratic root iff discriminant is zero; explicit leading-coefficient restriction retained.'
    if eqs and ('roots of' in low or 'solutions of' in low) and any(w in low for w in ['sum','product','what is','find']):
        eq=next((m for m in eqs if 'x^2' in m or 'x^4' in m),None)
        if eq:
            p=s.Poly(equation(eq),x)
            if 'sum of all real solutions' in low:
                roots=s.solveset(p.as_expr(),x,domain=s.S.Reals);assert isinstance(roots,s.FiniteSet)
                return sum(roots),'Solve all real roots and sum each distinct root exactly once: '+str(roots)
            if p.degree()==2:
                a,b,c=p.all_coeffs();S=-b/a;P=c/a
                if (a.free_symbols|b.free_symbols|c.free_symbols):return None
                if ('sum of' in low or 'sum and' in low) and 'product' not in low:return S,'Vieta: sum=-b/a from coefficients '+str((a,b,c))
                if 'product of' in low and 'sum' not in low:return P,'Vieta: product=c/a from coefficients '+str((a,b,c))
                target=ms[-1]
                if target!=eq and '=' not in target:
                    t=expr(target);r,z=s.symbols('r s',real=True)
                    roots=s.solve(p.as_expr(),x);assert len(roots)==2
                    vals=[s.simplify(t.subs({r:roots[0],z:roots[1]})),s.simplify(t.subs({r:roots[1],z:roots[0]}))]
                    if same(*vals) and not vals[0].free_symbols:return vals[0],'Independent roots '+str(roots)+'; requested symmetric expression has the same value under both root orderings.'
    if choices and 'quadratic equation has roots' in low:
        roots=[expr(m) for m in ms];assert len(roots)==2
        p=s.expand((x-roots[0])*(x-roots[1]))
        def eqmatch(c):
            v=equation(maths(c)[0]);return s.Poly(v,x).degree()==2 and not s.cancel(v/p).free_symbols
        return select(eqmatch,'Construct (x-r)(x-s); each candidate must be a nonzero constant multiple of this quadratic.')
    if 'one root' in low and 'twice the other' in low and eqs:
        p=s.Poly(equation(eqs[0]),x);a,b,c=p.all_coeffs();root=-b/(3*a);pars=c.free_symbols
        if len(pars)==1:return s.solve(c/a-2*root**2,next(iter(pars)))[0],'Write roots t,2t; their sum is 3t=-b/a and product 2t²=c/a.'
    if low.startswith(('what are all','find all','use the quadratic formula','the equation')) and eqs and ('solutions' in low or 'solve' in low or 'satisfying' in low):
        if len(eqs)==1:return solve_equation(eqs[0],chapter in [12,13] and 'real' not in low)
    # Continuous quadratic extrema: positive/negative semidefinite Hessian certifies globality.
    if any(t in low for t in ['minimum value','maximum value','smallest possible value','largest possible value','greatest height','smallest value']) and ms and not any(t in low for t in ['whole','integer','for which','fence','numbers add','numbers differ']):
        candidates=[]
        for m in ms:
            try:
                v=expr(m.split('=',1)[-1]);vars=sorted(v.free_symbols,key=str)
                if vars and s.Poly(v,*vars).total_degree()==2:candidates.append(v)
            except Exception:pass
        if len(candidates)==1 and not re.search(r'and (?:the )?value|where it occurs',low):
            v=candidates[0]
            constraints=[equation(m) for m in eqs if s.Poly(equation(m),*sorted(equation(m).free_symbols,key=str)).total_degree()==1 and not m.startswith(('y =','h ='))]
            for constraint in constraints:
                var=next(iter(constraint.free_symbols));sub=s.solve(constraint,var);assert len(sub)==1;v=s.simplify(v.subs(var,sub[0]))
            vars=sorted(v.free_symbols,key=str);H=s.hessian(v,vars)
            maximize=any(t in low for t in ['maximum','largest','greatest'])
            assert H.is_negative_semidefinite if maximize else H.is_positive_semidefinite
            sols=s.solve([s.diff(v,t) for t in vars],vars,dict=True);assert sols
            vals=[s.simplify(v.subs(sol)) for sol in sols];assert all(not a.free_symbols and same(a,vals[0]) for a in vals)
            return vals[0],'Stationary equations '+str(sols)+'; Hessian '+str(H)+' certifies global '+('maximum' if maximize else 'minimum')+'.'
    if 'at what value' in low and 'minimum' in low:
        targets=[m.split('=',1)[-1] for m in ms if '^2' in m];assert len(targets)==1
        p=s.Poly(expr(targets[0]),x);a,b,c=p.all_coeffs();assert a>0
        return -b/(2*a),'Positive-leading quadratic has unique vertex input -b/(2a).'
    return None
