import React from 'react'
import Nav from "./Nav/Nav"
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <div>
            <div>
                <Nav/>
                <div className="mt-5 container">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Root
