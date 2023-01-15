import React from "react";
import { Highlighter } from "rc-highlight";
import './style.scss';


const highlighterStyle = { paddingLeft: '5px', height: '60px', backgroundColor: 'rgb(40, 44, 52)' }
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
                    <p>Getting Started</p>
                    <hr/>
                    <br />
                    <div className="step01_Container">
                        <h2> Install Package</h2>
                        <br />
                        <Highlighter style={highlighterStyle}>{packageInstall}</ Highlighter>
                    </div>

                    <div className="step02_Container">
                        <h2>Import Package</h2>
                        <br />
                        <Highlighter style={highlighterStyle}>{importPackage}</ Highlighter>
                        <ul>
                            <li className="iconProjects">IconProjects</li>
                            <li className="iconSkill">IconSkill</li>
                            <li className="useGithubAutomatedRepos">useGithubAutomatedRepos </li>
                        </ul>
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
                        <Highlighter >{}</ Highlighter>

                    </div>
                </div>
            </div>

        </>

    )
}

const codeExampleJSX = `
    import { useGithubAutomatedRepos, IconSkill, IconProjects } from 'github-automated-repos';
    import { useEffect, useState } from 'react';
    import React from 'react'
    function App() {
    const { dataReposGithub,iconSkills} = useGithubAutomatedRepos()
    const [projects, setProjects] = useState([])
    useEffect(() => {
                                {/*Put here your github Name*/}
        fetch('https://api.github.com/users/digoarthur/repos')
        .then(response => response.json())
        .then(data => setProjects(dataReposGithub(data, 'deploy')))
    }, [])


    return (
        <div className="App">
         {
            projects.map((item) => {
            return (
                {/*Repository Link*/}
                <a href={item.html_url}  key={item.id}>

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

            )
            })
        }
        </div>
    );
    }

    export default App;
`;