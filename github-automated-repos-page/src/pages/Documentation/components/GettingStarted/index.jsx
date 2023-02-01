import React from "react";
import { Highlighter } from "rc-highlight";
import './style.scss';


const highlighterStyle = { paddingLeft: '5px', height: '60px', backgroundColor: 'rgb(40, 44, 52)' }
const highlighterStyleFragments = { fontSize: '14px', paddingLeft: '30px', height: '350px', backgroundColor: 'rgb(20, 38, 99)' }
const packageInstall = `
    yarn add github-automated-repos
`;

const importPackage = `
    import { useGithubAutomatedRepos, ProjectIcon, StackIcon, IGithubRepos} from 'github-automated-repos';
`;

export function GettingStarted() {

  return (
    <>

      <div className="gettingStarted_Container">
        <div className="gettingStarted_Content">
          <h1 className="document_Title">Getting Started</h1>
          <hr />
          <ul className="gettingStarted_Summary">
            <li >
              <a href="#InstallPackage">Install Package</a>
            </li>
            <li>
              <a href="#ImportPackage"> Import Package</a>

            </li>
            <li>
              <a href="#ExampleCode"> Example Code</a>

            </li>
          </ul>
          <br />
          <div id="InstallPackage" className="step01_Container">
            <h2> Install Package</h2>

            <Highlighter style={highlighterStyle}>{packageInstall}</ Highlighter>
          </div>



          <div id="ImportPackage" className="step02_Container">
            <h2>Import Package</h2>
            <Highlighter style={highlighterStyle}>{importPackage}</ Highlighter>
            <br />
            <h4> The package imports three elements: </h4>
            <p><code style={{ color: '#60d2ff' }} className="code">useGithubAutomatedRepos</code> hook responsável por automatizar os repositórios. Ele retorna um função chamada <code>dataGithubRepos</code>, que recebe dois parâmetros: data (dado que vem da API) e a palavra-chave (esta última responsável pela aparição do projeto na página a partir do momento em que é declarada no campo Tópicos em seu repositório). O <code>dataGithubRepos</code> retorna, de forma otimizada, uma array de objetos contendo 5 propriedades: id, html_url, topics, name, descriptrion</p>

            <ul>
              <li><b>id:</b> número identificação do repositório. Usado como parâmetro na tag key. </li>
              <li><b>html_url:</b> link referente ao repositório. Usado como o link de acesso. </li>
              <li><b>topics:</b> array que traz informações referente aos ícones de Projeto e Stack. Usado nos dois componentes ProjectIcon e StackIcon.</li>
              <li><b>name:</b> refere-se ao nome dado ao repositório. Usado como título de um card por exemplo. </li>
              <li><b>description:</b> esta é a descrição dada ao seu repositório. Usado como introdução do seu projeto.</li>
            </ul>
            {/*<br /><br /><Highlighter style={highlighterStyleFragments}>{codeFragments_Hook}</ Highlighter>*/}


            <p><code style={{ color: '#5ed49d' }} className="code">ProjectIcon</code> component that renders the project icon, the one that represents the area to which it belongs. Check out the Project Icons tab!</p>
            {/* <br /><br /><Highlighter style={highlighterStyleFragments}>{codeFragments_ProjectIcon}</ Highlighter>*/}


            <p><code style={{ color: '#5ed49d' }} className="code">StackIcon</code> component that renders the icons of the stacks used in your project. Check out the Stack Icons tab!</p>
            {/*<br /><br /><Highlighter style={highlighterStyleFragments}>{codeFragments_StackIcons}</ Highlighter>*/}

            <p><code style={{ color: '#5ed49d' }} className="code">IGithubRepos</code> interface para o projeto em Typescript. Usado para tipar o useState que receberá a array.</p>
          </div>

          <div id="ExampleCode" className="step03_Container">

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
        {item.topics.map((icon) => {
            return (
            <IconProjects key={icon} className="project_Icon" iconItem={icon} />
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
  import './App.css';
  import { useEffect, useState } from 'react';
  import React from 'react'
  import { useGithubAutomatedRepos, ProjectIcon, StackIcon} from 'github-automated-repos';
  function App() {
                              {/*useGithubAutomatedRepos hook*/ }
    const { dataReposGithub } = useGithubAutomatedRepos()
    const [repository, setRepository] = useState([])

    useEffect(() => {
                                  {/*Put here your github Name*/ }
      fetch('https://api.github.com/users/githubName/repos')
      .then(response => response.json())
      .then(data => setRepository(dataReposGithub(data, 'deploy'))) {/*<-- keyWord*/}
  }, [])

    return (
      <div className="App">
        {
          repository.map((item) => {
            return (
              <a href={item.html_url} key={item.id}>

                {/*Project Icon*/}
                {item.topics.map((icon) => {
                  return (
                    <ProjectIcon key={icon} className="project_Icon" iconItem={icon} />
                  )
                })}

                {/*Name Project*/}
                <h1>{item.name}</h1>

                {/*Description*/}
                <p>{item.description}</p>

                {/*Stacks Icon*/}
                {item.topics.map((icon) => {
                  return (
                    <StackIcon key={icon} className="stack_Icon" iconItem={icon} />
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



const codeExampleTSX = `
    import { useEffect, useState } from 'react';
    import { useGithubAutomatedRepos, ProjectIcon, StackIcon, IGithubRepos} from 'github-automated-repos';
    import './App.css';


    function App() {

    const { dataReposGithub } = useGithubAutomatedRepos()

    const [repository, setRepository] = useState<IGithubRepos[]>([])

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
                item.topics.map((icon) => {
                    return (
                      <ProjectIcon key={icon} className="project_Icon" iconItem={icon} />
                    )
                })
                }
                {/*Name Project*/}
                <h2>{item.name}</h2>
                {/*Description*/}
                <p>{item.description}</p>

                {  //Stacks Icon
                item.topics.map((icon) => {
                    return (

                      <StackIcon key={icon} className="stack_Icon" iconItem={icon} />

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