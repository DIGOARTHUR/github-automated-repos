import React from "react";
import { Highlighter } from "rc-highlight";
import { useGithubAutomatedRepos } from 'github-automated-repos';
import { useEffect, useState } from 'react';
import './style.scss';

const highlighterStyle = { fontSize:'15px',paddingLeft: '10px', height: '60px',width: '250px',backgroundColor: '#747474'}
export function ProjectIcons() {
    const { iconsProjects } = useGithubAutomatedRepos()



    const [projectsIconKeys, setProjectIconKeys] = useState([])
    const [projectsIconValues, setProjectIconValues] = useState([])

    useEffect(() => {
        {/*Put here your github Name*/ }
        setProjectIconKeys(Object.keys(iconsProjects))
        setProjectIconValues(Object.values(iconsProjects))
    }, [])


    return (
        <div className="project_Conteiner">
            <h1>Project Icons</h1>
            <div className="project_Content">
                {
                    projectsIconValues.map((item, index) => {
                        return (
                            <div className="project_Card">
                                <img src={item}></img>
                                <Highlighter style={highlighterStyle} >{projectsIconKeys[index]}</ Highlighter>

                            </div>

                        )
                    })
                }
            </div>
        </div>


    )
}