import {useState,useEffect,useRef} from 'react';
import {motion,AnimatePresence,useInView,animate,useScroll,useSpring,useReducedMotion} from 'framer-motion';
import {projects,skills,services,sessions,jobs,stats} from './data.js';
import profilePic from './assets/me.png';
const LI='https://www.linkedin.com/in/pragati-gangoji/',GH='https://github.com/pragatiravi',MAIL='mailto:pragatiravi45@gmail.com';
const links=[['About','about'],['Work','work'],['Experience','experience'],['Workshops','workshops'],['Contact','contact']];

function Reveal({children,delay=0,className=''}){const r=useReducedMotion();
 return <motion.div className={className} initial={r?false:{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.6,delay}}>{children}</motion.div>}
function Head({label,title}){return <Reveal className="mb-12"><p className="text-sm uppercase tracking-[.25em] text-cyan-400">{label}</p><h2 className="text-4xl md:text-5xl font-bold mt-2">{title}</h2></Reveal>}
function Count({to}){const ref=useRef(),v=useInView(ref,{once:true}),[n,setN]=useState(0);
 useEffect(()=>{if(v){const c=animate(0,to,{duration:1.6,onUpdate:x=>setN(Math.round(x))});return()=>c.stop()}},[v,to]);return <span ref={ref}>{n}</span>}

function Nav(){const [s,setS]=useState(false),[act,setAct]=useState('');
 useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener('scroll',f);
  const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&setAct(x.target.id)),{rootMargin:'-45% 0px -50% 0px'});
  links.forEach(([,id])=>{const el=document.getElementById(id);el&&io.observe(el)});return()=>{removeEventListener('scroll',f);io.disconnect()}},[]);
 return <header className={`fixed top-0 inset-x-0 z-40 transition-all ${s?'backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-[var(--line)]':''}`}>
 <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main">
  <a href="#top" className="text-2xl font-bold">PG<span className="grad">.</span></a>
  <ul className="hidden md:flex gap-8 text-sm">{links.map(([t,id])=><li key={id}><a href={'#'+id} className={act===id?'text-cyan-400':'text-gray-400 hover:text-white'}>{t}</a></li>)}</ul>
  <span className="hidden sm:flex items-center gap-2 text-xs chip"><i className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>Open to opportunities</span>
 </nav></header>}

function Hero(){const r=useReducedMotion();const w=(d)=>({initial:r?false:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:d}});
 return <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-20">
 <div className="glow w-96 h-96 bg-violet-600 -top-10 -left-20"/><div className="glow w-96 h-96 bg-cyan-500 bottom-0 right-0"/>
 <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
  <div>
   <motion.p {...w(.1)} className="text-cyan-400 uppercase tracking-[.25em] text-sm">Software Developer</motion.p>
   <motion.h1 {...w(.25)} className="text-5xl md:text-7xl font-bold leading-[1.05] mt-4 grad">PRAGATI RAVI GANGOJI</motion.h1>
   <motion.p {...w(.4)} className="mt-6 text-lg text-gray-300 max-w-lg">Python-focused software developer building scalable backend systems, full-stack web apps and cloud-ready applications.</motion.p>
   <motion.p {...w(.5)} className="mt-3 text-sm text-gray-500">Backend &amp; Cloud Engineering | Python, AWS</motion.p>
   <motion.div {...w(.65)} className="mt-8 flex gap-4 flex-wrap"><a href="#work" className="btn btn-p">View Work</a><a href="#contact" className="btn btn-o">Get In Touch</a></motion.div>
  </div>
  <motion.div {...w(.4)} className="relative mx-auto w-72 md:w-96">
   <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--line)] shadow-2xl shadow-violet-950/50 bg-gradient-to-br from-violet-600/20 to-cyan-500/10 group">
    <img
     src={profilePic}
     alt="Pragati Ravi Gangoji"
     className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/40 via-transparent to-transparent pointer-events-none" />
   </div>
   <motion.div animate={r?{}:{y:[0,-10,0]}} transition={{repeat:Infinity,duration:4}} className="absolute -bottom-5 -left-5 card px-5 py-3 text-sm font-medium backdrop-blur-md bg-[#13131c]/90"><span className="grad font-bold">2×</span> Hackathon Winner</motion.div>
  </motion.div>
 </div>
 <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 flex flex-col items-center gap-2">scroll<motion.i animate={r?{}:{y:[0,8,0]}} transition={{repeat:Infinity,duration:1.6}} className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"/></a>
 </section>}

function About(){return <section id="about" className="py-24 max-w-6xl mx-auto px-6">
 <Head label="Who I Am" title={<>Problem Solver,<br/>Clean Code.</>}/>
 <div className="grid md:grid-cols-2 gap-10">
  <Reveal><p className="text-gray-300 leading-relaxed">Python-focused software developer with strong problem-solving skills and experience building API-driven applications using Flask and JavaScript. Proficient in Linux environments and familiar with AWS fundamentals, with a focus on designing scalable backend systems, efficient debugging, and building reliable applications. I also enjoy teaching: I have delivered technical workshops for engineering and diploma students, and I am a 2-time hackathon winner.</p>
  <div className="flex flex-wrap gap-2 mt-6">{['Python','C++','JavaScript','ReactJS','Node.js','Django','Flask','MongoDB','MySQL','AWS (SAA)','Git','Linux (basics)'].map((t,i)=><motion.span key={t} className="chip" initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.04}}>{t}</motion.span>)}</div></Reveal>
  <Reveal delay={.15}><div className="card p-6"><p className="text-cyan-400 text-sm uppercase tracking-widest">Education</p>
   <h3 className="text-xl font-bold mt-3">Bachelor of Engineering, Computer Science &amp; Engineering</h3><p className="text-gray-400 mt-1">2023–2027</p>
   <p className="mt-3">Angadi Institute of Technology and Management (AITM), Belagavi</p><p className="text-gray-400 text-sm mt-1">CGPA: 8.13 / 10 (till 5th semester)</p></div></Reveal>
 </div></section>}

function Modal({p,close}){useEffect(()=>{const k=e=>e.key==='Escape'&&close();addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{removeEventListener('keydown',k);document.body.style.overflow=''}},[close]);
 return <motion.div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={close}>
 <motion.div role="dialog" aria-modal="true" aria-label={p.title} onClick={e=>e.stopPropagation()} initial={{y:40,scale:.96}} animate={{y:0,scale:1}} exit={{y:40,opacity:0}} className="card hover:!transform-none max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7">
  <button onClick={close} aria-label="Close" className="float-right text-2xl text-gray-400 hover:text-white">×</button>
  <p className="text-cyan-400 text-sm">{p.tag}</p><h3 className="text-2xl font-bold mt-1">{p.title}</h3>
  {p.desc&&<p className="text-gray-300 mt-4">{p.desc}</p>}
  <dl className="grid grid-cols-2 gap-4 mt-5 text-sm">{p.ctx&&<div><dt className="text-gray-500">Context</dt><dd>{p.ctx}</dd></div>}<div><dt className="text-gray-500">Year</dt><dd>{p.year}</dd></div><div className="col-span-2"><dt className="text-gray-500">Tech Stack</dt><dd>{p.tech}</dd></div></dl>
  <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-300 text-sm">{p.pts.map(x=><li key={x}>{x}</li>)}</ul>
  <div className="flex gap-3 mt-6">{p.live&&<a className="btn btn-p" href={p.live} target="_blank" rel="noreferrer">Live Preview</a>}<a className="btn btn-o" href={p.code} target="_blank" rel="noreferrer">View Code</a></div>
 </motion.div></motion.div>}

function Work(){const [f,setF]=useState('All'),[sel,setSel]=useState(null);
 const list=projects.filter(p=>f==='All'||p.cat.includes(f));
 return <section id="work" className="py-24 max-w-6xl mx-auto px-6"><Head label="Portfolio" title="Selected Work"/>
 <div className="flex gap-2 flex-wrap mb-8" role="tablist">{['All','AI & ML','Full-Stack','Security'].map(c=><button key={c} onClick={()=>setF(c)} className={`chip ${f===c?'!bg-violet-600 !border-violet-600':''}`}>{c}</button>)}</div>
 <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <AnimatePresence mode="popLayout">{list.map((p,i)=><motion.button layout key={p.id} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{delay:i*.06}} onClick={()=>setSel(p)} className={`card group text-left overflow-hidden ${p.featured?'lg:col-span-1':''}`}>
   <div className="h-40 relative overflow-hidden bg-gradient-to-br from-violet-600/40 via-[#13131c] to-cyan-500/30 transition-transform duration-500 group-hover:scale-110">{p.featured&&<span className="absolute top-3 left-3 chip text-xs">Featured</span>}</div>
   <div className="p-5"><p className="text-cyan-400 text-xs">{p.tag}</p><h3 className="font-bold mt-1">{p.title}</h3><span className="text-sm text-gray-400 group-hover:text-white mt-3 inline-block">View Details →</span></div>
  </motion.button>)}</AnimatePresence></motion.div>
 <AnimatePresence>{sel&&<Modal p={sel} close={()=>setSel(null)}/>}</AnimatePresence></section>}

function Stats(){return <section className="py-20 bg-[#0e0e16]"><div className="max-w-6xl mx-auto px-6"><Head label="Numbers" title="By the Stats"/>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{stats.map(([n,l],i)=><Reveal key={l} delay={i*.1}><div className="card p-6 text-center"><div className="text-5xl font-bold grad"><Count to={n}/></div><p className="text-gray-400 mt-2 text-sm">{l}</p></div></Reveal>)}</div></div></section>}

function Skills(){return <section className="py-24 max-w-6xl mx-auto px-6"><Head label="Toolbox" title="Skills"/>
 <div className="grid md:grid-cols-3 gap-6">{Object.entries(skills).map(([k,v],i)=><Reveal key={k} delay={i*.08}><div className="card p-6 h-full"><h3 className="font-bold mb-4">{k}</h3><div className="flex flex-wrap gap-2">{v.map(t=><span key={t} className="chip">{t}</span>)}</div></div></Reveal>)}</div></section>}

function Services(){return <section className="py-24 max-w-6xl mx-auto px-6"><Head label="What I Do" title="Services"/>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map(([e,t,d],i)=><Reveal key={t} delay={i*.08}><div className="card p-7 h-full"><div className="text-4xl" aria-hidden>{e}</div><h3 className="font-bold text-lg mt-4">{t}</h3><p className="text-gray-400 text-sm mt-2">{d}</p></div></Reveal>)}</div></section>}

function Experience(){return <section id="experience" className="py-24 max-w-4xl mx-auto px-6"><Head label="Career" title="Experience"/>
 <div className="border-l border-[var(--line)] pl-8 space-y-8">{jobs.map(([r,c,d,t],i)=><Reveal key={r} delay={i*.1}><div className="card p-6 relative"><i className="absolute -left-[41px] top-8 w-3 h-3 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400"/><p className="text-cyan-400 text-sm">{d}</p><h3 className="font-bold text-xl mt-1">{r}</h3><p className="text-gray-400">{c}</p><p className="text-gray-300 text-sm mt-3">{t}</p></div></Reveal>)}</div></section>}

function Workshops(){return <section id="workshops" className="py-24 max-w-6xl mx-auto px-6"><Head label="Teaching" title="Technical Sessions Delivered"/>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{sessions.map(([t,d],i)=><Reveal key={t} delay={i*.08}><div className="card p-6 h-full"><h3 className="font-bold">{t}</h3><p className="text-gray-400 text-sm mt-2">{d}</p></div></Reveal>)}</div></section>}

function Contact(){return <section id="contact" className="py-24 max-w-3xl mx-auto px-6 text-center"><Head label="Let's Talk" title="Let's Build Something Great"/>
 <Reveal><p className="text-gray-300">Have an idea, an opportunity, or just want to say hi? My inbox is always open.</p>
 <p className="mt-6"><a className="grad text-xl font-medium" href={MAIL}>pragatiravi45@gmail.com</a></p>
 <p className="text-gray-400 mt-2">8431826822 · Belagavi, Karnataka, India</p>
 <div className="mt-8 flex justify-center gap-4 flex-wrap"><a className="btn btn-p" href={MAIL}>Send Message</a><a className="btn btn-o" href={LI} target="_blank" rel="noreferrer">LinkedIn</a><a className="btn btn-o" href={GH} target="_blank" rel="noreferrer">GitHub</a></div></Reveal></section>}

export default function App(){const {scrollYProgress}=useScroll(),sx=useSpring(scrollYProgress,{stiffness:120,damping:30});
 return <><motion.div style={{scaleX:sx}} className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-violet-500 to-cyan-400 z-50"/>
 <Nav/><main><Hero/><About/><Work/><Stats/><Skills/><Services/><Experience/><Workshops/><Contact/></main>
 <footer className="border-t border-[var(--line)] py-8 px-6 flex flex-wrap gap-4 justify-between max-w-6xl mx-auto text-sm text-gray-500"><p>© 2026 Pragati Ravi Gangoji. All rights reserved.</p><a href="#top" className="hover:text-white">Back to top ↑</a></footer></>}
