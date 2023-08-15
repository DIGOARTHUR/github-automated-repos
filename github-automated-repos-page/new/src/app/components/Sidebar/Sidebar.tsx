'use client'
import Image from "next/image";
import logoLib from "../../../../public/logoLib.svg";
import { useState } from "react";
import Link from "next/link";
import useCollapse from 'react-collapsed';
import { MdOutlineNavigateNext} from 'react-icons/md';
export default function Sidebar() {
    let url = window.location.pathname;
    let parts = url.split('/');
    let lastPartUrl = parts.pop() || parts.pop();
    
   

    const [scroll, setScroll] = useState<number>(0);
    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent)
        console.log(ScrollPercent)
    };
    window.addEventListener("scroll", onScroll);
    return (
        <aside className="  fixed min-w-[340px] h-full max-lg:hidden w-0">

            <nav className="pt-4 pr-5 p-10 h-full">
                <div style={{ transition: 'width 0.5s linear 0s', width: `${scroll}` }} className='bg-red-700 h-4   ' />
                <ul>
                    <h3>github-automated-repos@1.0.25</h3>
                    <li>
                        <a href="/gettingstart" style={scroll < 8 && lastPartUrl!='stackicon' && lastPartUrl!='projecticon' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px]">
                            Quick Start
                            < MdOutlineNavigateNext className='h-5 w-5' />

                        </a>
                        <ul>
                            <li>
                                <a href="#installPackage" style={scroll >= 8 && scroll < 13 && lastPartUrl!='stackicon' && lastPartUrl!='projecticon' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className=" flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Install Package


                                </a>
                            </li>
                            <li>
                                <a href="#importPackage" style={scroll >= 13 && scroll < 29 && lastPartUrl!='stackicon' && lastPartUrl!='projecticon' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Import package


                                </a>
                            </li>

                            <li>
                                <a href="#fillInTheFields" style={scroll >= 29 && scroll < 88 && lastPartUrl!='stackicon' && lastPartUrl!='projecticon' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Fill in the fields


                                </a>
                            </li>
                            <li>
                                <a href="#codeExample" style={scroll >= 88 && lastPartUrl!='stackicon' && lastPartUrl!='projecticon' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Code Example


                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt-4 mb-2 ms-5 border-b border-border"></li>
                    <li>
                        <a style={lastPartUrl=='stackicon' ? { color: '#149ECA', backgroundColor: '#00979c1a' } : {}} href="/stackicon" className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px]">
                            Stack Icons
                            < MdOutlineNavigateNext className='h-5 w-5' />

                        </a >
                    </li>
                    <li>
                        <a className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px]">
                            Project Icons
                            < MdOutlineNavigateNext className='h-5 w-5' />

                        </a>
                    </li>
                </ul>

            </nav>
        </aside>
    )
}