
import './App.css'

import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import IconStacks from './pages/IconStack.jsx'
import GettingStart from './pages/GettingStart'
import IconsProject from './pages/IconsProject'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<Home/>} />
      <Route path='/iconstack' element={<IconStacks />} />
      <Route path='/gettingstart' element={<GettingStart/>} />
      <Route path='/iconsproject' element={<IconsProject/>} />
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
