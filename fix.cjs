const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const old = '<motion.span key={t} className="chip" initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.04}}>{t}</motion.span>';
const neu = '<motion.span key={t} className="chip" initial={{opacity:0,scale:.8,y:10}} whileInView={{opacity:1,scale:1,y:0}} viewport={{once:true}} transition={{delay:i*.03,type:\'spring\',stiffness:300,damping:20}} whileHover={{scale:1.05}}>{t}</motion.span>';
if(s.includes(old)) {
  s = s.split(old).join(neu);
  fs.writeFileSync(p, s);
  console.log('ok');
} else {
  console.log('no');
}
