import React from 'react';
import './style.scss';
import { FiExternalLink } from 'react-icons/fi';
export function Footer() {
    return (
        <div className='footer_Container'>
            <div className='footer_Content'>
                <div className='footer_Thanks'>
                <p>For every community belonging to the vastness of the Universe. 🖤 by: <a href="https://digoarthur.vercel.app" target="_blank">@digoarthur<FiExternalLink/></a> </p>
                </div>
                
                <div className='footer_Credits'>
                   <p>Based in:</p> 
                    <a href="https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository" target="_blank">Api Github <FiExternalLink/></a>
                </div>
            </div>


        </div>
    )
}