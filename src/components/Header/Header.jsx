import React from 'react'
import h from './Header.module.css';

const Header = () => {
    return <header className={h.header}>
      <img className={h.logo} src="../public/logo.png"/>
      <h2>Social Network</h2>
      <button className={h.header__btn}><img className={h.header__imgBtn} src="./public/content/exit.png"/></button>
    </header>
} 

export default Header;