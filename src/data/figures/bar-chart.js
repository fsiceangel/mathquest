// A zero-based vertical axis and explicit tick labels make reading the scale
// part of the task. Values and labels come from each problem's own dataset.
export function barChart(labels, values, step = 2) {
  const top = Math.ceil(Math.max(...values) / step) * step
  const scale = 10 / top
  const width = labels.length * 3 + 1
  const elems = [
    { t:'seg', a:[0,0], b:[width,0] },
    { t:'seg', a:[0,0], b:[0,10.5] },
  ]
  for (let y=0;y<=top;y+=step) {
    elems.push({ t:'label', p:[-0.8,y*scale], text:String(y) })
    if (y) elems.push({ t:'seg', a:[0,y*scale], b:[width,y*scale], dash:true })
  }
  labels.forEach((label,i) => {
    const x=i*3+1
    elems.push({ t:'poly', pts:[[x,0],[x+1.5,0],[x+1.5,values[i]*scale],[x,values[i]*scale]] })
    elems.push({ t:'label', p:[x+0.75,values[i]*scale+0.45], text:String(values[i]) })
    elems.push({ t:'label', p:[x+0.75,-0.8], text:label })
  })
  return { w:360, view:[-1.6,-1.6,width+0.5,11.2], elems }
}
