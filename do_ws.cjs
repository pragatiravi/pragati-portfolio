const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const start = s.indexOf('function Workshops(){');
const end = s.indexOf('\nfunction Contact(){');
if(start === -1 || end === -1){ console.log('no'); process.exit(0); }
const rep = "function Workshops(){const r=useReducedMotion();return <section id=\"workshops\" className=\"py-24 max-w-6xl mx-auto px-6\"><Head label=\"Teaching\" title=\"Technical Sessions Delivered\"/>\n  <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-6\">{sessions.map(([t,d],i)=><Reveal key={t} delay={i*.08}><motion.div whileHover={r?{}:{y:-8}} transition={{type:'spring',stiffness:200,damping:20}} className=\"card p-6 h-full\"><h3 className=\"font-bold\">{t}</h3><p className=\"text-gray-400 text-sm mt-2\">{d}</p></motion.div></Reveal>)}</div></section>\n";
s = s.slice(0,start)+rep+s.slice(end);
fs.writeFileSync(p,s);
console.log('ok');
