"""Additional stem-only models, with deliberately narrow wording guards."""
import re, math, itertools
import sympy as s

def model(q,choices,maths,number,expr):
    low=q.lower();ms=maths(q)
    def nums():return [number(t.replace('^\\circ','').replace('^{\\circ}','')) for t in ms]
    def out(v,why):return v,why
    if len(ms)==1 and re.fullmatch(r'(?:simplify \$.*?\$ completely\.|compute \$.*?\$, fully simplified\.)',low):
        return out(number(ms[0]),'exact symbolic radical arithmetic and square-factor reduction')
    if len(ms)==1 and re.fullmatch(r'rationalize the denominator: \$.*?\$\.?',low):
        return out(number(ms[0].replace('= ?','').strip()),'multiply numerator and denominator by radical conjugate; compare exact value')
    if len(ms)==1 and (re.fullmatch(r'\$.*?\$ is between which two consecutive integers\?',low) or re.fullmatch(r'between which two consecutive integers is \$.*?\$\?',low)):
        v=number(ms[0]);a=s.floor(v);assert a<v<a+1
        return out(s.FiniteSet(a,a+1),'bound irrational radical between adjacent integer squares, using exact floor')
    if len(ms)==1 and re.fullmatch(r'a square (?:tile|courtyard|window pane|flower bed|trampoline|sandpit) has an area of \$.*?\$ square (?:centimeters|meters|inches|feet)\. (?:what is|find) its side length, fully simplified[.?]',low):
        return out(s.sqrt(number(ms[0])),'positive side length is positive square root of square area')
    if len(ms)==1 and re.fullmatch(r'a square (?:patio|tile) has an area of \$.*?\$ square (?:meters|centimeters)\. what is its perimeter\?',low):
        return out(4*s.sqrt(number(ms[0])),'square perimeter is four times positive square root of area')
    if len(ms)==1 and re.fullmatch(r'a square window has a perimeter of \$.*?\$ inches\. what is its area\?',low):
        return out((number(ms[0])/4)**2,'recover square side from perimeter, then square it')
    if len(ms)==1 and re.fullmatch(r'(?:write|convert) \$.*?\$ (?:as|to) (?:a |an |an improper |a mixed )?(?:percent|decimal|fraction|mixed number)(?: in simplest form)?[.]?',low):
        return out(number(ms[0]),'exact rational conversion, with percent interpreted as /100')
    if re.fullmatch(r'\$.*?\$ is what percent of \$.*?\$\?',q) and len(ms)==2:
        a,b=nums();return out(a/b,'part divided by reference whole')
    if re.fullmatch(r'\$.*?\$ of a number is \$.*?\$\. what is the number\?',low) and len(ms)==2:
        a,b=nums();return out(b/a,'invert multiplication by the stated fraction')
    if re.fullmatch(r'\$.*?\$ is \$.*?\$ of what number\?',low) and len(ms)==2:
        a,b=nums();return out(a/b,'invert multiplication by the stated percent')
    if re.fullmatch(r'(?:increase|decrease) \$.*?\$ by \$.*?\$\.',low) and len(ms)==2:
        a,b=nums();return out(a*(1+b if low.startswith('increase') else 1-b),'multiply by 1 plus/minus the relative change')
    if len(ms)==2 and re.fullmatch(r'after a \$.*?\$ (?:discount|increase), (?:a backpack costs|a number is) \$.*?\$\. what was (?:the original price|the number before the increase)\?',low):
        a,b=nums();return out(b/(1-a if 'discount' in low else 1+a),'reverse the multiplicative price change')
    if len(ms)==2 and re.fullmatch(r'a \$.*?\$ (?:shirt|jacket|book|coat|game|toy|bike) is (?:on sale for|marked) \$.*?\$ off\. what (?:is the sale price|do you pay)\?',low):
        a,b=nums();return out(a*(1-b),'sale price = original × (1 − discount)')
    if len(ms)==2 and re.fullmatch(r'with \$.*?\$ sales tax included, a (?:toy|puzzle|game|book) costs \$.*?\$\. what was (?:the|its) price before tax\?',low):
        a,b=nums();return out(b/(1+a),'reverse tax multiplier')
    if len(ms)==2 and re.fullmatch(r'a salesperson earns a \$.*?\$ commission on everything she sells\. how much does she earn for selling a \$.*?\$ sofa\?',low):
        a,b=nums();return out(a*b,'commission = rate × sales amount')
    if len(ms)==2 and re.fullmatch(r'a meal costs \$.*?\$, and you want to leave a \$.*?\$ tip\. how much is the tip\?',low):
        a,b=nums();return out(a*b,'tip = rate × meal cost')
    if len(ms)==2 and re.fullmatch(r'the sales tax rate is \$.*?\$\. how much tax is charged on a \$.*?\$ book\?',low):
        a,b=nums();return out(a*b,'tax = rate × pretax price')
    if len(ms)==2 and re.search(r'what is the percent (?:increase|decrease)\?',low) and 'from ' in low and ' to ' in low:
        a,b=nums();return out(abs(b-a)/a,'absolute change divided by starting amount')
    if len(ms)==1 and 'what single number can you multiply by to increase a value by' in low:return out(1+number(ms[0]),'increase multiplier')
    if len(ms)==1 and 'what percent decrease brings it back to the original price' in low:
        p=number(ms[0]);return out(p/(1+p),'relative return decrease uses increased price as denominator')

    if 'number line' in low and 'distance between' in low and len(ms)==2:
        a,b=nums();return out(abs(b-a),'distance on real line = absolute coordinate difference')
    if re.fullmatch(r'(?:what is|find) the midpoint of the segment from \$.*?\$ to \$.*?\$(?: on the number line)?[.?]',low) and len(ms)==2:
        a,b=nums();return out((a+b)/2,'midpoint is arithmetic mean of endpoints')
    if len(ms)==2 and re.fullmatch(r'a rectangle has length \$.*?\$ and width \$.*?\$\. (?:what is|find) its (?:area|perimeter)[.?]',low):
        a,b=nums();return out(a*b if 'area' in low else 2*(a+b),'rectangle area/perimeter from explicit length and width')
    if len(ms)==2 and re.fullmatch(r'a rectangle has perimeter \$.*?\$ and length \$.*?\$\. what is its (?:area|width)\?',low):
        p,a=nums();b=p/2-a;assert b>0
        return out(a*b if 'area' in low else b,'width = perimeter/2 − length; then area = length × width')
    if len(ms)==1 and re.fullmatch(r'what is the (?:area|perimeter) of a square with side length \$.*?\$\?',low):
        a=nums()[0];return out(a*a if 'area' in low else 4*a,'square area/perimeter')
    if len(ms)==1 and re.fullmatch(r'a (?:square|rhombus) has sides of length \$.*?\$\. what is its perimeter\?',low):return out(4*nums()[0],'four equal sides')
    if len(ms)==2 and re.fullmatch(r'(?:a (?:right triangle has legs of length|triangle has base|parallelogram has base) \$.*?\$ and (?:height )?\$.*?\$\. what is its area\?|find the area of a triangle with base \$.*?\$ and height \$.*?\$\.)',low):
        a,b=nums();return out(a*b if 'parallelogram' in low else a*b/2,'base × perpendicular height, halved for a triangle')
    if len(ms)==3 and re.fullmatch(r'a trapezoid has parallel sides \$.*?\$ and \$.*?\$, with height \$.*?\$\. what is its area\?',low):
        a,b,h=nums();return out((a+b)*h/2,'trapezoid area = mean parallel-side length × height')
    if len(ms)==2 and re.fullmatch(r'a triangle has area \$.*?\$ and base \$.*?\$\. what is its height\?',low):
        a,b=nums();return out(2*a/b,'solve area = base × height / 2')
    if len(ms)==3 and re.fullmatch(r'a trapezoid has area \$.*?\$ and parallel sides of length \$.*?\$ and \$.*?\$\. find its height\.',low):
        a,b,c=nums();return out(2*a/(b+c),'invert trapezoid area formula')
    if len(ms)==1 and re.fullmatch(r'a square(?: rug| poster| garden)? has an area of \$.*?\$(?: square (?:feet|inches|meters))?\. (?:what is|find) its (?:perimeter|side length)(?:, fully simplified)?[.?]',low):
        a=nums()[0];return out(s.sqrt(a)*(4 if 'perimeter' in low else 1),'positive square-root side length; perimeter is four sides')
    if len(ms)==1 and re.fullmatch(r'a square has area \$.*?\$\. what is its perimeter\?',low):return out(4*s.sqrt(nums()[0]),'positive side length from square area')
    circle_patterns=[
      (r'a circle has radius \$.*?\$\. what is its diameter\?',lambda a:2*a,'diameter = 2r'),
      (r'(?:what is|find) the exact circumference of a circle with radius \$.*?\$[.?]',lambda a:2*s.pi*a,'circumference = 2πr'),
      (r'(?:what is|find) the exact area of a circle with radius \$.*?\$[.?]',lambda a:s.pi*a*a,'area = πr²'),
      (r'a circle has diameter \$.*?\$\. what is its exact circumference\?',lambda a:s.pi*a,'circumference = πd'),
      (r'a circle has diameter \$.*?\$\. what is its exact area\?',lambda a:s.pi*a*a/4,'area = π(d/2)²'),
      (r'find the exact area of a circle with diameter \$.*?\$\.',lambda a:s.pi*a*a/4,'area = π(d/2)²'),
      (r'a circle has circumference \$.*?\$\. what is its radius\?',lambda a:a/(2*s.pi),'radius = circumference / 2π'),
      (r'a circle has circumference \$.*?\$\. what is its exact area\?',lambda a:a*a/(4*s.pi),'substitute r=C/(2π) into area'),
      (r'a circle has area \$.*?\$\. what is its exact circumference\?',lambda a:2*s.pi*s.sqrt(a/s.pi),'positive radius from area then circumference'),
      (r'(?:what is|find) the exact area of a semicircle with radius \$.*?\$[.?]',lambda a:s.pi*a*a/2,'semicircle area = half the disk'),
      (r'(?:what is|find) the exact perimeter of a semicircle with radius \$.*?\$[.?]',lambda a:s.pi*a+2*a,'semicircle boundary includes arc and diameter'),
    ]
    if len(ms)==1:
        for pattern,f,why in circle_patterns:
            if re.fullmatch(pattern,low):return out(f(nums()[0]),why)
    if len(ms)==2 and re.fullmatch(r'a right triangle has legs of length \$.*?\$ and \$.*?\$\. (?:how long is|find) the hypotenuse[.?]',low):
        a,b=nums();return out(s.sqrt(a*a+b*b),'Pythagorean theorem, positive hypotenuse')
    if len(ms)==2 and re.fullmatch(r'a right triangle has a hypotenuse of length \$.*?\$ and one leg of length \$.*?\$\. (?:how long is|find) the other leg[.?]',low):
        a,b=nums();assert a>b>0;return out(s.sqrt(a*a-b*b),'Pythagorean theorem, positive missing leg')
    if len(ms)==1 and re.fullmatch(r'a square has sides of length \$.*?\$\. how long is its diagonal\?',low):return out(nums()[0]*s.sqrt(2),'square diagonal = side × √2')
    if len(ms)==1 and re.fullmatch(r'an equilateral triangle has sides of length \$.*?\$\. what is its height\?',low):return out(nums()[0]*s.sqrt(3)/2,'bisect equilateral triangle into 30–60–90 triangles')
    if len(ms)==1 and re.fullmatch(r'an equilateral triangle has a perimeter of \$.*?\$\. what is its height\?',low):return out(nums()[0]*s.sqrt(3)/6,'side = perimeter/3, height = side × √3/2')
    if len(ms)==1 and re.fullmatch(r'a square has a perimeter of \$.*?\$\. how long is its diagonal\?',low):return out(nums()[0]*s.sqrt(2)/4,'side = perimeter/4, diagonal = side × √2')
    if len(ms)==1 and re.fullmatch(r'a square has a diagonal of length \$.*?\$\. what is its perimeter\?',low):return out(nums()[0]*4/s.sqrt(2),'side = diagonal/√2; four sides')
    if len(ms)==2 and re.fullmatch(r'the diagonals of a rhombus have lengths \$.*?\$ and \$.*?\$\. how long is each side of the rhombus\?',low):
        a,b=nums();return out(s.sqrt(a*a+b*b)/2,'perpendicular bisecting diagonals give a right triangle with half-diagonal legs')
    if 'which' in low and ('side lengths of a right triangle' in low or 'is not a right triangle' in low):
        invert='not ' in low
        def right(t):
            vals=[number(x) for x in maths(t)];assert len(vals)==3
            a,b,c=sorted(vals);return bool(a>0 and a*a+b*b==c*c) != invert
        return out(right,'test positive sides and Pythagorean equality for all choices; respect NOT')

    if len(ms)==1 and re.fullmatch(r'what is the complement of a \$.*?\$ angle\?',low):return out(90-nums()[0],'complement totals 90 degrees')
    if len(ms)==1 and re.fullmatch(r'what is the supplement of a \$.*?\$ angle\?',low):return out(180-nums()[0],'supplement totals 180 degrees')
    if len(ms)==1 and re.fullmatch(r'what is the supplement of the complement of a \$.*?\$ angle\?',low):return out(90+nums()[0],'180 − (90 − angle)')
    if len(ms)==1 and re.fullmatch(r'a right triangle has one acute angle measuring \$.*?\$\. what is the other acute angle\?',low):return out(90-nums()[0],'acute angles of right triangle total 90 degrees')
    if len(ms)==1 and re.fullmatch(r'an isosceles triangle has a vertex angle of \$.*?\$, and its two base angles are equal\. what is each base angle\?',low):return out((180-nums()[0])/2,'remaining angle sum split equally')
    if len(ms)==1 and re.fullmatch(r'an isosceles triangle has base angles of \$.*?\$ each\. what is the third angle\?',low):return out(180-2*nums()[0],'subtract the equal base angles from 180')
    if len(ms)==1 and re.fullmatch(r'each interior angle of a regular polygon measures \$.*?\$\. how many sides does (?:the polygon|it) have\?',low):return out(360/(180-nums()[0]),'exterior turn = 180 − interior; n turns sum to 360')
    if len(ms)==1 and re.fullmatch(r'each exterior angle of a regular polygon measures \$.*?\$\. how many sides does the polygon have\?',low):return out(360/nums()[0],'regular exterior turns total 360')
    if len(ms)==1 and re.fullmatch(r'the interior angles of a polygon add to \$.*?\$\. how many sides does it have\?',low):return out(nums()[0]/180+2,'invert interior sum (n−2)180')
    if len(ms)==3 and re.fullmatch(r'three angles of a quadrilateral measure \$.*?\$, \$.*?\$, and \$.*?\$\. what is the fourth angle\?',low):return out(360-sum(nums()),'quadrilateral angle sum 360')
    if len(ms)==2 and re.fullmatch(r'a triangle has angles of \$.*?\$ and \$.*?\$\. what is the third angle\?',low):return out(180-sum(nums()),'triangle angle sum 180')
    if len(ms)==1 and re.fullmatch(r'two angles fit together along one side of a straight line\. one of them measures \$.*?\$\. what is the other\?',low):return out(180-nums()[0],'linear pair totals 180')
    if len(ms)==2 and re.fullmatch(r'three angles fit together all the way around a point\. two of them measure \$.*?\$ and \$.*?\$\. what is the third\?',low):return out(360-sum(nums()),'full turn totals 360')
    if not ms:
        polygon={'triangle':3,'quadrilateral':4,'pentagon':5,'hexagon':6,'heptagon':7,'octagon':8,'nonagon':9,'decagon':10,'dodecagon':12}
        for name,n in polygon.items():
            if re.fullmatch(r'(?:what is|find) the sum of the (?:interior )?angles of (?:a|an|any) '+name+r'(?: \([a-z]+ sides\))?[.?]',low):return out(s.Integer((n-2)*180),'polygon interior angle sum')
            if re.fullmatch(r'what is the measure of each interior angle of a regular '+name+r'(?: \([a-z]+ sides\))?\?',low):return out(s.Rational((n-2)*180,n),'regular polygon interior angle = sum/n')

    if re.fullmatch(r'how many multiples of \$.*?\$ are there from \$.*?\$ to \$.*?\$\?',low) and len(ms)==3:
        d,a,b=nums();return out(s.floor(b/d)-s.ceiling(a/d)+1,'count inclusive multiples using floor and ceiling')
    if re.fullmatch(r'how many ways can you make \$.*?\$ cents using (?:only )?(?:pennies|nickels|dimes|quarters)(?:, | and |, and )?(?:(?:pennies|nickels|dimes|quarters)(?:, | and |, and )?)*\?',low) and len(ms)==1:
        total=int(nums()[0]);coins=[v for word,v in [('pennies',1),('nickels',5),('dimes',10),('quarters',25)] if word in low]
        dp=[1]+[0]*total
        for coin in coins:
            for n in range(coin,total+1):dp[n]+=dp[n-coin]
        return out(s.Integer(dp[total]),'coin-change DP with unordered nonnegative counts; no ordering overcount')
    if re.fullmatch(r'how many (?:two|three)-digit numbers have digits that add up to \$.*?\$\?',low) and len(ms)==1:
        width=2 if 'two-digit' in low else 3;target=int(nums()[0])
        return out(s.Integer(sum(sum(map(int,str(n)))==target for n in range(10**(width-1),10**width))),'enumerate every integer of the specified digit length')
    if re.fullmatch(r'how many two-digit numbers have a units digit of \$.*?\$\?',low) and len(ms)==1:
        d=int(nums()[0]);return out(s.Integer(sum(n%10==d for n in range(10,100))),'enumerate 10 through 99')
    if re.fullmatch(r'how many two-digit numbers have digits whose product is \$.*?\$\?',low) and len(ms)==1:
        d=int(nums()[0]);return out(s.Integer(sum((n//10)*(n%10)==d for n in range(10,100))),'enumerate all two-digit digit products')
    if re.fullmatch(r'how many two-digit numbers have digits that differ by exactly \$.*?\$\?',low) and len(ms)==1:
        d=int(nums()[0]);return out(s.Integer(sum(abs(n//10-n%10)==d for n in range(10,100))),'enumerate absolute digit differences')
    if re.fullmatch(r'how many two-digit numbers have (?:both digits the same|a tens digit that is bigger than the units digit)\?',low):
        return out(s.Integer(sum(n//10==n%10 if 'same' in low else n//10>n%10 for n in range(10,100))),'enumerate all two-digit numbers with the stated digit comparison')
    if ('two dice are rolled' in low or 'two standard dice are rolled' in low) and len(ms)==1:
        target=nums()[0]; pairs=list(itertools.product(range(1,7),repeat=2));hits=None
        if re.search(r'(?:sum (?:is|be)|sum to) \$.*?\$\?',low):hits=sum(a+b==target for a,b in pairs)
        elif re.search(r'sum be \$.*?\$ or more\?',low):hits=sum(a+b>=target for a,b in pairs)
        elif re.search(r'product of the two numbers be \$.*?\$\?',low):hits=sum(a*b==target for a,b in pairs)
        elif re.search(r'at least one die shows a \$.*?\$\?',low):hits=sum(a==target or b==target for a,b in pairs)
        if hits is not None:return out(s.Rational(hits,36) if 'probability' in low else s.Integer(hits),'enumerate 36 ordered outcomes of two independent standard dice')
    if re.fullmatch(r'how many cuts are needed to slice a baguette into \$.*?\$ pieces\?',low) and len(ms)==1:return out(nums()[0]-1,'a straight unstacked loaf gains one piece per cut')
    if re.fullmatch(r'a baker cuts a long baguette into \$.*?\$ pieces\. how many cuts does she make\?',low) and len(ms)==1:return out(nums()[0]-1,'a straight unstacked loaf gains one piece per cut')
    if re.fullmatch(r'cutting a rope takes \$.*?\$ minutes per cut\. how long does it take to cut the rope into \$.*?\$ pieces\?',low) and len(ms)==2:
        t,n=nums();return out(t*(n-1),'n pieces need n−1 cuts, each taking t minutes')
    if re.fullmatch(r'each cut through a log takes \$.*?\$ minutes\. how long does it take to saw the log into \$.*?\$ pieces\?',low) and len(ms)==2:
        t,n=nums();return out(t*(n-1),'n pieces need n−1 cuts, each taking t minutes')
    raise ValueError('no additional stem model')
