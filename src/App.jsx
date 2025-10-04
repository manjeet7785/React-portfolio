import React from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Project from './component/Project';
import About from './component/About';
import Skill from './component/Skill';
import Contact from './component/Contact';
import Experince from './component/Experince';
import Footer from './component/Footer';

const App = () => {
  return (
    <>

      <Navbar />
      <Home />
      <About />
      <Experince />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </>
  )
}

export default App;

