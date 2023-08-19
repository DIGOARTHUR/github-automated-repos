

import React from "react";
export default function Header() {



    return (
        <nav className="w-full flex justify-center items-center  font-sans h-16 fixed top-0 left-0 bg-[#3d3d4dab] z-40 ">

            <div className="flex w-full items-center justify-between mx-10 ">
                <div className=" ">
                    <a href="/">
                        <img className="h-14 w-14" src='../../../src/assets/imgs/logoLib.svg' alt='logoLib' />
                    </a>
                </div>

                <div className=" hidden w-full  h-10 px-4">
                    <button className=" bg-[#4F4F60] w-full h-full flex items-center rounded-full p-4">

                        <img className="h-4 w-4 mr-3" src='../../../src/assets/imgs/logoLib.svg' alt='logoLib' />
                        Search

                    </button>
                </div>

                <div className="flex gap-3">
                    <a href="https://www.npmjs.com/package/github-automated-repos">
                        <img className="h-5 w-5" src='../../../src/assets/imgs/npm_icon.svg' alt='npm_icon' />
                    </a>
                    <a href="https://github.com/DIGOARTHUR/github-automated-repos/">
                        <img className="h-5 w-5" src='../../../src/assets/imgs/github_icon.svg' alt='github_icon' />
                    </a>
                </div>
            </div>

        </nav >
    )
}