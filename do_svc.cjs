const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const start = s.indexOf('function Services(){');
const end = s.indexOf('\nfunction Experience(){');
if(start === -1 || end === -1){ console.log('no'); process.exit(0); }
const rep = "function Services(){const r=useReducedMotion();return <section className=\"py-24 max-w-6xl mx-auto px-6\"><Head label=\"What I Do\" title=\"Services\"/>\n  <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-6\">{services.map(([e,t,d],i)=><Reveal key={t} delay={i*.08}><motion.div whileHover={r?{}:{y:-10,scale:1.01}} transition={{type:'spring',stiffness:200,damping:18}} className=\"card p-7 h-full\"><motion.div initial={{scale:.9}} whileInView={{scale:1}} viewport={{once:true}} transition={{delay:i*.08,type:'spring',stiffness:260,damping:16}} className=\"text-4xl\" aria-hidden>{e}</motion.div><h3 className=\"font-bold text-lg mt-4\">{t}</h3><p className=\"text-gray-400 text-sm mt-2\">{d}</p></motion.div></Reveal>)}</div></section>\n";
s = s.slice(0,start)+rep+s.slice(end);
fs.writeFileSync(p,s);
console.log('ok');
