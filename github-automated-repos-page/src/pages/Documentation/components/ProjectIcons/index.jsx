import React from "react";
import { IconsData  } from 'github-automated-repos';
import { useEffect, useState } from 'react';
import './style.scss';
import { Card } from "../../../../components/Card";
import { ToastContainer, toast } from 'react-toastify';

export function ProjectIcons() {
    const { iconsProjects} = IconsData ()



    const [projectsIconKeys, setProjectIconKeys] = useState([])
    const [projectsIconValues, setProjectIconValues] = useState([])

    useEffect(() => {
        {/*Put here your github Name*/ }
        setProjectIconKeys(Object.keys(iconsProjects))
        setProjectIconValues(Object.values(iconsProjects))
    }, [])


    return (
        <div className="project_Conteiner">
            <h1 className="document_Title">Project Icons</h1>
            <hr />
            <br />
            <div className="project_Content">
                <div className="tip">
                    <img src="https://user-images.githubusercontent.com/59892368/213676096-2ce457e1-9f63-45aa-9744-94e3a6622fc3.png"></img>
                    <p>One way to change the colors of svgs is to use CSS property <code>filter </code>. Transform RGBs or Hexadecimal colors to format <code>filter</code> in: <a href="https://angel-rs.github.io/css-color-filter-generator/">here</a> </p>
                </div>

                <ul className="project_Content">
                    {
                        projectsIconValues.map((item, index) => {
                            return (
                                <Card key={index} item={item} iconKey={projectsIconKeys[index]} />
                                
                            )
                        })
                    }

<ToastContainer/>
                </ul>
            </div>
        </div>


    )
}