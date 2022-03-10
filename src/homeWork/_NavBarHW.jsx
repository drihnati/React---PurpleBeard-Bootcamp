import React from 'react'

import { NavLink } from 'react-router-dom'

  function _NavBarHW() {
  return (
    <nav className='sidenav HWNav'>
      <ul>
        <l1>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">HomePage</NavLink> 
        </l1>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/homeWork/homework1">Homework 1</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/homeWork/homework2">Homework 2</NavLink>
        </li> 
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/homeWork/homework3">Homework 3</NavLink>
        </li>  
      </ul> 
      
      
      </nav>
  )
}

export default _NavBarHW