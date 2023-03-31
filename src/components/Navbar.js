import React from 'react' 
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

export default function Navbar(){

    const [nav,setNav] = React.useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }

    return(
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <nav className="py-10 mb-12 flex justify-between">
                <ul className=" hidden md:flex ml-auto pr-32 cursor-pointer">
                    <li><a href="/#about" className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:border-b uppercase text-xs"> Home</a></li>
                    <li><a href="/#skills" className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:border-b uppercase text-xs"> My Skills</a></li>
                    <li><a href="/#projects" className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:border-b uppercase text-xs"> Projects</a></li>
                    <li><a className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:border-b uppercase text-xs"> Contact</a></li>
                </ul>
                <div onClick={handleNav} className="md:hidden ">
                    <AiOutlineMenu  size={25}/>
                </div>
            </nav> 
            <div className= {nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div className={nav ? 
                "fixed left-0 top-0 w-[75%] sm:w-[60%] md=w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" :
                "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div className="flex">
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose  size={25}/>
                        </div>

                    </div>
                    <div className="py-10 flex flex-col">
                        <ul className="uppercase ">
                            <li className="py-4 text-sm cursor-pointer"><a > Home</a></li>
                            <li className="py-4 text-sm cursor-pointer"><a > My Skills</a></li>
                            <li className="py-4 text-sm cursor-pointer"><a > Portfolio</a></li>
                            <li className="py-4 text-sm cursor-pointer"><a > Contact</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}