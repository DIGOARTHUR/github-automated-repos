'use client'
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from "react";
import { FiExternalLink } from 'react-icons/fi';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { IconsData } from 'github-automated-repos/index';
import { Card } from "../components/Card";
import Loader from '../components/Loader';

export default function IconsProject() {


    useEffect(() => {
        window.scrollTo(0, 0);
        const id = setTimeout(() => {
            setFinishedTimeout(true);
        }, 350);

        return () => clearTimeout(id);


    }, []);

    const { iconsProjects } = IconsData();

    const [finishedTimeout, setFinishedTimeout] = useState(false);

    const [projectsIconKeys, setProjectsIconKeys] = useState([]);
    const [projectsIconValues, setProjectsIconValues] = useState([]);

    const [inicialStackIconKeys, setInicialStackIconKeys] = useState([]);
    const [inicialStackIconValues, setInicialStackIconValues] = useState([]);
    useEffect(() => {


        setProjectsIconKeys(Object.keys(iconsProjects));
        setProjectsIconValues(Object.values(iconsProjects));

        setInicialStackIconKeys(Object.keys(iconsProjects));
        setInicialStackIconValues(Object.values(iconsProjects));
    }, []);

    function _handleSearch(e) {
        if (!e.target.value) {
            setProjectsIconKeys(inicialStackIconKeys);
            setProjectsIconValues(inicialStackIconValues);
            return;
        }

        const filterStackIconKeys = inicialStackIconKeys.filter((values) => {
            return values.includes(e.target.value.toLowerCase());
        });
        setProjectsIconKeys(filterStackIconKeys);
        console.log(filterStackIconKeys);

        const filterStackIconValues = filterStackIconKeys.map((iconKey) => {
            return iconsProjects[iconKey];
        });

        setProjectsIconValues(filterStackIconValues);
    }
    return (
        <div>
            <Header />
            <main className="">
                <Sidebar />

                <article className=" h-screen pt-8  mt-16 ml-[340px] px-6 pr-56 max-lg:ml-0 max-lg:pr-6  ">

                    <span>Icons Projects &#62;</span>

                    <h1 className="text-4xl mt-8  mb-2 max-md:text-4xl">Icons Project</h1>
                    <hr />
                    <div className='mt-8'>
                        <input className=' bg-[#70708e33] w-full rounded-lg px-4 py-2 ' placeholder='🔍 Search Icons' type='text' onChange={_handleSearch} />
                    </div>
                    <ul className='mt-8 flex flex-wrap gap-4 justify-center'>
                        {
                            finishedTimeout == false ? (<Loader/>) : (
                                projectsIconValues.length > 0 ? (

                                    projectsIconValues.map((item, index) => {
                                        return <Card key={index} item={item} iconKey={projectsIconKeys[index]} />;
                                    })


                                ) : (
                                    <div className='flex flex-col m-auto gap-4'>
                                        <p className='text-xl text-center'>
                                            Didn't find your icon? <br /> Tell us about here:{' '}
                                            <a className='flex gap-2 text-[#00979C] justify-center' href='https://github.com/DIGOARTHUR/github-automated-repos/issues/new?assignees=&labels=&template=2-feature-request.yaml'>
                                                Feature Request <FiExternalLink />
                                            </a>
                                        </p>
                                        <img className='h-[350px]' src='https://user-images.githubusercontent.com/59892368/220364871-f553109d-855f-426a-bbe5-5e1c11278003.svg'></img>
                                    </div>
                                )
                            )
                        }




                    </ul>
                    <Footer />

                </article>

            </main>




            <ToastContainer />
        </div>
    )
}