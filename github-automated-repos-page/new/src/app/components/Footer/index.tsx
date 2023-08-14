
import Image from "next/image";
import npm_icon from "../../../../public/imgs/npm_icon.svg";
import github_icon from "../../../../public/imgs/github_icon.svg";
export default function Footer() {
    return (
        <footer className="w-full bg-[#3D3D4D] font-sans pb-10">
            <div className="grid grid-cols-2  xl:grid-cols-4 gap-x-12 gap-y-8 max-w-7xl mx-auto p-10">


                <div className="flex flex-col gap-2">
                    <div className=" text-lg">
                        @digoarthur
                    </div>
                    <div className="font-mono">
                        ©2023
                    </div>
                    <div>
                    Based in:
                    API GitHub
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div  className="font-bold text-xl">Getting Start</div>
                    <div>Install package</div>
                    <div>Import Package</div>
                    <div>Fill in the fields</div>
                    <div>Code Example</div>

                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-xl">Icons</div>
                    <div>Stacks</div>
                    <div>Projects</div>

                </div>
                <div className="flex flex-col gap-2">
                   <div className="font-bold text-xl">More</div>
                   <div className="flex gap-1.5 ">    <Image src={github_icon} alt='npm_icon' /> <span >GitHub</span></div>
                 
                   <div className="flex gap-1.5 ">    <Image src={npm_icon} alt='npm_icon' /> <span >NPM</span></div>
                </div>
            </div>
        </footer>
    )
}