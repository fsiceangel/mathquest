"""Exact linear systems and coordinate models, preserving coordinate order."""
import re
import sympy as s

def derive(q,choices,expr,maths,same,chapter,fig=None):
    low=q.lower();ms=maths(q);x,y=s.symbols('x y',real=True)
    def eq(m):
        a,b=m.split('=');return s.expand(expr(a)-expr(b))
    def points(text):
        out=[]
        for a,b in re.findall(r'\(([^(),]+),\s*([^(),]+)\)',text):
            try:out.append((expr(a),expr(b)))
            except Exception:pass
        return out
    pp=points(q)
    equations=[]
    for m in ms:
        if m.count('=')==1:
            try:equations.append(eq(m))
            except Exception:pass
    if fig and not equations:
        for el in fig.get('elems',[]):
            if el['t']=='line':
                (a,b),(c,d)=[tuple(s.Rational(str(n)) for n in p) for p in [el['a'],el['b']]]
                equations.append((d-b)*(x-a)-(c-a)*(y-b))
        if 'coordinates of point' in low:
            label=re.search(r'point\s*\$([A-Za-z])\$',q,re.I)
            pts=[el for el in fig.get('elems',[]) if el['t']=='point' and (not label or el.get('label','').startswith(label[1]))]
            if len(pts)==1:return ('point',tuple(s.Rational(str(n)) for n in pts[0]['p'])),'Read the requested labeled point coordinates from the actual figure geometry.'
        if len(equations)==1 and 'equation' in low:return ('equation',equations[0]),'Line through the two authored figure anchors; exact determinant equation.'
    def slope(p):
        assert s.Poly(p,x,y).total_degree()==1
        a,b=p.coeff(x),p.coeff(y)
        return -a/b if b!=0 else s.zoo
    def point_on(p,pt):return s.simplify(p.subs({x:pt[0],y:pt[1]}))==0
    if choices and pp and 'which equation' in low and 'pair' in low and len(pp)==1:
        valid=[i for i,c in enumerate(choices) if point_on(eq(maths(c)[0]),pp[0])]
        return ('choices',valid),'Substitute the supplied ordered pair into every candidate equation.'
    if choices and equations and any(t in low for t in ['which ordered pair','which pair','which of these pairs','which point','which of the following points']) and 'axis' not in low:
        valid=[]
        for i,c in enumerate(choices):
            pts=points(c);assert len(pts)==1
            satisfies=all(point_on(p,pts[0]) for p in equations)
            if (not satisfies if 'not lie' in low else satisfies):valid.append(i)
        return ('choices',valid),'Substitute both coordinates of every option into all given equations.'
    if len(equations)>=2 and (low.startswith('solve') or ('how many' in low and ('solution' in low or 'pairs' in low)) or 'intersect' in low):
        vars=sorted(set().union(*(p.free_symbols for p in equations)),key=str)
        if any(s.Poly(p,*vars).total_degree()!=1 for p in equations):return None
        sol=s.linsolve(equations,vars)
        if 'how many' in low:
            count=0 if sol==s.EmptySet else s.S.Reals if any(v.free_symbols for row in sol for v in row) else 1
            return s.Integer(count) if isinstance(count,int) else count,'Exact simultaneous linear solution set '+str(sol)+'; free parameters imply infinitely many pairs.'
        if sol==s.EmptySet:return s.EmptySet,'Exact linear system is inconsistent.'
        values=next(iter(sol))
        if any(v.free_symbols for v in values):return None
        if ms[-1] not in [m for m in ms if '=' in m] and 'intersect' not in low:return None
        if 'intersect' in low:return ('point',tuple(values)),'Solve both line equations exactly: '+str(dict(zip(vars,values)))
        return ('assignments',dict(zip(map(str,vars),values))),'Unique exact simultaneous solution: '+str(dict(zip(vars,values)))
    if len(equations)==1 and pp and any(t in low for t in ['is a solution','is on the line','lies on the line','lie on the line']):
        p=equations[0].subs({x:pp[0][0],y:pp[0][1]},simultaneous=True);vars=p.free_symbols
        if len(vars)==1:
            v=next(iter(vars));sol=s.solve(p,v);assert len(sol)==1
            return sol[0],'Substitute the stated ordered pair, then solve the remaining linear parameter equation '+str(p)+'=0.'
    if chapter!=8:return None
    if 'distance between' in low and len(pp)==2:
        out=s.sqrt(sum((a-b)**2 for a,b in zip(*pp)))
        return out,'Euclidean distance from coordinate differences: '+str(pp)
    if 'midpoint' in low and len(pp)==2:
        if 'other endpoint' in low or 'one endpoint' in low or 'one of its endpoints' in low:
            return ('point',tuple(2*a-b for a,b in zip(*pp))),'Endpoint = twice the supplied midpoint minus the known endpoint, coordinate by coordinate.'
        return ('point',tuple((a+b)/2 for a,b in zip(*pp))),'Average each coordinate separately; preserve x,y order.'
    if 'slope' in low and 'what is' in low and len(pp)==2:
        (a,b),(c,d)=pp;v=(d-b)/(c-a) if c!=a else s.zoo
        if v.free_symbols:
            given=re.search(r'slope\s*\$([^$]+)\$',q,re.I)
            if given and len(v.free_symbols)==1:
                m=expr(given[1]);m=-1/m if 'perpendicular' in low else m
                sol=s.solve(v-m,next(iter(v.free_symbols)));assert len(sol)==1
                return sol[0],'Set coordinate slope equal to the stated slope (negative reciprocal if perpendicular), then solve the unknown coordinate.'
            return None
        if 'perpendicular' in low:v=-1/v if v!=0 else s.zoo
        return v,'Slope=(y₂−y₁)/(x₂−x₁); perpendicular slopes have product−1 (vertical/horizontal handled separately).'
    if 'slope' in low and 'horizontal line' in low:return s.Integer(0),'Horizontal line has zero vertical change for nonzero horizontal change.'
    if 'slope' in low and 'vertical line' in low:return s.zoo,'Vertical line has zero horizontal change and hence undefined finite slope.'
    if 'slope' in low and equations and re.match(r'(?:what is|find)',low):
        v=slope(equations[0])
        if 'perpendicular' in low:v=-1/v if v!=0 else s.zoo
        if 'intercept' not in low:return v,'Extract slope from the expanded linear equation '+str(equations[0])+'=0.'
    if 'slope of a line perpendicular' in low and len(ms)==1:
        v=expr(ms[0]);return -1/v if v!=0 else s.zoo,'Perpendicular slope is the negative reciprocal.'
    if len(equations)==1 and (('intercept' in low) or 'cross the' in low or 'axis at which point' in low) and not any(t in low for t in ['what value','what is $m$','what is $b$','slope and','and $y$','parallel','perpendicular']):
        p=equations[0]
        if '$x$' in q:
            roots=s.solve(p.subs(y,0),x)
            if len(roots)==1:return ('point',(roots[0],s.Integer(0))),'At x-axis, y=0; solve the remaining linear equation.'
        if '$y$' in q:
            roots=s.solve(p.subs(x,0),y)
            if len(roots)==1:return ('point',(s.Integer(0),roots[0])),'At y-axis, x=0; solve the remaining linear equation.'
    if 'equation' in low and ('line' in low) and pp:
        if 'horizontal' in low:return ('equation',y-pp[0][1]),'Horizontal line fixes y to the supplied point ordinate.'
        if 'vertical' in low:return ('equation',x-pp[0][0]),'Vertical line fixes x to the supplied point abscissa.'
        if len(pp)==2:
            (a,b),(c,d)=pp
            return ('equation',(d-b)*(x-a)-(c-a)*(y-b)),'Determinant equation for the unique line through both distinct points.'
        match=re.search(r'slope\s*\$([^$]+)\$',q,re.I)
        if match:
            m=expr(match[1]);a,b=pp[0]
            return ('equation',y-b-m*(x-a)),'Point-slope equation y−y₀=m(x−x₀) from the stated slope and point.'
        if equations and any(t in low for t in ['parallel','perpendicular']):
            m=slope(equations[0]);m=-1/m if 'perpendicular' in low else m;a,b=pp[0]
            return ('equation',y-b-m*(x-a)),'Use equal slopes for parallel lines or negative reciprocal for perpendicular lines, then point-slope form.'
    if ('slope-intercept form' in low or 'same line' in low) and equations:
        return ('equation',equations[0]),'Candidate equation must have exactly the same zero set (a nonzero constant multiple of the original linear polynomial).'
    if 'parallel to' in low and equations and choices:
        m=slope(equations[0]);valid=[i for i,c in enumerate(choices) if same(slope(eq(maths(c)[0])),m)!=('not parallel' in low)]
        return ('choices',valid),'Parallel nonvertical lines have equal slopes, checked for every candidate.'
    return None
