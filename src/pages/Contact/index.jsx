import React from 'react'
import "./styles.css"
import candy1 from "../../assets/candy1.svg"
import candy2 from "../../assets/candy2.svg"
import candy3 from "../../assets/candy3.svg"
import candy4 from "../../assets/candy4.svg"
import candy5 from "../../assets/candy5.svg"
import candy6 from "../../assets/candy6.svg"
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <section className='contact-us-section container'>
    <h3>Contact Us</h3>
    <div className='contact-us-container'>
      <div className='name-input-container'>
        <input type='text' placeholder=' '></input>
        <p className='input-label'>Name</p>
      </div>
      <div className='email-input-container'>
        <input type='email' placeholder=' '></input>
        <p className='input-label'>Email</p>
      </div>
      <div className='message-input-container'>
        <textarea placeholder=' '></textarea>
        <p className='input-label'>Message</p>
      </div>

      <button className='primary-btn'>Send</button>

      <img src={candy1} alt='candy1' className='candy contact-candy1'/>
      <img src={candy2} alt='candy2' className='candy contact-candy2'/>
      <img src={candy3} alt='candy3' className='candy contact-candy3'/>
      <img src={candy4} alt='candy4' className='candy contact-candy4'/>
      <img src={candy5} alt='candy5' className='candy contact-candy5'/>
      <img src={candy6} alt='candy6' className='candy contact-candy6'/>
    </div>
    <h3 className='contact-page-or'>OR</h3>
    <div className='contact-page-socials'>
      <p>You can directly contact us on</p>
      <div className='contact-page-social-icons'>
        <Icon icon="bi:facebook" className='facebook-icon'/>
        <Icon icon="bi:telegram" className='telegram-icon'/>
      </div>
    </div>
  </section>
  )
}

export default Contact