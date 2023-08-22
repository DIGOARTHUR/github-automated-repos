
import React from "react";
import npm_icon from "../../assets/imgs/npm_icon.svg"
import github_icon from "../../assets/imgs/github_icon.svg"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="w-full bg-[#3D3D4D] font-sans pb-10 mt-20">
            <div className="grid grid-cols-2  xl:grid-cols-4 gap-x-12 gap-y-8 max-w-7xl mx-auto p-10">


                <div className="flex flex-col gap-2">
                    <a href="https://digoarthur.vercel.app" className=" text-lg">
                        @digoarthur
                    </a>
                    <div className="font-mono">
                        ©2023
                    </div>
                    <a href="https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository" >
                        Based in:
                        API GitHub
                    </a>
                </div>
                <div className="flex flex-col gap-2">
                    <Link to='/gettingstart' className="font-bold text-xl">Getting Start</Link>
                    <Link to='/gettingstart'>Install package</Link>
                    <Link to='/gettingstart'>Import Package</Link>
                    <Link to='/gettingstart'>Fill in the fields</Link>
                    <Link to='/gettingstart'>Code Example</Link>

                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-xl">Icons</div>
                    <Link to='/stackicons' >Stacks</Link>
                    <Link to="/projecticons">Projects</Link>

                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-xl">More</div>
                    <a href="https://github.com/DIGOARTHUR/github-automated-repos/" className="flex gap-1.5 ">    <img src={github_icon} alt='github_icon' /> <span >GitHub</span></a>

                    <a href="https://www.npmjs.com/package/github-automated-repos" className="flex gap-1.5 ">    <img src={npm_icon} alt='npm_icon' /> <span >NPM</span></a>
                </div>
            </div>
        </footer>
    )
}