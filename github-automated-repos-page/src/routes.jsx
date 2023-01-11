import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { Documentation } from './pages/Documentation';
import { Home } from './pages/Home';
import { GettingStarted } from './pages/Documentation/components/GettingStarted';



export function RoutesWeb() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/documentation' element={<Documentation/>} />
                <Route path='/documentation/gettingStarted' element={<Documentation/>} />
                <Route path='/documentation/projectIcons' element={<Documentation/>} />
            </Routes>
        </Router>

    )
}