'use client'

import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import fill_website_Img from "../../../public/imgs/fill_website.png";
import fill_topics_Img from "../../../public/imgs/fill_topics.png";
import fill_repositoryName_Img from "../../../public/imgs/fill_repositoryName.png";
import fill_Description_Img from "../../../public/imgs/fill_description.png";
import javascript_logo from "../../../public/imgs/javascript_logo.svg";
import typescript_logo from "../../../public/imgs/typescript_logo.svg";
export default function GettingStart() {




    function copy(text: string) {
        navigator.clipboard.writeText(text)
    }
    return (
        <div>
            <Header />
            <main id="quickStart" className="">
                <Sidebar />

                <article className=" h-full  pt-8  mt-16 ml-[340px] px-6 pr-56  max-lg:ml-0 max-lg:pr-6">


                    <span >GettingStart &#62;</span>

                    <h1 className="text-4xl mt-8  mb-2 max-md:text-4xl">Quick Start</h1>
                    <span onClick={() => copy('someText')}>
                        COPIED TEXT
                    </span>
                    <hr />
                    <p className="text-xl mt-8">This library automates the view your GitHub projects on your website in one place. But how? Make the code configuration only once in your application with github-automated-repos, and manage the view of your projects on GitHub in the Topics field. </p>
                    <div className="bg-[#4e5668fd] p-10 my-8 rounded-3xl">
                        <h3 className="text-2xl">Why use?</h3>
                        <p>
                            <ul className="list-disc">
                                <li>Control the visualization of your projects in one place.</li>
                                <li>You won't need to access code to add your projects.</li>
                                <li>Customize your cards with icons.</li>
                            </ul>

                        </p>
                    </div>
                    <div  >
                        <div id="installPackage" className="h-16" />

                        <h2 className="text-3xl">Install Package</h2>
                        <div className="bg-[#4e5668fd] p-10 my-8 rounded-3xl">
                            <p >
                                npm install github-automated-repos
                            </p>
                        </div>
                    </div>
                    <div  >
                        <div id="importPackage" className="h-16" />

                        <h2 className="text-3xl">Import Package</h2>
                        <div className="bg-[#4e5668fd] p-10 my-8 rounded-3xl">
                            <p>
                                import  &#123; useGithubAutomatedRepos, ProjectIcon, StackIcon, IGithubRepos  &#125;
                                from 'github-automated-repos';
                            </p>
                        </div>
                        <div  >

                            <h2 className="text-2xl mb-8">The package imports four elements:</h2>
                            <div className="ml-8">
                                <span className="text-[#00979C] text-xl">&lt;ProjectIcon/&gt;</span>  component that renders the icons of the projects that come from data returned from the dataGithubRepos function as the Topics property. Check the Project Icons tab!
                                <br />
                                <br />
                                <span className="text-[#00979C] text-xl"> &lt;StackIcon/&gt;</span> component that renders the icons of the stacks that come from data returned from the dataGithubRepos function as the Topics property. Check the Stack Icons tab!
                                <br />
                                <br />
                                <span className="text-[#00979C] text-xl"> IGithubRepos</span> interface for the application in Typescript. Used to type the useState that will receive the array.
                                <br />
                                <br />
                                <span className="text-[#00979C] text-xl"> useGithubAutomatedRepos ( )</span> hook responsible for automating the repositories. It returns a function called dataGithubRepos, which takes two parameters: data (data that comes from the GitHub API) and the keyword (the latter responsible for showing the project on your website from the moment it is declared in the Topics field of the your Github repository). The dataGithubRepos returns, so optimized, an array of objects containing 6 properties: id, html_url, homepage, topics, name and description.
                                <div className="bg-[#4e5668fd] p-10 my-8 rounded-3xl">
                                    <p >
                                        const &#123; dataReposGithub &#125; = useGithubAutomatedRepos()
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div >
                        <div id="fillInTheFields" className="h-16" />
                        <h2 className="text-3xl  mb-8">Fill in the fields</h2>
                        <div className="ml-8">

                            <span className="text-[#00979C] text-xl"> id:</span> repository identification number. used as parameter in the key tag. This field does not need to be filled in.
                            <br />
                            <br />
                            <span className="text-[#00979C] text-xl"> html_url</span>  repository link. Used as the link of access. This field does not need to be filled in.
                            <br />
                            <br />
                            <span className="text-[#00979C] text-xl"> homepage:</span>  it's the access link to the built page, page deploy.  About / Website of your GitHub.
                            <br />
                            <br />
                            <Image className="" src={fill_website_Img} alt='logoLib' />
                            <br />
                            <br />
                            <span className="text-[#00979C] text-xl"> topics:</span> array that brings information about the icons in Project and Stack. Used in both ProjectIcon and StackIcon components. It is in this field that is passed the key configured in the hook. Refers to the field About / Topics of your GitHub.
                            <br />
                            <br />
                            <Image className="" src={fill_topics_Img} alt='logoLib' />
                            <br />
                            <br />
                            <span className="text-[#00979C] text-xl"> name: </span> This is the name of the repository. Refers to the field  Settings / General / Repository name of your GitHub.
                            <br />
                            <br />
                            <Image className="" src={fill_repositoryName_Img} alt='logoLib' />
                            <br />
                            <br />
                            <span className="text-[#00979C] text-xl"> description:</span>  This is the description given to your repository. Refers to the About /Description field of your GitHub.
                            <br />
                            <br />
                            <Image className="" src={fill_Description_Img} alt='logoLib' />
                        </div>


                    </div>

                    <div  >
                        <div id="codeExample" className="h-12" />
                        <h2 className="text-3xl mt-8">Code Example</h2>
                        <div className="bg-[#4e5668fd] p-10 my-8 rounded-3xl">
                            <p>

                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-[#f3da35a8] w-36 h-12 border-solid border-2 border-white rounded-lg flex justify-center items-center gap-2">Javascript  <Image className="" src={javascript_logo} alt='logoLib' /></button>
                            <button className="bg-[#3179c64b] w-36 h-12 border-solid border-2 border-white rounded-lg flex justify-center items-center gap-2">Typescript <Image className="" src={typescript_logo} alt='logoLib' /></button>
                        </div>
                        <Image className="" src={fill_Description_Img} alt='logoLib' />
                    </div>
                    <Footer />

                </article>

            </main>





        </div>
    )
}