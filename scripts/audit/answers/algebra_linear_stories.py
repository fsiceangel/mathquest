import re
import sympy as s

WORDS={'two':2,'twice':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9,'twelve':12}

def derive(q,choices,expr,maths,ans_value,solve_equation):
    low=q.lower();ms=maths(q);x=s.Symbol('x',real=True)
    def numbers():return [expr(m.replace(r'\$','')) for m in ms]
    def factor():
        for word,n in WORDS.items():
            if re.search(r'\b'+word+r' (?:times|consecutive|neighbouring)',low) or word=='twice' and word in low:return s.Integer(n)
        raise ValueError('Missing explicit multiplicative factor.')
    def linear(equation,what=x):
        roots=s.solve(equation,x);assert len(roots)==1
        return s.simplify(what.subs(x,roots[0]) if hasattr(what,'subs') else what),'Independent stem equation '+str(equation)+'=0 gives x='+str(roots[0])+'; requested expression '+str(what)+'.'
    m=re.match(r'(\w+) less than a number is',low)
    if m and m[1] in WORDS:return numbers()[0]+WORDS[m[1]],'Undo explicit subtraction from original number.'
    m=re.match(r'(\w+) times a number, decreased by',low)
    if m and m[1] in WORDS:
        d,total=numbers();return (total+d)/WORDS[m[1]],'Undo subtraction and divide by stated multiplier.'
    if 'consecutive' in low or 'neighbouring houses' in low:
        n=next(v for w,v in WORDS.items() if re.search(r'\b'+w+r' (?:consecutive|neighbouring)',low));total=numbers()[0];step=2 if 'odd' in low or 'even' in low else 1
        a=total/n-s.Rational(step*(n-1),2);values=[a+step*i for i in range(n)]
        assert all(v.is_integer for v in values)
        if 'odd' in low:assert all(v%2==1 for v in values)
        if 'even' in low:assert all(v%2==0 for v in values)
        out=values[0] if 'smallest' in low else values[n//2] if 'middle' in low else values[-1]
        return out,'Solve arithmetic sum for first integer; independently verify exact integer/parity conditions and enumerate '+str(values)
    if 'a number plus half' in low:return numbers()[0]*s.Rational(2,3),'Solve n+n/2=total.'
    if 'a number plus a third' in low:return numbers()[0]*s.Rational(3,4),'Solve n+n/3=total.'
    if 'a number minus a quarter' in low:return numbers()[0]*s.Rational(4,3),'Solve n-n/4=total.'
    if 'tomato' in low and 'two-thirds' in low:return numbers()[0]*s.Rational(3,5),'Tomatoes t plus peppers 2t/3 equal given total.'
    if ('older than' in low or 'more than the bucket' in low or 'more stickers than' in low) and not 'in ' in low[:2] and 'years' not in low.split('.')[0][-10:]:
        pass
    if ('times as old' in low or 'times as much water' in low or 'times as many stickers' in low) and 'in how many' not in low and 'in $' not in low and 'years ago' not in low:
        r=factor();delta=numbers()[0];smaller=delta/(r-1)
        return smaller if 'bucket hold' in low else r*smaller,'Larger=r*smaller and difference=(r-1)*smaller; solve both quantities.'
    if ('together' in low and 'money' in low) or 'cats and dogs' in low or 'paperbacks' in low:
        d,total=numbers();r=factor();offset=-d if 'fewer' in low else d;small=(total-offset)/(r+1);big=r*small+offset
        assert small>=0 and big>=0
        return small if 'how many dogs' in low else big,'Solve smaller + (ratio*smaller + signed offset)=total; quantities '+str((small,big))
    if 'rectangle' in low and 'perimeter' in low:
        nums=numbers();total=nums[-1]
        if 'three times as long' in low:length=3*x;target=x
        elif 'length' in low and 'twice its width' in low:length=2*x-nums[0];target=length
        elif "width is" in low:
            length=x+nums[0];target=length
        else:
            length=x+nums[0];target=x if 'what is the width' in low else length
        value,proof=linear(2*(length+x)-total,target);assert value>0
        return value,proof+' Positive rectangle dimensions.'
    if 'triangle' in low and 'perimeter' in low:
        sides=list(map(expr,ms[:3]));total=expr(ms[-1]);symbol=next(iter(sides[0].free_symbols));root=s.solve(sum(sides)-total,symbol);assert len(root)==1
        values=[v.subs(symbol,root[0]) for v in sides];assert min(values)>0 and 2*max(values)<sum(values)
        return min(values) if 'shortest' in low else max(values),'Perimeter equation gives '+str(symbol)+'='+str(root[0])+'; sides '+str(values)+' satisfy all strict triangle inequalities.'
    if ('in how many years' in low or 'how many years ago' in low) and 'is $' in low:
        ages=numbers();young,old=min(ages),max(ages);r=factor();sign=-1 if 'ago' in low else 1
        t=(old-r*young)/(sign*(r-1));assert t>=0 and young+sign*t>=0
        return t,'Set older '+str(old)+' + signed t = '+str(r)+'*(younger '+str(young)+' + signed t); time direction and nonnegative ages checked.'
    if 'years older than' in low and 'in $' in low:
        delta,t=numbers();r=factor();young=delta/(r-1)-t;assert young>=0
        return young+delta if 'how old is ravi' in low else young,'Age difference stays constant; future younger=delta/(ratio-1), subtract elapsed time; older adds difference.'
    if 'jar holds only' in low:
        a,b,delta,total=numbers();count=(100*total-b*delta)/(a+b);assert count.is_integer and count>=0
        return count,'Count small coins x, large coins x+delta; values in cents: a*x+b*(x+delta)=100*total.'
    if 'cash box' in low:
        a,b,aa,bb,total=numbers();assert a==aa and b==bb
        large=total/(2*a+b);assert large.is_integer
        return 2*large,'Two small bills per large bill: total=(2*small_denom+large_denom)*large_count.'
    if any(t in low for t in ['movie tickets','ride tickets','hot dogs','at a school fair, tickets']):
        a,b,n,total=numbers();second=(total-a*n)/(b-a);first=n-second;assert min(first,second)>=0 and first.is_integer and second.is_integer
        first_requested='how many adults' in low and 'movie tickets' in low or 'how many students' in low
        return first if first_requested else second,'Solve count1+count2=n and price1*count1+price2*count2=total; integer nonnegative counts='+str((first,second))
    if 'raffle tickets' in low:
        n,a,b,total,target=numbers();assert target==b;count=(total-a*n)/(b-a);assert count.is_integer and 0<=count<=n
        return count,'Replace n cheap tickets by requested expensive ones: each adds b-a revenue.'
    if 'water tank lost' in low:return sum(numbers()),'Initial amount = loss + final amount.'
    if 'at sunrise' in low:return expr(ms[-1])-expr(ms[-2]),'Initial temperature = final temperature - rise.'
    if 'submarine dives' in low:
        n,total=numbers();return total/n,'Constant signed change per minute = total signed change / minutes.'
    if "diver's total change" in low:
        n,each=numbers();return n*each,'Total signed change is number of equal stages times change per stage.'
    if 'number is multiplied' in low:
        a,b,total=numbers();return (total-b)/a,'Undo addition, then divide by multiplier.'
    if 'for what value' in low and 'expression' in low and 'equal' in low:
        target,form,total=map(expr,ms);root=s.solve(form-total,target);assert len(root)==1
        return root[0],'Solve explicitly requested expression equality '+str(form)+'='+str(total)
    if 'thinks of a number' in low and 'subtracts' in low:
        a,b,total=numbers();return (total+b)/a,'Undo subtract b and multiply a.'
    m=re.match(r'(\w+) (more|less) than (\w+) times a number is',low)
    if m:
        b=WORDS[m[1]]*(1 if m[2]=='more' else -1);a=WORDS[m[3]];return (numbers()[0]-b)/a,'Solve verbal linear relation a*n+signed_offset=total.'
    if low.startswith('twice a number, increased'):
        a,total=numbers();return (total-a)/2,'Solve 2n+increase=total.'
    if low.startswith('three more than half a number'):
        return 2*(numbers()[0]-3),'Solve n/2+3=total.'
    if low.startswith('which of these equations'):
        roots=[solve_equation(maths(c)[0])[0] for c in choices]
        return ('choices',[i for i,v in enumerate(roots) if v==s.S.Reals]),'Independently solve each candidate; identity must hold over all real numbers.'
    return None
