import Link from "next/link";
import Image from "next/image";
import logoLib from "../../../../public/logoLib.svg";
import npm_icon from "../../../../public/imgs/npm_icon.svg";
import github_icon from "../../../../public/imgs/github_icon.svg";

export default function Header() {



    return (
        <nav className="w-full flex justify-center items-center  font-sans h-16 fixed top-0 left-0 bg-[#3d3d4dab] z-40 ">

            <div className="flex w-full items-center justify-between mx-10 ">
                <div className=" ">
                    <Link href="/gettingstart">
                    <Image className="h-14 w-14" src={logoLib} alt='logoLib' />
                </Link>
            </div>

            <div className=" hidden w-full  h-10 px-4">
                <button className=" bg-[#4F4F60] w-full h-full flex items-center rounded-full p-4">
                    <Image className="h-4 w-4 mr-3" src={logoLib} alt='logoLib' />
                    Search

                </button>
            </div>

            <div className="flex gap-3">
                <Image className="h-5 w-5" src={npm_icon} alt='npm_icon' />
                <Image className="h-5 w-5" src={github_icon} alt='npm_icon' />
            </div>
        </div>

        </nav >
    )
}