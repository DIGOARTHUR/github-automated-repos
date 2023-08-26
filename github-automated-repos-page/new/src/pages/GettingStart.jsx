import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Highlighter } from 'rc-highlight';

import fill_description from "../assets/imgs/fill_description.png"
import fill_repositoryName from "../assets/imgs/fill_repositoryName.png"
import fill_topics from "../assets/imgs/fill_topics.png"
import fill_homepage from "../assets/imgs/fill_homepage.png"
import typescript_logo from "../assets/imgs/typescript_logo.svg"
import javascript_logo from "../assets/imgs/javascript_logo.svg"
const highlighterStyle = {
  paddingLeft: '5px',

  backgroundColor: 'rgb(40, 44, 52)',
};
const highlighterStyleImport = {
  paddingLeft: '5px',

  fontSize: '17px',
  backgroundColor: 'rgb(40, 44, 52)',
};
const packageInstall_Yarn = `
    yarn add github-automated-repos
`;

const packageInstall_NPM = `
    npm install github-automated-repos
`;

const importPackage = `
    import { useGithubAutomatedRepos, ProjectIcon, StackIcon } from 'github-automated-repos/index';
`;


export default function GettingStart() {
  const [changeCodeExample, setChangeCodeExample] = useState('javascript');
  const [changeInstallPackage, setChangeInstallPackage] = useState('npm');

  useEffect(() => {
    window.scrollTo(0, 0);


  }, []);

  return (
    <div>
      <Header />
      <main id="quickStart" className="">
        <Sidebar />

        <article className=" h-full  pt-8  mt-16 ml-[340px] px-6 pr-56  max-lg:ml-0 max-lg:pr-6">


          <span >GettingStart &#62;</span>

          <h1 className="text-4xl mt-8  mb-2 max-md:text-4xl">Quick Start</h1>

          <hr />
          <p className="text-xl mt-8">This library automates the view your GitHub projects on your website in one place. But how? Make the code configuration only once in your application with github-automated-repos, and manage the view of your projects on GitHub in the Topics field. </p>
          <div className="bg-[#4e5668fd] p-10 my-8 rounded-3xl">
            <h3 className="text-2xl mb-2">Why use?</h3>
            <p>
              <ul className="list-disc">
                <li>Control the visualization of your projects in one place.</li>
                <li>You won't need to access code to add your projects.</li>
                <li>More: customize your cards with icons.</li>
              </ul>

            </p>
          </div>
          <div  >
            <div id="installPackage" className="h-16" />

            <h2 className="text-3xl mb-8">Install Package</h2>

            <div className=' flex mb-4 gap-3'>
              <button
                onClick={() => setChangeInstallPackage('npm')}
                className={`flex p-3 w-[150px] rounded-lg justify-between border-2 border-[#e9191958] ${changeInstallPackage === 'npm' ? 'bg-[#e9191958]' : 'button'}`}
              >
                NPM{' '}
                <img src='https://user-images.githubusercontent.com/59892368/215260509-7ae59bdb-00c5-4ca2-968d-2dc46ebc22ba.svg'></img>
              </button>
              <button
                onClick={() => setChangeInstallPackage('yarn')}
                className={`flex p-3 w-[150px] rounded-lg justify-between border-2 border-[#3179c64B] ${changeInstallPackage === 'yarn' ? 'bg-[#3179c64B]' : 'button'}`}
              >
                Yarn{' '}
                <img src='https://user-images.githubusercontent.com/59892368/232318472-fca31255-3553-4d5b-b897-ee29db29e619.svg'></img>
              </button>
            </div>
            {changeInstallPackage === 'npm' ? (
              <Highlighter style={highlighterStyle}>{packageInstall_NPM}</Highlighter>
            ) : (
              <Highlighter style={highlighterStyle}>{packageInstall_Yarn}</Highlighter>
            )}

          </div>
          <div  >
            <div id="importPackage" className="h-16" />

            <h2 className="text-3xl mb-8">Import Package</h2>
            <Highlighter style={highlighterStyleImport}>{importPackage}</Highlighter>
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

                <Highlighter style={highlighterStyleImport}>{dataReposGithubCode}</Highlighter>

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
              <img className="" src={fill_homepage} />
              <br />
              <br />
              <span className="text-[#00979C] text-xl"> topics:</span> array that brings information about the icons in Project and Stack. Used in both ProjectIcon and StackIcon components. It is in this field that is passed the key configured in the hook. Refers to the field About / Topics of your GitHub.
              <br />
              <br />
              <img className="" src={fill_topics} alt='fill_topics' />
              <br />
              <br />
              <span className="text-[#00979C] text-xl"> name: </span> This is the name of the repository. Refers to the field  Settings / General / Repository name of your GitHub.
              <br />
              <br />
              <img className="" src={fill_repositoryName} alt='fill_repositoryName' />
              <br />
              <br />
              <span className="text-[#00979C] text-xl"> description:</span>  This is the description given to your repository. Refers to the About /Description field of your GitHub.
              <br />
              <br />
              <img className="" src={fill_description} alt='fill_description' />
            </div>


          </div>

          <div  >
            <div id="codeExample" className="h-12" />
            <h2 className="text-3xl mt-8 mb-8">Code Example</h2>
            <p className="mb-2" style={{ color: 'red', backgroundColor: '#c90e0e2f' }}>
              Don't forget to fill the keyword fields (determined by you) and the your github username.
            </p>
            <Highlighter>{githubUsername}</Highlighter>
            <br />
            <Highlighter>{keywordCode}</Highlighter>
            <br />
            <div className="flex gap-4 items-center mb-8">
              <button onClick={() => setChangeCodeExample('javascript')} className="bg-[#f3da35a8] w-36 h-12 border-solid border-2 border-white rounded-lg flex justify-center items-center gap-2">Javascript  <img className="" src={javascript_logo} alt='logoLib' /></button>
              <button onClick={() => setChangeCodeExample('typescript')} className="bg-[#3179c64b] w-36 h-12 border-solid border-2 border-white rounded-lg flex justify-center items-center gap-2">Typescript <img className="" src={typescript_logo} alt='logoLib' /></button>
              <h3 className="text-2xl">App.{changeCodeExample === 'javascript' ? 'jsx' : 'tsx'}</h3>
            </div>

            {changeCodeExample === 'javascript' ? (
              <Highlighter>{codeExampleJSX}</Highlighter>
            ) : (
              <Highlighter>{codeExampleTSX}</Highlighter>
            )}
          </div>
          <Footer />

        </article>

      </main>





    </div>
  )
}


const keywordCode = `  ...
                    {/*fill in the field below in the code example.*/}  
  then(data => setRepository(dataReposGithub(data, 'insertKeyWordHere')))
  ...
`;

const githubUsername = `  ...
                   {/*fill in the field below in the code example.*/}
  fetch('https://api.github.com/users/usernameGitHub/repos?sort=created&per_page=999')
  ...
`;

const dataReposGithubCode = `
    const { dataReposGithub } = useGithubAutomatedRepos()
`;

const codeExampleJSX = `   
  import './App.css';
  import { useEffect, useState } from 'react';
  import { useGithubAutomatedRepos, ProjectIcon, StackIcon } from 'github-automated-repos/index';
  function App() {
                              {/*useGithubAutomatedRepos hook*/ }
    const { dataReposGithub } = useGithubAutomatedRepos()
    const [repository, setRepository] = useState([])

    useEffect(() => {
                                  {/*Put here your github Name*/ }
      fetch('https://api.github.com/users/usernameGitHub/repos?sort=created&per_page=999')
      .then(response => response.json())
      .then(data => setRepository(dataReposGithub(data, 'insertKeyWordHere'))); {/*<-- keyWord*/}
  }, [])

    return (
      <div className="App">
        {
          repository.map((item) => {
            return (
              <div key={item.id}>

                {/*Project Icon*/}
                {item.topics.map((icon) => {
                  return (
                    <ProjectIcon key={icon} className="project_Icon" iconItem={icon} />
                  )
                })}
                {/*html Url*/}
                <a href={item.html_url}>
                    {/*Name Project*/}
                    <h1>{item.name}</h1>
                </a>

                {/*Description*/}
                <p>{item.description}</p>

                
                {/*Homepage*/}
                <a href={item.homepage}>
                    <h3>Homepage</h3>
                </a>
                {/*Stacks Icon*/}
                {item.topics.map((icon) => {
                  return (
                    <StackIcon key={icon} className="stack_Icon" iconItem={icon} />
                  )
                })}

              </div>

            )
          })
        }
      </div>
    );

  }
  export default App;


`;

const codeExampleTSX = `   
  import './App.css';
  import { useEffect, useState } from 'react';
  import { useGithubAutomatedRepos, ProjectIcon, StackIcon, IGithubRepos } from 'github-automated-repos/index';
  function App() {
                              {/*useGithubAutomatedRepos hook*/ }
    const { dataReposGithub } = useGithubAutomatedRepos()
    const [repository, setRepository] = useState<IGithubRepos[]>([])

    useEffect(() => {
                                  {/*Put here your github Name*/ }
      fetch('https://api.github.com/users/usernameGitHub/repos?sort=created&per_page=999')
      .then(response => response.json())
      .then(data => setRepository(dataReposGithub(data, 'insertKeyWordHere'))); {/*<-- keyWord*/}
  }, [])

    return (
      <div className="App">
        {
          repository.map((item) => {
            return (
              <div key={item.id}>

                {/*Project Icon*/}
                {item.topics.map((icon) => {
                  return (
                    <ProjectIcon key={icon} className="project_Icon" iconItem={icon} />
                  )
                })}

                {/*html Url*/}
                <a href={item.html_url}>
                    {/*Name Project*/}
                    <h1>{item.name}</h1>
                </a>

                {/*Description*/}
                <p>{item.description}</p>
    
                {/*Homepage*/}
                <a href={item.homepage}>
                    <h3>Homepage</h3>
                </a>

                {/*Stacks Icon*/}
                {item.topics.map((icon) => {
                  return (
                    <StackIcon key={icon} className="stack_Icon" iconItem={icon} />
                  )
                })}

              </div>

            )
          })
        }
      </div>
    );

  }
  export default App;


`;
