import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import ExperienceSection from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Leadership from './sections/Leadership';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Skills />
        <Leadership />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
