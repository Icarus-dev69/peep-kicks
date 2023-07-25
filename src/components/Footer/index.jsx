import React from 'react'
import "./styles.css"
import Logo from "../../assets/logo.svg"
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <section className='footer-section'>
      <div className='footer-container container'>
          <NavLink to="/" className='logo-container'>
            <img src={Logo} alt="logo"/>
            <p>peepkicks</p>
          </NavLink>

          <div className='footer-links-container'>
            <h3>Links</h3>
            <div className='footer-links'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/cart">Cart</NavLink>
            </div>
          </div>

          <div className='footer-socials-container'>
            <h3>Socials</h3>
            <div className='footer-socials'>
              <Icon icon="bi:facebook" className='facebook-icon'/>
              <Icon icon="bi:telegram" className='telegram-icon'/>
            </div>
          </div>

          
      </div>
      <p className='copyright'>Copyright © 2023 peepkicks All rights reserved.</p>
    </section>
  )
}

export default Footer