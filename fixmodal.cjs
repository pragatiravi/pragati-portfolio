const fs = require('fs');
const p = 'E:/prg-portfolio/src/App.jsx';
let s = fs.readFileSync(p,'utf8');
const old = "function Modal({p,close}){useEffect(()=>{const k=e=>e.key==='Escape'&&close();addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{removeEventListener('keydown',k);document.body.style.overflow=''}},[close]);\n  return <motion.div className=\"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4\" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={close}>\n  <motion.div role=\"dialog\" aria-modal=\"true\" aria-label={p.title} onClick={e=>e.stopPropagation()} initial={{y:40,scale:.96}} animate={{y:0,scale:1}} exit={{y:40,opacity:0}} className=\"card hover:!transform-none max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7\">";
const neu = "function Modal({p,close}){const r=useReducedMotion();useEffect(()=>{const k=e=>e.key==='Escape'&&close();addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{removeEventListener('keydown',k);document.body.style.overflow=''}},[close]);\n  return <motion.div className=\"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4\" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={close}>\n  <motion.div role=\"dialog\" aria-modal=\"true\" aria-label={p.title} onClick={e=>e.stopPropagation()} initial={r?false:{y:60,scale:.94,opacity:0}} animate={{y:0,scale:1,opacity:1}} exit={r?{opacity:0}:{y:40,scale:.98,opacity:0}} transition={{type:'spring',stiffness:300,damping:26}} className=\"card hover:!transform-none max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7\">";
if(s.includes(old)) {
  s = s.split(old).join(neu);
  fs.writeFileSync(p,s);
  console.log('ok');
} else {
  console.log('no');
}
