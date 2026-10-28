const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const start = s.indexOf('function Stats(){');
const end = s.indexOf('\nfunction Skills(){');
if(start === -1 || end === -1){ console.log('no'); process.exit(0); }
const rep = "function Stats(){const r=useReducedMotion();return <section className=\"py-20 bg-[#0e0e16]\"><div className=\"max-w-6xl mx-auto px-6\"><Head label=\"Numbers\" title=\"By the Stats\"/>\n  <div className=\"grid grid-cols-2 md:grid-cols-4 gap-6\">{stats.map(([n,l],i)=><Reveal key={l} delay={i*.1}><motion.div whileHover={r?{}:{y:-6,scale:1.02}} transition={{type:'spring',stiffness:200,damping:18}} className=\"card p-6 text-center\"><div className=\"text-5xl font-bold grad\"><Count to={n}/></div><p className=\"text-gray-400 mt-2 text-sm\">{l}</p></motion.div></Reveal>)}</div></div></section>\n";
s = s.slice(0,start)+rep+s.slice(end);
fs.writeFileSync(p,s);
console.log('ok');
