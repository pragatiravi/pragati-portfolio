const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const old = "function Reveal({children,delay=0,className=''}){const r=useReducedMotion();\n  return <motion.div className={className} initial={r?false:{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.6,delay}}>{children}</motion.div>}";
const neu = "function Reveal({children,delay=0,className=''}){const r=useReducedMotion();\n  if(r) return <div className={className}>{children}</div>;\n  return <motion.div className={className} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.7,delay,ease:[0.25,0.1,0.25,1]}}>{children}</motion.div>}";
if(s.includes(old)) {
  s = s.split(old).join(neu);
  fs.writeFileSync(p,s);
  console.log('ok');
} else {
  console.log('no');
}
