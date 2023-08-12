
import Image from "next/image";
import logoLib from "../../../../public/logoLib.svg";
export default function Sidebar() {
    return (
        <aside className="  fixed min-w-[340px] h-full ">

            <nav className="pt-4 pr-5 p-10 h-full">
                <ul>
                    <h3>github-automated-repos@1.0.25</h3>
                    <li>
                        <a className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px]">
                            Quick Start
                            <Image className="h-4 w-4 mr-3" src={logoLib} alt='logoLib' />

                        </a>
                        <ul>
                            <li>
                                <a className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Install Package


                                </a>
                            </li>
                            <li>
                                <a className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Import package


                                </a>
                            </li>
                            <li>
                                <a className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Getting Start


                                </a>
                            </li>
                            <li>
                                <a className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Fill in the fields


                                </a>
                            </li>
                            <li>
                                <a className="flex text-xs justify-between py-2 pr-2 pl-8 rounded-l-2xl items-center   h-[46px]">
                                    Code Example


                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt-4 mb-2 ms-5 border-b border-border"></li>
                    <li>
                    <a className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px]">
                            Stack Icons
                            <Image className="h-4 w-4 mr-3" src={logoLib} alt='logoLib' />

                        </a>
                    </li>
                    <li>
                    <a className="flex justify-between py-2 pr-2 pl-5 rounded-l-2xl items-center   h-[46px]">
                            Project Icons
                            <Image className="h-4 w-4 mr-3" src={logoLib} alt='logoLib' />

                        </a>
                    </li>
                </ul>

            </nav>
        </aside>
    )
}