import React from 'react'
import n from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkNav = ({ isActive, isPending }) =>
  isPending ? `${n.pending}` : isActive ? `${n.active}` : {}
    return <div className={n.navbar}>
        <NavLink 
          to="/Tasks" 
          className={linkNav}>
          Tasks
        </NavLink>
        <NavLink 
          to="/profile" 
          className={linkNav}>
          Profile
        </NavLink>
        <NavLink 
          to="/news"
          className={linkNav}>
          News
        </NavLink>
        <NavLink 
          to="/dialogs" 
          className={linkNav}>
          Dialogs
        </NavLink>
        <NavLink 
          to="/knowledge"
          className={linkNav}>
          Knowledge
        </NavLink>
      <br/>
        <NavLink 
          to="/settings" 
          className={linkNav}>
          Settings
        </NavLink>
    </div>
  } 

export default Navbar;