import './App.css';

import React from "react"
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";

function App() {
  return (
    <div>
      <main>
        {/*NAVBAR */} 
        <section>
          <nav className="py-10 mb-12 flex justify-between">
          <ul className="flex ml-auto pr-32 cursor-pointer">
            <li><a className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"> Portfolio</a></li>
            <li><a href="https://github.com/yildiztugba/yildiztugba.github.io/raw/uploadpdf/resume-tugba-yildiz.pdf" target="_blank"  className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" >Resume</a></li>
          </ul>
          </nav>
        </section>
        
        {/*ABOUT */} 
        <section>
          <div className="text-center p-10" >
            <h1 className="text-5xl py-2 text-teal-600 font-medium">Tugba Yildiz</h1>
            <h3 className="text-2xl py-2" >Front-end Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto">Computer Teaching graduate,passionate about front end development. worked as a tutor and IT coordinator. Experienced in a range of modern technologies including JavaScript, React and HTML5/CSS. Problem-solver, hard-worker and organized person.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
          <a href="mailto:okra.yildiz@gmail.com" target="_blank" ><AiFillMail /></a> 
          <a href="https://www.linkedin.com/in/yildiztugba/" target="_blank" ><AiFillLinkedin /></a>
          <a href="https://github.com/yildiztugba"target="_blank" ><AiFillGithub /></a>
        </div>
        </section>

  

      </main>
    </div>

  )
}

export default App;
