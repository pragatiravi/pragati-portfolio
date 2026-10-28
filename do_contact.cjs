const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const start = s.indexOf('function Contact(){');
const end = s.indexOf('\nexport default function App(){');
if(start === -1 || end === -1){ console.log('no'); process.exit(0); }
const rep = "function Contact(){const r=useReducedMotion();return <section id=\"contact\" className=\"py-24 max-w-3xl mx-auto px-6 text-center\"><Head label=\"Let's Talk\" title=\"Let's Build Something Great\"/>\n  <Reveal><p className=\"text-gray-300\">Have an idea, an opportunity, or just want to say hi? My inbox is always open.</p>\n  <p className=\"mt-6\"><motion.a whileHover={r?{}:{scale:1.05}} className=\"grad text-xl font-medium\" href={MAIL}>pragatiravi45@gmail.com</motion.a></p>\n  <p className=\"text-gray-400 mt-2\">8431826822 · Belagavi, Karnataka, India</p>\n  <div className=\"mt-8 flex justify-center gap-4 flex-wrap\"><motion.a whileHover={r?{}:{scale:1.05,y:-2}} whileTap={r?{}:{scale:.98}} className=\"btn btn-p\" href={MAIL}>Send Message</motion.a><motion.a whileHover={r?{}:{scale:1.05,y:-2}} whileTap={r?{}:{scale:.98}} className=\"btn btn-o\" href={LI} target=\"_blank\" rel=\"noreferrer\">LinkedIn</motion.a><motion.a whileHover={r?{}:{scale:1.05,y:-2}} whileTap={r?{}:{scale:.98}} className=\"btn btn-o\" href={GH} target=\"_blank\" rel=\"noreferrer\">GitHub</motion.a></div></Reveal></section>\n";
s = s.slice(0,start)+rep+s.slice(end);
fs.writeFileSync(p,s);
console.log('ok');
