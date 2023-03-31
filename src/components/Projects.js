import React from "react"
const project1 =require('./web2.png')
export default function Projects(){
    return(
        <div className="w-full"> 
        <div className="max-w-[1240px] mx-auto px-2 py-10">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]"> Projects</p>
            <h2 className="py-4 text-lg uppercase font-bold" >What I've Built</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img src={project1}/>
                </div>
            </div>
            </div>
        </div>
    )
}