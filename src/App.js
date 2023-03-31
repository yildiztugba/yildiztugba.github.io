import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import React from "react"
import Projects from "./components/Projects"

function App() {
  return (
    <div>
      <main>
        <Navbar />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>

  )
}

export default App;
