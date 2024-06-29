import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
function Rootlayout() {
  return (
    <div >
        <Navbar/>

        <div >
        <Outlet/>
        </div>

    </div>
  )
}

export default Rootlayout