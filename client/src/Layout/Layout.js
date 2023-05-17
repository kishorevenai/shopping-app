import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import './app.scss'

import React from 'react'

const Layout = () => {
  return (
    <div className="app">
       <Navbar/>
       <Outlet/>
    FOOTERS
    </div>
  )
}

export default Layout
