import React from 'react'

import { NavLink } from 'react-router-dom'

  function _NavBarCM() {
  return (
    <nav className='sidenav HWNav'>
      <ul>
        <l1>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">HomePage</NavLink> 
        </l1>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week9_01">W9 First App</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week9_02">W9 JSX</NavLink>
        </li> 
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week9_03">Week9 Forms</NavLink>
        </li>  
      </ul> 
      
      
      </nav>
  )
}

export default _NavBarCM