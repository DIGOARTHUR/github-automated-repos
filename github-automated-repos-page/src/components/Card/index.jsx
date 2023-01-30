
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineContentCopy } from 'react-icons/md';
import './style.scss';

import React from 'react';
export function Card({item, iconKey}) {
    
    const showToastMessage = (iconKey) => {
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
            <li className="card">

 
                <img src={item}></img>

                <h2 onClick={() => showToastMessage(iconKey)}>
                    {iconKey}
                    <span><MdOutlineContentCopy style={{
                        width: '30px',
                        height: '30px',
                        color: 'white'

                    }} /></span>
                  
                </h2>
                
            </li>
         
            
         
        </>

    )
}