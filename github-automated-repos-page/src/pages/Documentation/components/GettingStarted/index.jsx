import React from "react";
import { Highlighter } from "rc-highlight";
import './style.scss';


const highlighterStyle = { paddingLeft: '5px', height: '60px', backgroundColor: 'rgb(40, 44, 52)' }
const highlighterStyleFragments = { fontSize: '14px', paddingLeft: '30px', height: '350px', backgroundColor: 'rgb(20, 38, 99)' }
const packageInstall = `
    yarn add github-automated-repos
`;

const importPackage = `
    import { IconProjects,IconSkill, useGithubAutomatedRepos} from 'github-automated-repos';
`;

export function GettingStarted() {

    return (
        <>

            <div className="gettingStarted_Container">
                <div className="gettingStarted_Content">
                    <p className="title">Getting Started</p>
                    <hr />
                    <br />
                    <div className="step01_Container">
                        <h2> Install Package</h2>
                       
                        <Highlighter style={highlighterStyle}>{packageInstall}</ Highlighter>
                    </div>



                    <div className="step02_Container">
                        <h2>Import Package</h2>
                        <Highlighter style={highlighterStyle}>{importPackage}</ Highlighter>
                        <br />
                        <p> The package imports three elements:: </p>
                            <br /><code style={{ color: '#60d2ff' }} className="code">useGithubAutomatedRepos</code> hook responsible for automating the repositories. It receives two parameters: data (data that comes from the API, and returns 5 hook properties, see code) and the keyword (the latter responsible for the appearance of the project on the page from the moment it is declared in the Topics field in your repository).
                            <br /><br /><Highlighter style={highlighterStyleFragments}>{codeFragments_Hook}</ Highlighter>


                            <br /><code style={{ color: '#5ed49d' }} className="code">IconProjects</code> component that renders the project icon, the one that represents the area to which it belongs. Check out the Project Icons tab!
                            <br /><br /><Highlighter style={highlighterStyleFragments}>{codeFragments_ProjectIcon}</ Highlighter>


                            <br /><code style={{ color: '#5ed49d' }} className="code">IconSkill</code> component that renders the icons of the stacks used in your project. Check out the Stack Icons tab!
                            <br /><br /><Highlighter style={highlighterStyleFragments}>{codeFragments_StackIcons}</ Highlighter>



            
                    </div>

                    <div className="step03_Container">

                        <h2>Code Example</h2>
                        <div className="jsx_Content">
                            <img className="jsxIcon" src="https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg" />
                            <h3>.JSX</h3>
                        </div>
                        <Highlighter >{codeExampleJSX}</ Highlighter>
                        <br />


                        <div className="tsx_Container">
                            <img className="tsxIcon" src="https://user-images.githubusercontent.com/59892368/211927874-fb9b60ed-64dd-4091-9880-62af2a2206a1.svg" />
                            <h3>.TSX</h3>
                        </div>
                        <Highlighter >{codeExampleTSX}</ Highlighter>

                    </div>
                </div>
            </div>

        </>

    )
}

const codeFragments_Hook =
    `const { dataReposGithub } = useGithubAutomatedRepos()
const [repository, setRepository] = useState([])
useEffect(() => {
                            {/*Put here your github Name*/}
    fetch('https://api.github.com/users/githubName/repos')
    .then(response => response.json())
    .then(data => setRepository(dataReposGithub(data, 'deploy'))){/*<-- keyword*/}
                                {/*dataReposGithub : 
                                    name: string;
                                    topics: [];
                                    html_url: string;
                                    description: string;
                                    id: number;    
                                */}  
}, [])
`

const codeFragments_ProjectIcon = `
{
    repository.map((item) => {
    return (
      ...
        {/*Project Icon*/}
        {item.topics.map((projectIcon) => {
            return (
            <IconProjects key={projectIcon} className="icon-skill" iconItem={projectIcon} />
            {/*
            Required:
            key
            iconItem
        
            Optional:
            className
                   
            */}
            )
        })}
      
      ...
    )
    })
}
...
`

const codeFragments_StackIcons = `
{
    repository.map((item) => {
    return (
      ...
        {/*Stacks Icon*/}
        {item.topics.map((stackIconsItem) => {
            return (
            <IconSkill key={stackIconsItem} className=" " iconItem={stackIconsItem} />
            {/*
            Required:
            key
            iconItem
        
            Optional:
            className
                   
            */}
            )
        })}
        ...
    )
    })
}
`

const codeFragments_04 = `
import { useGithubAutomatedRepos, IconProjects , IconSkill} from 'github-automated-repos'; {/*Import Package*/}
`

const codeExampleJSX = `   
    import { useEffect, useState } from 'react';
    import { IconProjects, IconSkill, useGithubAutomatedRepos } from 'github-automated-repos';

    function App() {
        const { dataReposGithub } = useGithubAutomatedRepos()
        const [repository, setRepository] = useState([])
        useEffect(() => {
            {/*Put here your github Name*/ }
            fetch('https://api.github.com/users/digoarthur/repos')
            .then(response => response.json())
            .then(data => setRepository(dataReposGithub(data, 'deploy')))
        }, [])
  return (
    <div className="App">
      {
        repository.map((item) => {
          return (
            <>
              {/*Repository Link*/}
            <a href={item.html_url} key={item.id}>
              
                {/*Project Icon*/}
                {item.topics.map((icon) => {
                  return (
                    <IconProjects key={icon} className="icon-skill" iconItem={icon} />
                  )
                })}
              
              {/*Name Project*/}
              <h1>{item.name}</h1>
              {/*Description*/}
              <p>{item.description}</p>
              {/*Stacks Icon*/}
              {item.topics.map((icon) => {
                return (
                  <IconSkill key={icon} className="icon-skill" iconItem={icon} />
                )
              })}
            </a>
        </>
          )
        })
      }
    </div>
  );
}

export default App;

`;



const codeExampleTSX = `
    import { useEffect, useState } from 'react';
    import { useGithubAutomatedRepos, IconProjects, IconSkill } from 'github-automated-repos';
    import './App.css';


    function App() {

    const { dataReposGithub } = useGithubAutomatedRepos()

    interface Provider {
        id: number;
        html_url: string;
        topics: [];
        name: string;
        description: string;
    }

    const [repository, setRepository] = useState<Provider[]>([])

    useEffect(() => {
                              {/*Put here your github Name*/ }
        fetch('https://api.github.com/users/digoarthur/repos')
        .then(response => response.json())
        .then(data => setRepository(dataReposGithub(data, 'deploy')))
    }, [])

    return (
        <div className="App">
        {repository.map((item) => {
            return (
            //Repository Link
            <a key={item.id} href={item.html_url} >
                { //Project Icon
                item.topics.map((projectIcon) => {
                    return (
                    <IconProjects key={projectIcon} className=" " iconItem={projectIcon} />
                    )
                })
                }
                {/*Name Project*/}
                <h2>{item.name}</h2>
                {/*Description*/}
                <p>{item.description}</p>

                {  //Stacks Icon
                item.topics.map((stackIconsItem) => {
                    return (

                    <IconSkill key={stackIconsItem} className=" " iconItem={stackIconsItem} />

                    )
                })
                }

            </a>
            )

        })}
        </div>
    );
    }

    export default App;

`;