import './App.css';
import  Nav  from './components/Nav.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer.jsx';
import './components/Style.css'
import { FiLoader } from "react-icons/fi";


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <div className='mobile'>
          <span>Coming soon for small screens <FiLoader /></span>
          <span>Check out on Desktop/Laptop</span>
      </div>
    </div>
  );
}

export default App;
