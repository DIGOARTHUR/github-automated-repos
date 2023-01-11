import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom'
export function Sidebar() {
    return(
        <div className="list_Container">
           <ul className="list_Content">
            <li>
                <Link to='/documentation/gettingStarted' className="link">Getting Started</Link>
            </li>
            <li>
                <Link to='/documentation/projectIcons' className="link">Project Icons</Link>
            </li>
            <li>
                <a href='#' className="link">Stacks Icons</a>
            </li>
           </ul>
        </div>
    )
}