import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import homepageillu from "../../assets/homepageillu.svg"
import candy1 from "../../assets/candy1.svg"
import candy2 from "../../assets/candy2.svg"
import candy3 from "../../assets/candy3.svg"
import candy4 from "../../assets/candy4.svg"
import candy5 from "../../assets/candy5.svg"
import candy6 from "../../assets/candy6.svg"
import shoe1 from "../../assets/nike-shoes1.jpg"
import shoe2 from "../../assets/nike-shoes2.jpg"
import shoe3 from "../../assets/nike-shoes3.jpg"
import shoe4 from "../../assets/nike-shoes4.jpg"
import shoe5 from "../../assets/nike-shoes5.jpg"
import shoe6 from "../../assets/nike-shoes6.jpg"
import Logo from "../../assets/logo.svg"
import {NavLink} from "react-router-dom"
import { Icon } from '@iconify/react';
import "./styles.css"
import Footer from '../../components/Footer'

const Home = () => {
  const ref = useRef()

  const scroll = (scrollOffSet) => {
    ref.current.scrollLeft += scrollOffSet;
  }
  return (
    <>
    <div className='container home-page-parent-container'>
      <div className='home-page-text-container'>
        <h1>Watch your steps with choosing your shoes to make people watch your steps.</h1>
        <p>Welcome to a place where you can buy freshest shoes on the planet and make people gaze at them. </p>

        <div className='home-page-btns-container'>
          <Link to="/shop" className='primary-btn'>
            Shop
            <Icon icon="material-symbols:arrow-right-alt-rounded" className='arrow-icon'/>
          </Link>
          <a href='#contact'>Contact</a>
        </div>
      </div>

      <div className='home-page-illu-container'>
        <img src={homepageillu} alt='homepageillu'/>
      </div>

      
      <img src={candy1} alt='candy1' className='candy candy1'/>
      <img src={candy2} alt='candy2' className='candy candy2'/>
      <img src={candy3} alt='candy3' className='candy candy3'/>
      <img src={candy4} alt='candy4' className='candy candy4'/>
      <img src={candy5} alt='candy5' className='candy candy5'/>
      <img src={candy6} alt='candy6' className='candy candy6'/>
    </div>
    <section className='latest-items-section container'>
        <h3>Latest Items</h3>
        <div className='latest-items-slider-parent-container'>
          <Icon icon="material-symbols:arrow-circle-left-rounded" className='latest-items-left-arrow' onClick={() => scroll(-80)}/>
          <div className='latest-items-slider-container' ref={ref}>
            <div className='latest-items-slider'>
                <div className='latest-items-card'>
                  <img src={shoe1} alt='shoe'/>
                  <p className='latest-item-title'>Nike Air Zoom Infinity Tour NEXT% NRG</p>
                  <p className='latest-item-price'>$180</p>
                  <Link to="#" className='secondary-btn'>
                    View Details
                  </Link>
                </div>
                <div className='latest-items-card'>
                  <img src={shoe2} alt='shoe'/>
                  <p className='latest-item-title'>LeBron XX</p>
                  <p className='latest-item-price'>$180</p>
                  <Link to="#" className='secondary-btn'>
                    View Details
                  </Link>
                </div>
                <div className='latest-items-card'>
                  <img src={shoe3} alt='shoe'/>
                  <p className='latest-item-title'>Nike Blazer Mid Pro Club</p>
                  <p className='latest-item-price'>$180</p>
                  <Link to="#" className='secondary-btn'>
                    View Details
                  </Link>
                </div>
                <div className='latest-items-card'>
                  <img src={shoe4} alt='shoe'/>
                  <p className='latest-item-title'>Nike Air Zoom Victory Tour 3 NRG</p>
                  <p className='latest-item-price'>$180</p>
                  <Link to="#" className='secondary-btn'>
                    View Details
                  </Link>
                </div>
                <div className='latest-items-card'>
                  <img src={shoe5} alt='shoe'/>
                  <p className='latest-item-title'>Nike Air Zoom Infinity Tour NEXT% NRG Nike Air Zoom Infinity Tour NEXT% NRG</p>
                  <p className='latest-item-price'>$180</p>
                  <Link to="#" className='secondary-btn'>
                    View Details
                  </Link>
                </div>
                <div className='latest-items-card'>
                  <img src={shoe6} alt='shoe'/>
                  <p className='latest-item-title'>Nike Air Zoom Infinity Tour NEXT% NRG Nike Air Zoom Infinity Tour NEXT% NRG</p>
                  <p className='latest-item-price'>$180</p>
                  <Link to="#" className='secondary-btn'>
                    View Details
                  </Link>
                </div>
            </div>
          </div>
         
          <Icon icon="material-symbols:arrow-circle-right-rounded" className='latest-items-right-arrow' onClick={() => scroll(80)}/>
        </div>
    </section>

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

        <div className='socials-container'>
          <Icon icon="bi:facebook" className='facebook-icon'/>
          <Icon icon="bi:telegram" className='telegram-icon'/>
        </div>

        <img src={candy1} alt='candy1' className='candy contact-candy1'/>
        <img src={candy2} alt='candy2' className='candy contact-candy2'/>
        <img src={candy3} alt='candy3' className='candy contact-candy3'/>
        <img src={candy4} alt='candy4' className='candy contact-candy4'/>
        <img src={candy5} alt='candy5' className='candy contact-candy5'/>
        <img src={candy6} alt='candy6' className='candy contact-candy6'/>
      </div>
    </section>

    <Footer/>
    </>
  )
}

export default Home