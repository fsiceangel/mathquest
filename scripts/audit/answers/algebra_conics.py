"""Analytic coordinate proof models, including the actual authored figure specification."""
import re
import sympy as s

def derive(q,choices,fig,expr,maths,same):
    x,y=s.symbols('x y',real=True);ms=maths(q);low=q.lower();eqs=[];pp=[]
    for m in ms:
        if m.count('=')==1:
            try:
                a,b=map(expr,m.split('='));p=s.expand(a-b)
                if p.free_symbols <= {x,y}:eqs.append(p)
            except Exception:pass
    for a,b in re.findall(r'\(([^(),]+),\s*([^(),]+)\)',q):
        try:
            point=(expr(a),expr(b))
            if not any(v.free_symbols for v in point):pp.append(point)
        except Exception:pass
    if fig:
        for el in fig.get('elems',[]):
            if el['t']=='parabola':eqs.append(y-s.Rational(str(el['a']))*x*x-s.Rational(str(el['b']))*x-s.Rational(str(el['c'])))
            if el['t']=='circle':
                h,k=map(lambda v:s.Rational(str(v)),el['c']);r=s.Rational(str(el['r']));eqs.append((x-h)**2+(y-k)**2-r*r)
    if 'circle' in low:
        circle=None
        for p in eqs:
            p=s.expand(p)
            if p.coeff(x,2)!=0 and p.coeff(y,2)==p.coeff(x,2) and p.coeff(x*y)==0:
                circle=s.expand(p/p.coeff(x,2));break
        if circle is None and ('equation' in low):
            if 'diameter' in low and len(pp)==2:
                h,k=((a+b)/2 for a,b in zip(*pp));r2=sum((a-b)**2 for a,b in zip(*pp))/4
            elif pp:
                h,k=pp[0]
                radius=re.search(r'radius\s*\$([^$]+)\$',q,re.I)
                if radius:r2=expr(radius[1])**2
                elif 'through the origin' in low:r2=h*h+k*k
                elif len(pp)==2:r2=sum((a-b)**2 for a,b in zip(*pp))
                elif 'tangent to the $y$-axis' in low:r2=h*h
                elif 'tangent to the $x$-axis' in low:r2=k*k
                else:return None
            elif 'origin' in low:
                h=k=s.Integer(0);radius=re.search(r'radius\s*\$([^$]+)\$',q,re.I)
                if not radius:return None
                r2=expr(radius[1])**2
            else:return None
            circle=(x-h)**2+(y-k)**2-r2
        if circle is not None:
            circle=s.expand(circle);h=-circle.coeff(x)/2;k=-circle.coeff(y)/2;r2=h*h+k*k-circle.subs({x:0,y:0});assert r2>0
            proof='Normalize circle as (x−h)²+(y−k)²=r²: center='+str((h,k))+', r²='+str(r2)+'. Source figure geometry used when supplied.'
            if 'equation' in low and any(t in low for t in ['what is the equation','which equation','write the equation','find the equation']):return ('equation',circle),proof
            if 'center and radius' in low:return ('center-radius',(h,k,s.sqrt(r2))),proof
            if 'center' in low and 'radius' not in low:return ('point',(h,k)),proof
            if 'radius' in low and 'center' not in low:return s.sqrt(r2),proof
            if 'inside' in low or 'relative to' in low:
                assert len(pp)==1
                delta=s.simplify(circle.subs({x:pp[0][0],y:pp[0][1]}));word='on' if delta==0 else 'inside' if delta<0 else 'outside'
                if choices:
                    matches=[i for i,c in enumerate(choices) if re.match(r'\s*'+word+r'\b',c,re.I)]
                    return ('choices',matches),proof+' Squared distance minus radius²='+str(delta)+' means '+word+'.'
                return ('word',word),proof+' Squared distance minus radius²='+str(delta)+' means '+word+'.'
            if ('cross' in low or 'intercept' in low) and '$x$-axis' in q:
                roots=s.solveset(circle.subs(y,0),x,domain=s.S.Reals);assert isinstance(roots,s.FiniteSet)
                if 'how far apart' in low:return max(roots)-min(roots),proof+' Horizontal separation is the absolute difference of the two real roots.'
                return ('points',[(r,s.Integer(0)) for r in roots]),proof+' Set y=0 and solve exact remaining quadratic.'
    if 'parabola' in low or 'graph' in low or 'vertex' in low or 'axis of symmetry' in low:
        forms=[]
        for p in eqs:
            sol=s.solve(p,y)
            if len(sol)==1 and sol[0].free_symbols<={x} and s.Poly(sol[0],x).degree()==2:forms.append(sol[0])
        if forms:
            form=forms[0];a,b,c=s.Poly(form,x).all_coeffs();h=-b/(2*a);k=s.simplify(form.subs(x,h));proof='Expanded parabola y='+str(form)+'; vertex h=−b/(2a)='+str(h)+', k='+str(k)+'.'
            if 'equation' in low and choices:return ('equation',y-form),proof
            if 'vertex' in low and 'minimum or a maximum' in low:return ('point-kind',((h,k),'minimum' if a>0 else 'maximum')),proof
            if ('vertex' in low or 'coordinates of its highest point' in low or 'coordinates of its lowest point' in low) and 'axis' not in low and 'give' not in low and 'find $b$' not in low:return ('point',(h,k)),proof
            if 'axis of symmetry' in low and 'vertex' not in low:return ('equation',x-h),proof
            if re.search(r'which way.*open|does.*open\?',low) and choices:
                word='up' if a>0 else 'down';valid=[i for i,c0 in enumerate(choices) if word in c0.lower()]
                return ('choices',valid),proof+' Sign of leading coefficient determines opening direction.'
            if '$y$-intercept' in q:return ('point',(s.Integer(0),c)),proof+' y-axis sets x=0.'
            if '$x$-intercept' in q or ('cross' in low and '$x$-axis' in q):
                roots=s.solveset(form,x,domain=s.S.Reals);assert isinstance(roots,s.FiniteSet) or roots==s.EmptySet
                if 'how many' in low:return s.Integer(len(roots)),proof+' Count distinct real roots: '+str(roots)
                if 'sum' in low:return sum(roots),proof+' Sum the distinct intercept abscissae.'
                return ('points',[(r,s.Integer(0)) for r in roots]),proof+' x-intercepts solve y=0 exactly.'
        if len(pp)==1 and 'axis of symmetry' in low and choices:
            axis=next((m for m in ms if re.fullmatch(r'x\s*=\s*[-\d]+',m)),None)
            if axis:
                h=expr(axis.split('=')[1]);return ('point',(2*h-pp[0][0],pp[0][1])),'Reflection across vertical symmetry axis fixes y and maps x to2h−x.'
        if len(pp)==2 and 'axis of symmetry' in low and pp[0][1]==pp[1][1]:return ('equation',x-(pp[0][0]+pp[1][0])/2),'Equal-height points are symmetric about the vertical line through the midpoint of their abscissae.'
    return None
