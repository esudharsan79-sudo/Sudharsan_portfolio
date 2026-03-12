import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Skills from './Components/Skills';


function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Resume/>
        <Contact/>
    </div>
  );
};

export default App;
