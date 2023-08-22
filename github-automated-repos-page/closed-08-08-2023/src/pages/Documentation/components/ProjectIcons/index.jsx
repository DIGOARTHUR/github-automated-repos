import React from 'react';
import { IconsData } from 'github-automated-repos';
import { useEffect, useState } from 'react';
import './style.scss';
import { Card } from '../../../../components/Card';
import { ToastContainer, toast } from 'react-toastify';
import { FiExternalLink } from 'react-icons/fi';
export function ProjectIcons() {
    const { iconsProjects } = IconsData();

    const [projectsIconKeys, setProjectIconKeys] = useState([]);
    const [projectsIconValues, setProjectIconValues] = useState([]);
    const [inicialProjectIconKeys, setInicialProjectIconKeys] = useState([]);
    const [inicialProjectIconValues, setInicialProjectIconValues] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);

        setProjectIconKeys(Object.keys(iconsProjects));
        setProjectIconValues(Object.values(iconsProjects));

        setInicialProjectIconKeys(Object.keys(iconsProjects));
        setInicialProjectIconValues(Object.values(iconsProjects));
    }, []);

    function _handleSearch(e) {
        if (!e.target.value) {
            setProjectIconKeys(inicialProjectIconKeys);
            setProjectIconValues(inicialProjectIconValues);
            return;
        }

        const filterProjectIconKeys = inicialProjectIconKeys.filter((values, index) => {
            return values.includes(e.target.value.toLowerCase());
        });
        setProjectIconKeys(filterProjectIconKeys);

        const filterProjectIconValues = filterProjectIconKeys.map((iconKey) => {
            return iconsProjects[iconKey];
        });

        setProjectIconValues(filterProjectIconValues);
    }
    return (
        <div className='project_Conteiner'>
            <div className='project_Header'>
                <h1 className='document_Title'>Project Icons</h1>
                <div className='project_searchField'>
                    <input placeholder='🔍 Search Icons' type='text' onChange={_handleSearch} />
                </div>
            </div>

            <hr />
            <br />
            <div className='project_Content'>
                <div className='tip'>
                    <img src='https://user-images.githubusercontent.com/59892368/213676096-2ce457e1-9f63-45aa-9744-94e3a6622fc3.png'></img>
                    <p>
                        One way to change the colors of svgs is to use CSS property <code>filter </code>. Transform RGBs or Hexadecimal colors to
                        format <code>filter</code> in: <a href='https://angel-rs.github.io/css-color-filter-generator/'>here</a>{' '}
                    </p>
                </div>

                <ul className='project_Card'>
                    {projectsIconValues.length > 0 ? (
                        projectsIconValues.map((item, index) => {
                            return <Card key={index} item={item} iconKey={projectsIconKeys[index]} />;
                        })
                    ) : (
                        <div className='info_Missing_Search'>
                            <p>
                                Didn't find your icon? <br /> Tell us about here:{' '}
                                <a href='https://github.com/DIGOARTHUR/github-automated-repos/issues/new?assignees=&labels=&template=2-feature-request.yaml'>
                                    Feature Request <FiExternalLink />
                                </a>
                            </p>
                            <img src='https://user-images.githubusercontent.com/59892368/220364871-f553109d-855f-426a-bbe5-5e1c11278003.svg'></img>
                        </div>
                    )}

                    <ToastContainer />
                </ul>
            </div>
        </div>
    );
}
