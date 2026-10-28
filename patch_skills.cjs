const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const old = "function Skills(){return <section className=\"py-24 max-w-6xl mx-auto px-6\"><Head label=\"Toolbox\" title=\"Skills\"/>\n  <div className=\"grid md:grid-cols-3 gap-6\">{Object.entries(skills).map(([k,v],i)=><Reveal key={k} delay={i*.08}><div className=\"card p-6 h-full\"><h3 className=\"font-bold mb-4\">{k}</h3><div className=\"flex flex-wrap gap-2\">{v.map(t=><span key={t} className=\"chip\">{t}</span>)}</div></div></Reveal>)}</div></section>}";
const neu = "function Skills(){const r=useReducedMotion();return <section className=\"py-24 max-w-6xl mx-auto px-6\"><Head label=\"Toolbox\" title=\"Skills\"/>\n  <div className=\"grid md:grid-cols-3 gap-6\">{Object.entries(skills).map(([k,v],i)=><Reveal key={k} delay={i*.08}><motion.div whileHover={r?{}:{y:-8}} transition={{type:'spring',stiffness:200,damping:20}} className=\"card p-6 h-full\"><h3 className=\"font-bold mb-4\">{k}</h3><div className=\"flex flex-wrap gap-2\">{v.map((t,ti)=><motion.span key={t} className=\"chip\" initial={{opacity:0,scale:.8,y:6}} whileInView={{opacity:1,scale:1,y:0}} viewport={{once:true}} transition={{delay:i*.08+ti*.02,type:'spring',stiffness:300,damping:20}} whileHover={{scale:1.05}}>{t}</motion.span>)}</div></motion.div></Reveal>)}</div></section>}";
if(s.includes(old)) {
  s = s.split(old).join(neu);
  fs.writeFileSync(p,s);
  console.log('ok');
} else {
  console.log('no');
}
