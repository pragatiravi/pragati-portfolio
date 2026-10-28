const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const start = s.indexOf('function Experience(){');
const end = s.indexOf('\nfunction Workshops(){');
if(start === -1 || end === -1){ console.log('no'); process.exit(0); }
const rep = "function Experience(){const r=useReducedMotion();return <section id=\"experience\" className=\"py-24 max-w-4xl mx-auto px-6\"><Head label=\"Career\" title=\"Experience\"/>\n  <div className=\"border-l border-[var(--line)] pl-8 space-y-8\">{jobs.map(([rjob,c,d,t],i)=><Reveal key={rjob} delay={i*.1}><motion.div whileHover={r?{}:{x:6}} transition={{type:'spring',stiffness:200,damping:18}} className=\"card p-6 relative\"><motion.i initial={{scale:0}} whileInView={{scale:1}} viewport={{once:true}} transition={{delay:i*.1+0.2,type:'spring',stiffness:260,damping:18}} className=\"absolute -left-[41px] top-8 w-3 h-3 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400\"/><p className=\"text-cyan-400 text-sm\">{d}</p><h3 className=\"font-bold text-xl mt-1\">{rjob}</h3><p className=\"text-gray-400\">{c}</p><p className=\"text-gray-300 text-sm mt-3\">{t}</p></motion.div></Reveal>)}</div></section>\n";
s = s.slice(0,start)+rep+s.slice(end);
fs.writeFileSync(p,s);
console.log('ok');
