import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Technologies() {
  return (
    <div>
        <h1 className='display-2 text-light bg-secondary text-center'>Technologies</h1>
    <ul className="nav justify-content-center mt-5">
    <li className="nav-item">
      <Link className="nav-link" to='java'>
        Java
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to='NodeJs'>
          NodeJs
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to='vue'>
         vue
      </Link>
    </li>
  </ul>
  <Outlet/>
  </div>
  )
}

export default Technologies