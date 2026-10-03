// Restricted arithmetic parser; unsupported notation returns null.
export function numericValue(raw) {
  let s=String(raw).replace(/\s+(?:integer lengths|liters?|meters?|centimeters?|feet|inches?|(?:cubic|square) units)$/,'').replaceAll('$','').replace(/\\(?:left|right|,|!|;)/g,'').replace(/\^?\\circ/g,'').replace(/^(?:(?:\\angle\s*)?[A-Za-z]+|\\ell)\s*=\s*/,'').replace(/\s+/g,'')
  const braced=(text,start)=>{if(text[start]!=='{')throw Error();let depth=0;for(let i=start;i<text.length;i++){if(text[i]==='{')depth++;if(text[i]==='}'&&!--depth)return [text.slice(start+1,i),i+1];}throw Error()}
  const parse=text=>{
    let out=''
    for(let i=0;i<text.length;){
      if(text.startsWith('\\frac',i)){const[a,j]=braced(text,i+5);const[b,k]=braced(text,j);out+='(('+parse(a)+')/('+parse(b)+'))';i=k}
      else if(text.startsWith('\\sqrt',i)){const[a,j]=braced(text,i+5);out+='S('+parse(a)+')';i=j}
      else {out+=text[i];i++}
    }
    return out
  }
  try {
    s=parse(s).replaceAll('\\pi','P').replaceAll('\\times','*').replaceAll('\\cdot','*').replaceAll(':','/').replaceAll('{','(').replaceAll('}',')').replaceAll('^','**')
    s=s.replace(/([\d)P])(?=[PS(])/g,'$1*')
    if(!/^[\dPS()+*/.\-]+$/.test(s))return null
    const value=Function('P','S','return ('+s+')')(Math.PI,Math.sqrt)
    return Number.isFinite(value)?value:null
  }catch{return null}
}
export const equalNumber=(a,b)=>a!==null&&b!==null&&Math.abs(a-b)<=1e-10*Math.max(1,Math.abs(a),Math.abs(b))
