
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineContentCopy } from 'react-icons/md';

import React from 'react';

interface dataCard {
    item: string
    iconKey: string
}

export function Card({ item, iconKey }: dataCard) {

    let url = window.location.pathname;
    let parts = url.split('/');
    let lastPartUrl = parts.pop() || parts.pop();
    const showToastMessage = (iconKey: string) => {
        toast.success(`Copied ${iconKey} to clipboard`, {

            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
        console.log(iconKey)
        navigator.clipboard.writeText(iconKey)
    };
    return (
        <>
            <li className="group grid grid-rows-[2fr,1fr] border-solid border-2 border-[#68686869] rounded-md w-[200px] h-[120px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] group-hover:bg-slate-100 max-md:w-[102px] ">


                <img style={lastPartUrl=='projecticons'?{filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7486%) hue-rotate(234deg) brightness(107%) contrast(101%)'}:{}}  className='m-auto h-10' src={item} />


                <h2 className='group-hover:bg-gradient-to-r from-[#ffffff77] to-[#38383869] flex relative justify-center items-center text-xs cursor-pointer' onClick={() => showToastMessage(iconKey)}>
                    {iconKey}
                    <div  className=' absolute invisible  right-0 group-hover:visible'>
                        <MdOutlineContentCopy style={{
                            width: '30px',
                            height: '30px',
                            color: 'white'

                        }} />
                    </div>

                </h2>


            </li>



        </>

    )
}