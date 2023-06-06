import React from 'react' 
const htmlImage = require('./html-5.png');
const javascriptImage = require('./javascript.png');
const cssImage = require('./css-3.png');
const reactImage = require('./react.png')
const sassImage = require('./sass.png')
const nodejsImage = require('./nodejs.png')
const bootstrapImage = require('./bootstrap.png')
const figmaImage = require('./figma.png')
export default function Skills (){
    return(

    <div id="skills" className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className=" tracking-widest uppercase text-5xl py-2 text-teal-600 font-medium">Skills</p>
            <h2 className="py-4 text-lg uppercase font-bold">What I can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/*Skill1*/}
                    <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={reactImage}/>
                            </div>
                            <h1>REACT</h1>
                        </div>
                    </div>
                    {/*Skill2*/}    
                    <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={javascriptImage}/>
                            </div>
                            <h1>JAVASCRIPT</h1>
                        </div>
                    </div>
                    {/*Skill3*/}
                    <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={htmlImage}/>
                            </div>
                            <h1>HTML</h1>
                        </div>
                    </div>
                    {/*Skill4*/}
                    <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={cssImage}/>
                            </div>
                            <h1>CSS</h1>
                        </div>
                    </div>
                    {/*Skill5*/}
                    <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={nodejsImage}/>
                            </div>
                            <h1>NODE.JS</h1>
                        </div>
                    </div>
                    {/*Skill6*/}
                    <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={sassImage}/>
                            </div>
                            <h1>SASS</h1>
                        </div>
                    </div>
                    {/*Skill7*/}
                    <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={bootstrapImage}/>
                            </div>
                            <h1>BOOTSTRAP</h1>
                        </div>
                    </div>
                    {/*Skill8*/}
                    <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={figmaImage}/>
                            </div>
                            <h1>FIGMA</h1>
                        </div>
                    </div>
        </div> 
        </div>
        </div>
    )
}