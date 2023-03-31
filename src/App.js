import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import React from "react"


function App() {
  return (
    <div>
      <main>
        <Navbar />
        <About />
        <Skills />
      </main>
    </div>

  )
}

export default App;
