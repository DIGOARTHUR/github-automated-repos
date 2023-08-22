import React, { useEffect, useState } from 'react';
import { Highlighter } from 'rc-highlight';
import './style.scss';

const highlighterStyle = {
    paddingLeft: '5px',
    height: '60px',
    backgroundColor: 'rgb(40, 44, 52)',
};
const highlighterStyleImport = {
    paddingLeft: '5px',
    height: '60px',
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
    import { useGithubAutomatedRepos, ProjectIcon, StackIcon, IGithubRepos} from 'github-automated-repos';
`;

export function GettingStarted() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [changeCodeExample, setChangeCodeExample] = useState('javascript');
    const [changeInstallPackage, setChangeInstallPackage] = useState('npm');
    return (
        <>
            <div className='gettingStarted_Container'>
                <div className='gettingStarted_Content'>
                    <h1 className='document_Title'>About</h1>

                    <p style={{ borderLeft: '3px solid #c7c7c7', paddingLeft: '5px' }}>
                        This library automates the view your GitHub projects on your website in one place. But how? Make the code configuration only
                        once in your application with github-automated-repos, and manage the view of your projects on GitHub in the Topics field.
                        Choose which project will be seen on your website, and you can even customize your project card, for example, with a
                        representative icon and show which stacks were used. All in one place!
                    </p>

                    <h1 className='document_Title'>Getting Started</h1>
                    <hr />
                    <ul className='gettingStarted_Summary'>
                        <li>
                            <a href='#InstallPackage'>Install Package</a>
                        </li>
                        <li>
                            <a href='#ImportPackage'> Import Package</a>
                        </li>
                        <li>
                            <a href='#FillFields'> Fill in the fields in the GitHub repository</a>
                        </li>
                        <li>
                            <a href='#ExampleCode'> Example Code</a>
                        </li>
                    </ul>
                    <br />
                    <div id='InstallPackage' className='step01_Container'>
                        <h2> Install Package</h2>
                        <div className='button_Container_ExampleCode'>
                            <button
                                onClick={() => setChangeInstallPackage('npm')}
                                className={changeInstallPackage === 'npm' ? 'npm_Button button' : 'button'}
                            >
                                NPM{' '}
                                <img src='https://user-images.githubusercontent.com/59892368/215260509-7ae59bdb-00c5-4ca2-968d-2dc46ebc22ba.svg'></img>
                            </button>
                            <button
                                onClick={() => setChangeInstallPackage('yarn')}
                                className={changeInstallPackage === 'yarn' ? 'yarn_Button button' : 'button'}
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

                        <br />
                    </div>
                    <span className='divison_Container'>. . .</span>
                    <div id='ImportPackage' className='step02_Container'>
                        <h2>Import Package</h2>
                        <Highlighter style={highlighterStyleImport}>{importPackage}</Highlighter>
                        <br />

                        <br />

                        <h4> The package imports four elements: </h4>

                        <p>
                            <code style={{ color: '#5ed49d' }} className='code'>
                                ProjectIcon
                            </code>{' '}
                            component that renders the icons of the projects that come from data returned from the dataGithubRepos function as the
                            Topics property. Check the{' '}
                            <a target='_blank' href='https://github-automated-repos.vercel.app/documentation/projectIcons'>
                                Project Icons
                            </a>{' '}
                            tab!
                        </p>
                        {/* <br /><br /><Highlighter style={highlighterStyleFragments}>{codeFragments_ProjectIcon}</ Highlighter>*/}

                        <p>
                            <code style={{ color: '#5ed49d' }} className='code'>
                                StackIcon
                            </code>{' '}
                            component that renders the icons of the stacks that come from data returned from the dataGithubRepos function as the
                            Topics property. Check the{' '}
                            <a target='_blank' href='https://github-automated-repos.vercel.app/documentation/stackIcons'>
                                Stack Icons
                            </a>{' '}
                            tab!
                        </p>
                        {/*<br /><br /><Highlighter style={highlighterStyleFragments}>{codeFragments_StackIcons}</ Highlighter>*/}

                        <p>
                            <code style={{ color: '#5ed49d' }} className='code'>
                                IGithubRepos
                            </code>{' '}
                            interface for the application in Typescript. Used to type the useState that will receive the array.
                        </p>
                        <p>
                            <code style={{ color: '#60d2ff' }} className='code'>
                                useGithubAutomatedRepos
                            </code>{' '}
                            hook responsible for automating the repositories. It returns a function called{' '}
                            <code style={{ backgroundColor: '#e0e2e2' }}>dataGithubRepos</code>, which takes two parameters: data (data that comes
                            from the GitHub API) and the keyword (the latter responsible for showing the project on your website from the moment it is
                            declared in the Topics field of the your Github repository). The <code>dataGithubRepos</code> returns, so optimized, an
                            array of objects containing 6 properties: id, html_url, homepage, topics, name and description.
                        </p>
                        <Highlighter style={highlighterStyleImport}>{dataReposGithubCode}</Highlighter>

                        <span className='divison_Container'>. . .</span>

                        <div id='FillFields' className='step03_Container'>
                            <h2>Fill in the fields in the GitHub repository</h2>
                            <ul>
                                <li>
                                    <b>id:</b> repository identification number. used as parameter in the key tag. This field does not need to be
                                    filled in.{' '}
                                </li>
                                <li>
                                    <b>html_url:</b> repository link. Used as the link of access. This field does not need to be filled in.
                                </li>
                                <li>
                                    <b>homepage:</b> it's the access link to the built page, page deploy. <code> About / Website</code> of your
                                    GitHub.
                                    <div>
                                        <img src='https://user-images.githubusercontent.com/59892368/217616849-ffc13e3e-71c3-47e5-bf2e-4cc0510cce55.png' />
                                    </div>
                                </li>
                                <li>
                                    <b>topics:</b> array that brings information about the icons in{' '}
                                    <a target='_blank' href='https://github-automated-repos.vercel.app/documentation/projectIcons'>
                                        Project
                                    </a>{' '}
                                    and{' '}
                                    <a target='_blank' href='https://github-automated-repos.vercel.app/documentation/stackIcons'>
                                        Stack
                                    </a>
                                    . Used in both ProjectIcon and StackIcon components. It is in this field that is passed the key configured in the
                                    hook. Refers to the field
                                    <code> About / Topics</code> of your GitHub.
                                    <div>
                                        <img src='https://user-images.githubusercontent.com/59892368/217950765-46d46954-5d17-4063-8a67-1082e538fb39.png' />
                                    </div>
                                </li>

                                <li>
                                    <b>name:</b> This is the name of the repository. Refers to the field{' '}
                                    <code> Settings / General / Repository name</code> of your GitHub.
                                    <div>
                                        <img src='https://user-images.githubusercontent.com/59892368/216724741-dd5982d9-8b52-4576-beff-6ab1370fac34.png' />
                                    </div>
                                </li>
                                <li>
                                    <b>description:</b> This is the description given to your repository. Refers to the{' '}
                                    <code>About /Description field</code> of your GitHub.
                                    <div>
                                        <img src='https://user-images.githubusercontent.com/59892368/216720448-6ead1097-df1e-4ebf-a98e-b04c00b974ab.png' />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*<br /><br /><Highlighter style={highlighterStyleFragments}>{codeFragments_Hook}</ Highlighter>*/}
                    </div>

                    <span className='divison_Container'>. . .</span>

                    <div id='ExampleCode' className='step04_Container'>
                        <h2>Code Example</h2>
                        <p style={{ color: 'red', backgroundColor: '#c90e0e2f' }}>
                            Don't forget to fill the keyword fields (determined by you) and the your github username.
                        </p>
                        <Highlighter>{githubUsername}</Highlighter>
                        <br />
                        <Highlighter>{keywordCode}</Highlighter>
                        <br />
                        <div className='button_Container_ExampleCode'>
                            <button
                                onClick={() => setChangeCodeExample('javascript')}
                                className={changeCodeExample === 'javascript' ? 'javascript_Button button' : 'button'}
                            >
                                Javascript{' '}
                                <img src='https://user-images.githubusercontent.com/59892368/217778982-0613605d-f29c-40ff-90ae-ee45a7e02400.svg'></img>
                            </button>
                            <button
                                onClick={() => setChangeCodeExample('typescript')}
                                className={changeCodeExample === 'typescript' ? 'typescript_Button button' : 'button'}
                            >
                                Typescript{' '}
                                <img src='https://user-images.githubusercontent.com/59892368/217778951-9a80fa48-5346-476b-91af-7346a71b45ab.svg'></img>
                            </button>
                        </div>
                        <div>
                            <h3>App.{changeCodeExample === 'javascript' ? 'js' : 'tsx'}</h3>
                        </div>
                        <br />
                        {changeCodeExample === 'javascript' ? (
                            <Highlighter>{codeExampleJSX}</Highlighter>
                        ) : (
                            <Highlighter>{codeExampleTSX}</Highlighter>
                        )}
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}

const keywordCode = `  ...
                    {/*fill in the field below in the code example.*/}  
  then(data => setRepository(dataReposGithub(data, 'insertKeyWordHere')))
  ...
`;

const githubUsername = `  ...
                   {/*fill in the field below in the code example.*/}
  fetch('https://api.github.com/users/insertUsernameGithubHere/repos')
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
      fetch('https://api.github.com/users/insertUsernameGithubHere/repos')
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
      fetch('https://api.github.com/users/insertUsernameGithubHere/repos')
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
