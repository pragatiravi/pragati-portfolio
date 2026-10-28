const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const start = s.indexOf('function Nav(){');
const end = s.indexOf('\nfunction Hero(){');
const rep = "function Nav(){const [snav,setSnav]=useState(false),[act,setAct]=useState('');\n  useEffect(()=>{const f=()=>setSnav(scrollY>40);f();addEventListener('scroll',f);\n   const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&setAct(x.target.id)),{rootMargin:'-45% 0px -50% 0px'});\n   links.forEach(([,id])=>{const el=document.getElementById(id);el&&io.observe(el)});return()=>{removeEventListener('scroll',f);io.disconnect()}},[]);\n  const r=useReducedMotion();\n  return <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${snav?'backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-[var(--line)]':''}`}>\n  <nav className=\"max-w-6xl mx-auto px-6 h-16 flex items-center justify-between\" aria-label=\"Main\">\n   <motion.a whileHover={r?{}:{scale:1.05}} href=\"#top\" className=\"text-2xl font-bold\">PG<span className=\"grad\">.</span></motion.a>\n   <ul className=\"hidden md:flex gap-8 text-sm\">{links.map(([t,id],i)=><motion.li initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:i*.05}} key={id}><a href={'#'+id} className={act===id?'text-cyan-400':'text-gray-400 hover:text-white'}>{t}</a></motion.li>)}</ul>\n   <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4}} className=\"hidden sm:flex items-center gap-2 text-xs chip\"><motion.i animate={r?{}:{scale:[1,1.2,1]}} transition={{repeat:Infinity,duration:2}} className=\"w-2 h-2 rounded-full bg-green-400\"/>Open to opportunities</motion.span>\n  </nav></header>\n\n";
s = s.slice(0,start)+rep+s.slice(end);
fs.writeFileSync(p,s);
console.log('ok');
