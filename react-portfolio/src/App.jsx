import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App
