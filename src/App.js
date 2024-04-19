import React, { useEffect } from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from './components/About'
import Skills from "./components/Skills"
import Work from "./components/Work"
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
    </div>
  )
}

export default App
