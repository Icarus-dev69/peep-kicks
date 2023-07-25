import React, { useState } from 'react'
import "./styles.css"
import Logo from "../../assets/logo.svg"
import {NavLink} from "react-router-dom"
import { Icon } from '@iconify/react';

const NavBar = () => {
  const [navOpen,setNavOpen] = useState(false)
  return (
    <div className='nav-bar-container'>
      <div className='nav-bar container'>
        <NavLink to="/" className='logo-container'>
          <img src={Logo} alt="logo"/>
          <p>peepkicks</p>
        </NavLink>

        <div className={navOpen ? 'navlinks-container navlinks-open show' : 'navlinks-container hide'}>
          <div className='navlinks-close-container'>
            <Icon icon="gridicons:cross-circle" className='navlinks-close-icon' onClick={() => setNavOpen(false)}/>
          </div>
          <NavLink onClick={() => setNavOpen(false)} to="/" className={({isActive}) => (isActive ? 'active-link' : "")}>Home</NavLink>
          <NavLink onClick={() => setNavOpen(false)} to="/contact" className={({isActive}) => (isActive ? 'active-link' : "")}>Contact</NavLink>
          <NavLink onClick={() => setNavOpen(false)} to="/shop" className={({isActive}) => (isActive ? 'active-link' : "")}>Shop</NavLink>
          <NavLink onClick={() => setNavOpen(false)} to="/cart" className='cart-link'>
            <Icon icon="ph:shopping-cart-simple-bold" className='cart-icon'/>
            <div className='cart-items'>
              <span>0</span>
            </div>
          </NavLink>
        </div>

        <Icon icon="solar:hamburger-menu-bold" className='burger-icon' onClick={() => setNavOpen(true)}/>
        <div className={navOpen ? 'navlinks-overlay overlay-open show' : 'navlinks-overlay hide'}></div>
      </div>
    </div>
  )
}

export default NavBar