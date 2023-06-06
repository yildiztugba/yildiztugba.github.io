import React from 'react' 
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub
} from  "react-icons/ai";

export default function About(){
    return(
        <div id="about" className="p-24 h-auto">
          <div className="text-center p-16 " >
            <h1 className="text-5xl  py-3 text-teal-600 font-medium">Tugba Yildiz</h1>
            <h3 className="text-2xl py-2" >Front-end Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto">Computer Teaching graduate,passionate about front end development. worked as a tutor and IT coordinator. Experienced in a range of modern technologies including JavaScript, React and HTML5/CSS. Problem-solver, hard-worker and organized person.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
          <a href="mailto:okra.yildiz@gmail.com" target="_blank" ><AiFillMail /></a> 
          <a href="https://www.linkedin.com/in/yildiztugba/" target="_blank" ><AiFillLinkedin /></a>
          <a href="https://github.com/yildiztugba"target="_blank" ><AiFillGithub /></a>
        </div>
        </div>
    )

}