import React from 'react'
import './Nav.css'
import Fashion from '../Men/Men'
import Accessories from '../Women/Women'
import HomeAppliances from '../Beauty'
import {NavLink,Link} from 'react-router-dom'
function Nav() {
    return (
        <div className='navp'>
            <nav class="navbar ">
                
  <div class="container-fluid">
  <img src="https://play-lh.googleusercontent.com/7LKOh3YaeamtCOlhFKFl8oMXl2ee_8ybXE3Ky4TCNrGXEirAJ8NEkEfsj-GazRGg3Q "width={75} alt="..."/>
    <div className='fs text-dark'>Online shopping is amazing! Whenever my orders arrive, it feels like I’m receiving presents...!</div>
    <div className='d-flex  mx-2'>
      
   <Link  to="/men" className="link"> <Fashion/></Link>
   <Link  to="/Women" className="link"> <Accessories/></Link>
   <Link  to="/Beauty" className="link"> <HomeAppliances/></Link>
    </div>
  </div>
</nav>
        </div>
    )   
}

export default Nav
 