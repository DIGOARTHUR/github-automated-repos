import React from 'react';

import './style.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export function Sidebar() {
    return (
        <div className='sidebar_Container'>
            <ul className='sidebar_Content'>
                <li>
                    <Link
                        to='/documentation/gettingStarted'
                        className={useLocation().pathname === '/documentation/gettingStarted' ? 'click-link' : 'link'}
                    >
                        Getting Started
                    </Link>
                </li>
                <li>
                    <Link
                        to='/documentation/projectIcons'
                        className={useLocation().pathname === '/documentation/projectIcons' ? 'click-link' : 'link'}
                    >
                        Project Icons
                    </Link>
                </li>
                <li>
                    <Link to='/documentation/stackIcons' className={useLocation().pathname === '/documentation/stackIcons' ? 'click-link' : 'link'}>
                        Stacks Icons
                    </Link>
                </li>
            </ul>
        </div>
    );
}
