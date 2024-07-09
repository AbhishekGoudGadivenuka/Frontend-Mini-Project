import React from 'react'
import Navi from './navbar/Navi'
import Foot from './footer/Foot'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
        <Navi/>
        <div style={{minHeight:'80vh'}}>
        <Outlet/>
        </div>

        <Foot/>
    </div>
  )
}

export default RootLayout