import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/home/Home'
import AppNavbar from './components/AppNavbar/AppNavbar'
import LatestArticles from './components/home/LatestArticles'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import All from './components/Blog/All'
import Light from './components/Blog/Light'
import Portrait from './components/Blog/Portrait'
import Natural from './components/Blog/Natural'
import Tech from './components/Blog/Tech'
import Element from './components/Blog/Element'


const router = createBrowserRouter([
  {
    path: "", element: <AppNavbar />, children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog />, children: [{ path: "all", element: <All /> }, { path: "light", element: <Light /> }, { path: "portrait", element: <Portrait /> }, { path: "natural", element: <Natural /> }, { path: "tech", element: <Tech /> }, { path: "element", element: <Element /> }] },
      { path: "about", element: <About /> },
    ]
  },
])
function App() {

  return (
    <RouterProvider router={router} />

  )
}

export default App
