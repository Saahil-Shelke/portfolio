import './App.css';
import ParticleBackground from './components/ParticleBackground';
import CursorTrail from './components/CursorTrail';
import KonamiEgg from './components/KonamiEgg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <CursorTrail />
      <KonamiEgg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
