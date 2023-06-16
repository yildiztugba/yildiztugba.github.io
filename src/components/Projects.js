import React from "react"
const project1 =require('./project1.png')
const project2 =require('./project2.png')
const project3 =require('./project3.png')
const project4 =require('./project4.png')
const project5 =require('./project5.png')
const project6 =require('./project6.png')
const project7 =require('./project7.png')
const project8 =require('./project8.png')
const project9 =require('./project9.png')
export default function Projects(){
    return(
        <div id="projects" className="w-full"> 
        <div className="max-w-[1240px] mx-auto py-3">
            <p className="tracking-widest uppercase text-5xl py-2 text-center text-teal-600 font-medium"> Projects</p>
            <h2 className="py-4 text-lg uppercase text-center font-bold" >ADVANCED REACT PROJECTS</h2>
            
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project8}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className=" text-xs md:text-2xl text-white font-bold tracking-wider text-center pb-0">Speed Typing Game</h3>
                        <h2 className="text-white hidden text-justify md:block">
                            The aim of the game is to automatically receives focus and let the user start typing right away. Then the time runs out, the textarea is disabled again and it gives us the number of words we are able to type them in given time.This project helped me to practice useEffect hook, useState hook, useRef hook and custom hook.</h2>
                        <p className="pb-1 pt-0 text-xs text-green-300 font-bold text-center hidden md:block"> Advanced React, Javascript, Html,Css</p>
                        <a href="https://github.com/yildiztugba/speed-typing-game" target="_blank"><p className="text-center py-0 m-1 rounded-lg bg-white text-gray-700 font-bold text-xs cursor-pointer md:py-3 md:m-2"> More Info</p></a>
                        <a href="https://speedtypinggamewithreact.netlify.app/" target="_blank" ><p className="text-center py-0 text-xs rounded-lg m-1 bg-white text-gray-700 font-bold text-lg cursor-pointer md:py-3 md:m-2"> Demo</p></a>
                    </div>
                </div>
                
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project9}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className=" text-xs md:text-2xl text-white font-bold tracking-wider text-center pb-0">Capstone Project</h3>
                        <h2 className="text-white hidden text-justify md:block">E-commersite that users choose and order the available images in order to use/print them. Images can be favorited and added to the cart. In the Cart page, users can remove images from the list and order them by paying the total price theoretically</h2>
                        <p className="pb-4 pt-2 text-center text-green-300 font-bold hidden md:block">Advanced React, Javascript, Html,Css</p>
                        <a href="https://github.com/yildiztugba/capstone-project" target="_blank"><p className="text-center py-0 m-1 rounded-lg bg-white text-gray-700 font-bold text-xs cursor-pointer md:py-3 md:m-2">More Info</p></a>
                        <a href="https://capstoneprojectwithadvancedreact.netlify.app/" target="_blank"><p className="text-center py-0 text-xs rounded-lg m-1 bg-white text-gray-700 font-bold text-lg cursor-pointer md:py-3 md:m-2">  Demo</p></a>

                    </div>
                </div>
            <h2 className="py-4 text-lg uppercase text-center font-bold" >FINAL PROJECT FROM HYF COURSE</h2>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project7}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className=" text-xs md:text-2xl text-white font-bold tracking-wider text-center pb-0">Final Project: Behelp</h3>
                        <h2 className="text-white hidden text-justify md:block">The application connects international protection seekers with volunteers and organizations that can help them with adaptation and integration into society. <br/>I took an important part in front-end, deployment  and demo part. </h2>
                        <p className="pb-4 pt-2 text-green-300 font-bold text-center hidden md:block">Vue,Javascript,Html,Css,Nodejs,Sass</p>
                        <a href="https://github.com/yildiztugba/BeHelp" target="_blank"><p className="text-center py-0 m-1 rounded-lg bg-white text-gray-700 font-bold text-xs cursor-pointer md:py-3 md:m-2"> More Info</p></a>
                        <a href="https://behelp.netlify.app/" target="_blank"><p className="text-center py-0 text-xs rounded-lg m-1 bg-white text-gray-700 font-bold text-lg cursor-pointer md:py-3 md:m-2">  Demo</p></a>
                    </div>
                </div>
            <h2 className="py-4 text-lg uppercase text-center font-bold" >OTHER PROJECTS</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project1}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className=" text-xs md:text-2xl text-white font-bold tracking-wider text-center pb-0">Game:Tenzies</h3>
                        <p className="text-white text-sm text-justify hidden lg:block">I developed this project after I completed Section 4 of React course on Scrimba. The idea is to roll ten dice in the same.
                    </p>
                        <p className="pb-4 pt-2 text-green-300 font-bold text-center hidden md:block">React Js</p>
                        <a href="https://github.com/yildiztugba/tenzies" target="_blank"><p className="text-center py-0 m-1 rounded-lg bg-white text-gray-700 font-bold text-xs cursor-pointer md:py-3 md:m-2">More Info</p></a>
                        <a href="https://yildiztugba.github.io/tenzies/" target="_blank"><p className="text-center py-0 text-xs rounded-lg m-1 bg-white text-gray-700 font-bold text-lg cursor-pointer md:py-3 md:m-2">  Demo</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project2}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className=" text-xs md:text-2xl text-white font-bold tracking-wider text-center pb-0">Meme Generator</h3>
                        <p className="text-white text-sm hidden  text-justify lg:block">I developed this project after I completed Section 3 of React course on Scrimba. The aim is to create own meme with fun text and random images.</p>
                        <p className="pb-4 pt-2 text-green-300 font-bold text-center pb-4  font-bold hidden md:block">React Js</p>
                        <a href="https://github.com/yildiztugba/Meme-generator" target="_blank"><p className="text-center py-0 m-1 rounded-lg bg-white text-gray-700 font-bold text-xs cursor-pointer md:py-3 md:m-2">More Info</p></a>
                        <a href="https://yildiztugba.github.io/Meme-generator/" target="_blank"><p className="text-center py-0 text-xs rounded-lg m-1 bg-white text-gray-700 font-bold text-lg cursor-pointer md:py-3 md:m-2">  Demo</p></a>

                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project3}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className=" text-xs md:text-2xl text-white font-bold tracking-wider text-center pb-0">Markdown App</h3>
                        <p  className="text-white hidden  text-justify lg:block text-sm">You can create a new note by clicking the button.
                        <br/><b>Updated futures:</b>
                        <br/>- Sync notes with localStorage
                        <br/>- Add note summary titles
                        <br/>- Move modified notes to the top of the list
                        <br/>- Delete notes.</p>
                        <p className="pb-4 pt-2 text-green-300 font-bold text-center hidden md:block">React Js</p>
                        <a href="https://github.com/yildiztugba/markdown-notes-app" target="_blank"><p className="text-center py-0 m-1 rounded-lg bg-white text-gray-700 font-bold text-xs cursor-pointer md:py-3 md:m-2"> More Info</p></a>
                    <a href="https://yildiztugba.github.io/markdown-notes-app/" target="_blank"><p className="text-center py-0 text-xs rounded-lg m-1 bg-white text-gray-700 font-bold text-lg cursor-pointer md:py-3 md:m-2">  Demo</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project4}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className=" text-xs md:text-2xl text-white font-bold tracking-wider text-center pb-0">Boxes Challange</h3>
                        <p className="text-white text-sm text-justify hidden lg:block">There are six boxes with different background colors (white/black) The aim is to be able to change color of each box by clicking over them.</p>
                        <p className="pb-4 pt-2 text-green-300 font-bold text-center hidden md:block">React Js</p>
                        <a href="https://github.com/yildiztugba/boxes-challange-with-react" target="_blank"><p className="text-center py-0 m-1 rounded-lg bg-white text-gray-700 font-bold text-xs cursor-pointer md:py-3 md:m-2">More Info</p></a>
                        <a href="https://yildiztugba.github.io/boxes-challange-with-react/" target="_blank"><p className="text-center py-0 text-xs rounded-lg m-1 bg-white text-gray-700 font-bold text-lg cursor-pointer md:py-3 md:m-2">  Demo</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project5}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className=" text-xs md:text-2xl text-white font-bold tracking-wider text-center pb-0">Travel Project</h3>
                        <p  className="text-white hidden text-justify lg:block text-sm">Simple webpage that displays digital cards. Also, this is my first solo react project. It was very useful project that taught me props and component.</p>
                        <p className="pb-4 pt-2 text-green-300 font-bold text-center hidden md:block">React Js</p>
                        <a href="https://github.com/yildiztugba/Travel-Project-with-React" target="_blank"><p className="text-center py-0 m-1 rounded-lg bg-white text-gray-700 font-bold text-xs cursor-pointer md:py-3 md:m-2"> More Info</p></a>
                        <a href="https://yildiztugba.github.io/Travel-Project-with-React/" target="_blank"><p className="text-center py-0 text-xs rounded-lg m-1 bg-white text-gray-700 font-bold text-lg cursor-pointer md:py-3 md:m-2">  Demo</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project6}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className=" text-xs md:text-2xl text-white font-bold tracking-wider text-center pb-0">Bootstrap Project</h3>
                        <p className="text-white hidden  text-justify lg:block text-sm">This is a website project using Bootstrap 5 following the tutorial in Traversy Media.</p>
                        <p className="pb-4 pt-2 text-green-300 font-bold text-center hidden md:block">Html, Bootstrap</p>
                        <a href="https://github.com/yildiztugba/Bootstrap5" target="_blank"><p className="text-center py-0 m-1 rounded-lg bg-white text-gray-700 font-bold text-xs cursor-pointer md:py-3 md:m-2"> More Info</p></a>
                        <a href="https://yildiztugba.github.io/Bootstrap5/" target="_blank"><p className="text-center py-0 text-xs rounded-lg m-1 bg-white text-gray-700 font-bold text-lg cursor-pointer md:py-3 md:m-2">  Demo</p></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}