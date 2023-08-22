
import './App.css'

import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import StackIcons from './pages/StackIcons.jsx'
import GettingStart from './pages/GettingStart'
import ProjectIcons from './pages/ProjectIcons'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<Home/>} />
      <Route path='/stackicons' element={<StackIcons />} />
      <Route path='/gettingstart' element={<GettingStart/>} />
      <Route path='/projecticons' element={<ProjectIcons/>} />
    </Route>
  )
)



function App() {


  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}



const Root = () => {
  return (
    <>

    </>
  )
}

export default App
