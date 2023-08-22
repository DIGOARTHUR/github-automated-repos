import Footer from "../components/Footer";
import Header from "../components/Header";
import {Link} from "react-router-dom"
import reactjs_logo from "../assets/imgs/reactjs_logo.svg"
import vitejs_logo from "../assets/imgs/vitejs_logo.svg"
import nextjs_logo from "../assets/imgs/nextjs_logo.svg"
import logoLib from "../assets/imgs/logoLib.svg"
import { useEffect } from "react";
export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    
    
      }, []);
    return (
        <main className="flex  min-h-screen flex-col items-center m-auto ">
            <Header />
            <div className="max-w-[1200px] min-h-[500px]  grid grid-cols-[1fr_2fr] mt-16 px-6 max-md:flex flex-col ">

                <div className="grid grid-rows-[2fr_1fr] justify-center">
                    <img src={logoLib} alt='logoLib' />
                    <div className="flex justify-center items-start max-lg:mt-3">
                        <img src={reactjs_logo} alt='reactjs_logo' />
                        <img src={vitejs_logo} alt='vitejs_logo' />
                        <img src={nextjs_logo} alt='nextjs_logo' />
                    </div>
                </div>
                <div className=" grid grid-rows-[2fr_1fr] max-sm:grid-rows-1 ">
                    <div className=" flex-col m-auto max-sm:mb-8">
                        <h1 className="text-6xl text-center mb-8 max-md:text-4xl">GitHub Automated Repos</h1>
                        <span className="  text-2xl flex text-center max-md:text-xl">The library that gives you the power to manage the
                            view of your projects on your website in one place!
                        </span>
                    </div>
                    <div className="flex justify-around items-start max-sm:flex-col max-sm:mb-12 gap-5">
                        <Link to="/gettingstart" className="h-[70px] w-[30%] border-2 rounded-full bg-[#737384] flex items-center justify-center max-sm:w-full" >Getting Start</Link>
                        <Link to="/stackicons" className="h-[70px] w-[30%] border-2 rounded-full flex items-center justify-center max-sm:w-full">Icon Stacks</Link>
                        <Link to="/projecticons" className="h-[70px] w-[30%] border-2 rounded-full  flex items-center justify-center max-sm:w-full">Icon Projects</Link>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#31313E] to-[#3e3e4b] py-14  flex justify-center items-center w-full  max-md: px-6">
                <div className="  max-w-[1200px]  ">
                    <h1 className="text-5xl text-center mb-6 ">Control your projects</h1>
                    <div className="flex justify-center mb-8">
                        <span className="  text-xl self-auto">Decide which project will be viewed on your personal page from Link keyword determined by you.</span>
                    </div>
                    <img src='https://user-images.githubusercontent.com/59892368/214140611-910cd26b-280d-48f1-8652-65034f04a4f8.gif'></img>
                </div>
            </div>
            <div className="bg-[#3D3D4D] py-14  flex justify-center items-center max-md: px-6">
                <div className="  max-w-[1200px]  ">

                    <h1 className="text-5xl text-center mb-6 ">Customize and represent through icons.</h1>
                    <div className="flex justify-center mb-8">
                        <span className="  text-xl self-auto">Customize, show what your project is about and what technologies you used.</span>
                    </div>
                    <img src='https://user-images.githubusercontent.com/59892368/214817180-519e403f-0fa4-4bfd-a6cc-5eb63d3360e8.gif'></img>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#31313E] to-[#3e3e4b] py-14  flex justify-center items-center w-full max-md: px-6">
                <div className="  max-w-[1200px]  ">
                    <h1 className="text-5xl text-center mb-6 ">In one place</h1>
                    <div className="flex justify-center mb-8">
                        <span className="  text-xl self-auto">Manage everything in the same place where you keep your project code. In just one field</span>
                    </div>
                    <img src='https://user-images.githubusercontent.com/59892368/214930109-119c4b38-9862-4a3d-a130-2dfad5c4bcb6.gif'></img>
                </div>
            </div>
            <Footer />
        </main>
    )
}

