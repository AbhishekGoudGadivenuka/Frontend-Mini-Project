import React from 'react'
import './nav.css'
import {NavLink} from 'react-router-dom'
function Navi() {
  return (
    <div className='list'>
    <ul className="nav justify-content-end">
  <li className="nav-item">
    <NavLink className="nav-link" to=''>
        Home
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to='login'>
        Login
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to='register'>
       Register
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to='technologies'>
        Technologies
    </NavLink>
  </li>
</ul>
</div>
  )
}

export default Navi