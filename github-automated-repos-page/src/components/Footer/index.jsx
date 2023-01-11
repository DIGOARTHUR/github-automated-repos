import React from 'react';
import './style.scss';
import { FiExternalLink } from 'react-icons/fi';
export function Footer() {
    return (
        <div className='footer_Container'>
            <div className='footer_Content'>

                <p>For every community belonging to the vastness of the Universe. 🖤 by: <a href="https://digoarthur.vercel.app">@digoarthur<FiExternalLink/></a> </p>
                <div className='footer_Credits'>
                   <p>Based in:</p> 
                    <a href="#">Api Github <FiExternalLink/></a>
                </div>
            </div>


        </div>
    )
}