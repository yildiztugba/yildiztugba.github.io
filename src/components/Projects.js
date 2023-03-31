import React from "react"
const project1 =require('./web2.png')
export default function Projects(){
    return(
        <div id="projects" className="w-full"> 
        <div className="max-w-[1240px] mx-auto px-2 py-10">
            <p className="tracking-widest uppercase text-5xl py-2 text-teal-600 font-medium"> Projects</p>
            <h2 className="py-4 text-lg uppercase font-bold" >What I've Built</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project1}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Game:Tenzies</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project1}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Game:Tenzies</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project1}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Game:Tenzies</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project1}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Game:Tenzies</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project1}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Game:Tenzies</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img className="rounded-xl group-hover:opacity-10" src={project1}/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl text-white tracking-wider text-center">Game:Tenzies</h3>
                        <p className="pb-4 pt-2 text-white text-center">React Js</p>
                        <a href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"> More Info</p></a>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}