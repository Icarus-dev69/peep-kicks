import React from 'react'
import "./styles.css"
import { useParams } from 'react-router-dom'
import shoe1 from "../../assets/pegasus1.webp"
import shoe2 from "../../assets/pegasus2.webp"
import shoe3 from "../../assets/pegasus3.webp"
import shoe4 from "../../assets/pegasus4.webp"
import shoe5 from "../../assets/pegasus5.webp"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import ImageSlider from './ImageSlider'
import Footer from '../../components/Footer'


const ItemDetails = () => {
    const {id} = useParams()
  return (
    <>
    <div className='container'>
    <Link to="/shop" className='go-back-to-shop'>
      <Icon icon="material-symbols:arrow-right-alt-rounded" className='arrow-icon'/>
      <p>Shop</p>
    </Link>
    <div className='item-details-parent-container'>
        <div className='item-details-imgs-parent-container'>
            <ImageSlider />
        </div>

        <div className='item-details-details-container'>
          <h1>Nike Pegasus 39</h1>
          <p className='small-text'>Mens' shoes</p>

          <h2>$ 110</h2>

          <div className='shoe-size-parent-container'>
            <div className='shoe-size-header'>
              <p>Select size</p>
              <Link to="/sizeGuide">Size Guide</Link>
            </div>

            <div className='shoe-sizes-container'>
              <label htmlFor='3.5'>
                <input type='checkbox' name='shoe-size' id='3.5'></input>
                3.5
              </label>
              <label htmlFor='4'>
                <input type='checkbox' name='shoe-size' id='4'></input>
                4
              </label>
              <label htmlFor='4.5'>
                <input type='checkbox' name='shoe-size' id='4.5'></input>
                4.5
              </label>
              <label htmlFor='5'>
                <input type='checkbox' name='shoe-size' id='5'></input>
                5
              </label>
              <label htmlFor='5.5'>
                <input type='checkbox' name='shoe-size' id='5.5'></input>
                5.5
              </label>
              <label htmlFor='6.5'>
                <input type='checkbox' name='shoe-size' id='6.5'></input>
                6.5
              </label>
              <label htmlFor='7'>
                <input type='checkbox' name='shoe-size' id='7'></input>
                7
              </label>
              <label htmlFor='7.5'>
                <input type='checkbox' name='shoe-size' id='7.5'></input>
                7.5
              </label>
              <label htmlFor='8'>
                <input type='checkbox' name='shoe-size' id='8'></input>
                8
              </label>
              <label htmlFor='8.5'>
                <input type='checkbox' name='shoe-size' id='8.5'></input>
                8.5
              </label>
              <label htmlFor='9'>
                <input type='checkbox' name='shoe-size' id='9'></input>
                9
              </label>
              <label htmlFor='9.5'>
                <input type='checkbox' name='shoe-size' id='9.5'></input>
                9.5
              </label>
              <label htmlFor='10'>
                <input type='checkbox' name='shoe-size' id='10'></input>
                10
              </label>
            </div>

            <button className='primary-btn'>Add to cart</button>
          </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ItemDetails