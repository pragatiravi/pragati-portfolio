const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const old = '<Reveal delay={.15}><div className="card p-6"><p className="text-cyan-400 text-sm uppercase tracking-widest">Education</p>';
const neu = '<Reveal delay={.15} y={30}><motion.div whileHover={{y:-6}} transition={{type:\'spring\',stiffness:200,damping:20}} className="card p-6"><p className="text-cyan-400 text-sm uppercase tracking-widest">Education</p>';
if(s.includes(old)) {
  s = s.split(old).join(neu);
  s = s.replace('<p className="text-gray-400 text-sm mt-1">CGPA: 8.13 / 10 (till 5th semester)</p></div></Reveal>', '<p className="text-gray-400 text-sm mt-1">CGPA: 8.13 / 10 (till 5th semester)</p></motion.div></Reveal>');
  fs.writeFileSync(p, s);
  console.log('ok');
} else {
  console.log('no');
}
