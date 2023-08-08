
import Image from "next/image";
import logoLib from "../../public/logoLib.svg";
import nextjs_logo from "../../public/nextjs_logo.svg";
import reactjs_logo from "../../public/reactjs_logo.svg";
import vitejs_logo from "../../public/vitejs_logo.svg";
export default function Home() {
  return (

    <main className="flex  min-h-screen flex-col items-center m-auto">

      <div className=" max-w-[1200px] min-h-[500px]  grid grid-cols-[1fr_2fr]  ">

        <div className="grid grid-rows-[2fr_1fr]">
          <Image src={logoLib} alt='a' />
          <div className="flex justify-center items-start">
            <Image src={reactjs_logo} alt='reactjs_logo' />
            <Image src={vitejs_logo} alt='vitejs_logo' />
            <Image src={nextjs_logo} alt='nextjs_logo' />
          </div>
        </div>
        <div className=" grid grid-rows-[2fr_1fr] ">
          <div className=" flex-col m-auto ">
            <h1 className="text-6xl text-center mb-8">GitHub Automated Repos</h1>
            <span className="  text-2xl flex text-center">The library that gives you the power to manage the
              view of your projects on your website in one place!</span>
          </div>
          <div className="flex justify-around items-start">
            <button className="h-[70px] w-[30%] border-2 rounded-full bg-[#737384]">Getting Start</button>
            <button className="h-[70px] w-[30%] border-2 rounded-full">Icon Stacks</button>
            <button className="h-[70px] w-[30%] border-2 rounded-full">Icon Projects</button>
          </div>
        </div>
      </div>
      <div className="bg-[#31313E] min-h-[850px] w-screen flex justify-center items-center">
        <div className="  max-w-[1200px]  ">
          <h1 className="text-6xl text-center mb-6 ">Control your projects</h1>
          <div className="flex justify-center mb-8">
            <span className="  text-xl self-auto">Decide which project will be viewed on your personal page from a keyword determined by you.</span>
          </div>
          <img src='https://user-images.githubusercontent.com/59892368/214140611-910cd26b-280d-48f1-8652-65034f04a4f8.gif'></img>
        </div>
      </div>

    </main>
  )
}
