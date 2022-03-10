import React from 'react'

import { NavLink } from 'react-router-dom'

  function _NavBarCP() {
  return (
    <nav className='sidenav CPNav'>
      <ul>
        <l1>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">HomePage</NavLink> 
        </l1>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project30">Project 30</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project31">Project 31</NavLink>
        </li> 
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project32">Project 32</NavLink>
        </li>  
      </ul> 
      
      
      </nav>
  )
}

export default _NavBarCP;