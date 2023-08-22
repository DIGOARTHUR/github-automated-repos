

import React,{ useEffect, useState } from "react";

import {Link} from "react-router-dom"
import { MdOutlineNavigateNext} from 'react-icons/md';
import { AiOutlineClose } from "react-icons/ai";



export default function Sidebar({isOpen,setIsOpen}) {
    let url = window.location.pathname;
    let parts = url.split('/');
    let lastPartUrl = parts.pop() || parts.pop();
  
  
 

  

    const [scroll, setScroll] = useState(0);
    const onScroll = () => {
        
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent)
        console.log(ScrollPercent)
    };

 
        window.addEventListener("scroll", onScroll)
 

      
    return (
        <aside className={`fixed min-w-[340px] h-full transition-all ease-in-out delay-[0.1s] ${isOpen? ' max-lg:absolute w-screen ' : ' max-lg:static max-lg:hidden'}`}>

            <nav className="pt-4 pr-5 p-10 h-full max-lg:hidden">
               
                <ul>
                    <h3>github-automated-repos@1.0.25</h3>
                    <li>
                        <Link to="/gettingstart" style={scroll < 8 && lastPartUrl!='stackicons' && lastPartUrl!='projecticons' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px]">
                            Quick Start
                            < MdOutlineNavigateNext className='h-5 w-5' />

                        </Link>
                        <ul className={` ${lastPartUrl=='gettingstart' ? 'visible' : 'hidden'} transition-transform ease-in delay-300 duration-300`}>
                            <li>
                                <a href="#installPackage" style={scroll >= 8 && scroll < 13 && lastPartUrl!='iconstack' && lastPartUrl!='iconsproject' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className=" flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Install Package


                                </a>
                            </li>
                            <li>
                                <a href="#importPackage" style={scroll >= 13 && scroll < 25 && lastPartUrl!='iconstack' && lastPartUrl!='iconsproject' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Import package


                                </a>
                            </li>

                            <li>
                                <a href="#fillInTheFields" style={scroll >= 25 && scroll < 77 && lastPartUrl!='iconstack' && lastPartUrl!='iconsproject' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Fill in the fields


                                </a>
                            </li>
                            <li>
                                <a href="#codeExample" style={scroll >= 77 && lastPartUrl!='iconstack' && lastPartUrl!='iconsproject' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Code Example


                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt-4 mb-2 ms-5 border-b border-border"></li>
                    <li>
                        <Link style={lastPartUrl=='stackicons' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} to="/stackicons" className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px]">
                            Stack Icons
                            < MdOutlineNavigateNext className='h-5 w-5' />

                        </Link >
                    </li>
                    <li>
                        <Link style={lastPartUrl=='projecticons' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} to="/projecticons" className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px]">
                            Project Icons
                            < MdOutlineNavigateNext className='h-5 w-5' />

                        </Link>
                    </li>
                </ul>

            </nav>

            <nav className={`absolute z-20 flex flex-col h-screen w-full bg-[#3D3D4D] gap-24 right-[-100%] transition-all ease-in-out delay-[0.1s] ${isOpen? 'right-[0]' : 'lg:hidden'}`}>
            <div className=" flex  justify-end min-h-[96px] px-5 items-center ">
                    <a onClick={setIsOpen}>
                        <AiOutlineClose className={isOpen ? '' : ''} size={50} />
                    </a>
                </div>
                <ul>
                    
                    <li>
                        <Link to="/gettingstart" style={scroll < 8 && lastPartUrl!='stackicons' && lastPartUrl!='projecticons' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px] max-lg:text-2xl">
                            Quick Start
                            < MdOutlineNavigateNext className='h-5 w-5 max-lg:h-10 w-10' />

                        </Link>
                   
                    </li>
                    <li className="mt-4 mb-2 ms-5 border-b border-border"></li>
                    <li>
                        <Link style={lastPartUrl=='stackicons' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} to="/stackicons" className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px] max-lg:text-2xl">
                            Stack Icons
                            < MdOutlineNavigateNext className='h-5 w-5 max-lg:h-10 w-10' />

                        </Link >
                    </li>
                    <li>
                        <Link style={lastPartUrl=='projecticons' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} to="/projecticons" className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px] max-lg:text-2xl">
                            Project Icons
                            < MdOutlineNavigateNext className='h-5 w-5 max-lg:h-10 w-10' />

                        </Link>
                    </li>
                </ul>

            </nav>
            
        </aside>
    )
}