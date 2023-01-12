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

const codade = `
    import { IconProjects,IconSkill, useGithubAutomatedRepos} from 'github-automated-repos';
`;

export function GettingStarted() {

    return (
        <>
            <div className="gettingStarted_Container">
                <div className="gettingStarted_Content">
                    <h1>Getting Started</h1>
                    <br />
                    <div className="step01_Container">
                        <h2>Step 1 - Install Package</h2>
                        <br />
                        <Highlighter style={highlighterStyle}>{packageInstall}</ Highlighter>
                    </div>

                    <div className="step02_Container">
                        <h2>Step 2 - Import Package</h2>
                        <br />
                        <Highlighter style={highlighterStyle}>{importPackage}</ Highlighter>
                        <ul>
                            <li className="iconProjects">IconProjects</li>
                            <li className="iconSkill">IconSkill</li>
                            <li className="useGithubAutomatedRepos">useGithubAutomatedRepos </li>



                        </ul>
                    </div>
                    <div className="step03_Container">

                        <h2>Step 3 -Code Example</h2>
                        <div className="jsx_Content">
                            <img className="jsxIcon" src="https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg" />
                            <h3>.JSX</h3>
                        </div>
                        <Highlighter style={highlighterStyle}>{importPackage}</ Highlighter>
                        <br />


                        <div className="tsx_Container">
                            <img className="tsxIcon" src="https://user-images.githubusercontent.com/59892368/211927874-fb9b60ed-64dd-4091-9880-62af2a2206a1.svg" />
                            <h3>.TSX</h3>
                        </div>
                        <Highlighter style={highlighterStyle}>{importPackage}</ Highlighter>

                    </div>





                    <div className="step03_Container">

                        <h2>Step 3 -Code Example</h2>
                        <div className="jsx_Content">
                            <img className="jsxIcon" src="https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg" />
                            <h3>.JSX</h3>
                        </div>
                        <Highlighter style={highlighterStyle}>{importPackage}</ Highlighter>
                        <br />


                        <div className="tsx_Container">
                            <img className="tsxIcon" src="https://user-images.githubusercontent.com/59892368/211927874-fb9b60ed-64dd-4091-9880-62af2a2206a1.svg" />
                            <h3>.TSX</h3>
                        </div>
                        <Highlighter style={highlighterStyle}>{importPackage}</ Highlighter>

                    </div>
                </div>
            </div>

        </>

    )
}