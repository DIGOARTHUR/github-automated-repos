

import React, { useState } from "react";
import logoLib from "../../assets/imgs/logoLib.svg"
import npm_icon from "../../assets/imgs/npm_icon.svg"
import github_icon from "../../assets/imgs/github_icon.svg"
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";
import { AiOutlineClose } from "react-icons/ai";
export default function Header() {
    const viewportWidth = window.innerWidth;
    const [isOpenNavbar, setIsOpenNavbar] = useState('');
    function _handleNavbar() {
        setIsOpenNavbar(!isOpenNavbar);
    }

    return (
        <nav className=" w-full flex justify-center items-center  font-sans h-16 fixed top-0 left-0 bg-[#3d3d4dab] z-40 ">

            <div className="flex w-full items-center justify-between mx-10 max-lg:mx-3">

                <div className=" flex items-center gap-2">
                    <a className="lg:hidden" onClick={_handleNavbar}>
                        {isOpenNavbar ? '' : <FaBars size={45} />}
                    </a>
                    <a href="/">
                        <img className="h-14 w-14" src={logoLib} alt='logoLib' />
                    </a>
                </div>

                <div className=" hidden w-full  h-10 px-4">
                    <button className=" bg-[#4F4F60] w-full h-full flex items-center rounded-full p-4">

                        <img className="h-4 w-4 mr-3" src={logoLib} alt='logoLib' />
                        Search

                    </button>
                </div>

                <div className="flex gap-3">
                    <a href="https://www.npmjs.com/package/github-automated-repos">
                        <img className="h-5 w-5" src={npm_icon} alt='npm_icon' />
                    </a>
                    <a href="https://github.com/DIGOARTHUR/github-automated-repos/">
                        <img className="h-5 w-5" src={github_icon} alt='github_icon' />
                    </a>
                </div>
            </div>

            {
                viewportWidth<1024?( <Sidebar isOpen={isOpenNavbar} setIsOpen={_handleNavbar}/>):('')
            }
          
        </nav >
    )
}