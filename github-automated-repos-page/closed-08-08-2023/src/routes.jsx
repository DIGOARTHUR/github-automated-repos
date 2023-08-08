import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Documentation } from './pages/Documentation';
import { Home } from './pages/Home';

export function RoutesWeb() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/documentation/gettingStarted' element={<Documentation />} />
                <Route path='/documentation/gettingStarted' element={<Documentation />} />
                <Route path='/documentation/projectIcons' element={<Documentation />} />
                <Route path='/documentation/stackIcons' element={<Documentation />} />
            </Routes>
        </Router>
    );
}
