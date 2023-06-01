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
        <div id="projects" className="w-full p-16"> 
        <div className="max-w-[1240px] mx-auto px-2 py-10">
            <p className="tracking-widest uppercase text-5xl py-2 text-teal-600 font-medium"> Projects</p>
            <h2 className="py-4 text-lg uppercase font-bold" >What I've Built</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project1}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Game:Tenzies</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="https://github.com/yildiztugba/tenzies"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project2}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Meme Generator</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="https://github.com/yildiztugba/Meme-generator"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project3}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Markdown App</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="https://github.com/yildiztugba/markdown-notes-app"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project4}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Boxes Challange</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="https://github.com/yildiztugba/boxes-challange-with-react"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project5}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Travel Project</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="https://yildiztugba.github.io/Travel-Project-with-React/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project6}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Bootstrap Project</h3>
                        <p className="pb-4 pt-2 text-white text-center">Html, Bootstrap</p>
                        <a href="https://yildiztugba.github.io/Bootstrap5/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project7}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Final Project: Behelp</h3>
                        <p className="pb-4 pt-2 text-white text-center">Html,Css, Javascript, Sass</p>
                        <a href="https://github.com/yildiztugba/BeHelp"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project8}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Speed Typing Game</h3>
                        <p className="pb-4 pt-2 text-white text-center">Html,Css, Javascript, Advanced React</p>
                        <a href="https://speedtypinggamewithreact.netlify.app"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project9}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Capstone Project</h3>
                        <p className="pb-4 pt-2 text-white text-center">Html,Css, Javascript, Advanced React</p>
                        <a href="https://github.com/yildiztugba/capstone-project"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}