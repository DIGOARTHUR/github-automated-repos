'use client'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export default function GettingStart() {
    function copy(text: string) {
        navigator.clipboard.writeText(text)
    }
    return (
        <div>
            <Header />
            <main className="">
                <Sidebar />

                <article className=" h-screen pt-4  mt-16 ml-[340px] px-6 pr-56 max-md:flex flex-cli ">
                    <span onClick={() => copy('someText')}>
                        asdasd
                    </span>
                    <span>GettingStart &#62;</span>
                    <h1 className="text-4xl mt-8  mb-2 max-md:text-4xl">Quick Start</h1>
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
                    <div>
                        <h2 className="text-3xl">Install Package</h2>
                        <div className="bg-[#4e5668fd] p-10 my-8 rounded-3xl">
                            <p>
                                npm install github-automated-repos
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Import Package</h2>
                        <div className="bg-[#4e5668fd] p-10 my-8 rounded-3xl">
                            <p>
                                import  &lbrace; useGithubAutomatedRepos, ProjectIcon, StackIcon, IGithubRepos  &rbrace;
                                from 'github-automated-repos';
                            </p>
                        </div>
                        <div >
                            <h2 className="text-2xl mb-8">The package imports four elements:</h2>
                            <div className="ml-8">
                           <span className="text-[#00979C] text-xl">&lt;ProjectIcon/&gt;</span>  component that renders the icons of the projects that come from data returned from the dataGithubRepos function as the Topics property. Check the Project Icons tab!
                            <br/>
                            <br/>
                            <span className="text-[#00979C] text-xl"> &lt;StackIcon/&gt;</span> component that renders the icons of the stacks that come from data returned from the dataGithubRepos function as the Topics property. Check the Stack Icons tab!
                            <br/>
                            <br/>
                            <span className="text-[#00979C] text-xl"> IGithubRepos</span> interface for the application in Typescript. Used to type the useState that will receive the array.
                            <br/>
                            <br/>
                            <span className="text-[#00979C] text-xl"> useGithubAutomatedRepos ( )</span> hook responsible for automating the repositories. It returns a function called dataGithubRepos, which takes two parameters: data (data that comes from the GitHub API) and the keyword (the latter responsible for showing the project on your website from the moment it is declared in the Topics field of the your Github repository). The dataGithubRepos returns, so optimized, an array of objects containing 6 properties: id, html_url, homepage, topics, name and description.
                            <div className="bg-[#4e5668fd] p-10 my-8 rounded-3xl">
                            <p>
                                import  &lbrace; useGithubAutomatedRepos, ProjectIcon, StackIcon, IGithubRepos  &rbrace;
                                from 'github-automated-repos';
                            </p>
                        </div>
                            </div>
                            
                        </div>

                    </div>
                    <Footer />

                </article>

            </main>





        </div>
    )
}