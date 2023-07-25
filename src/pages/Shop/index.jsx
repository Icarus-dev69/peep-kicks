import React,{useState} from 'react'
import "./styles.css"
import shoe1 from "../../assets/nike-shoes1.jpg"
import shoe2 from "../../assets/nike-shoes2.jpg"
import shoe3 from "../../assets/nike-shoes3.jpg"
import shoe4 from "../../assets/nike-shoes4.jpg"
import shoe5 from "../../assets/nike-shoes5.jpg"
import shoe6 from "../../assets/nike-shoes6.jpg"
import {NavLink ,Link} from "react-router-dom"
import { Icon } from '@iconify/react';

const Shop = () => {
  const [brands, setBrands] = useState({
    languages: [],
    response: [],
  });
  const [gender,setGender] = useState('All')
  const [filtersOpen,setFiltersOpen] = useState(false)

  const handleGenderChange = (e) => {
    setGender(e.target.value)
    // console.log(gender)
  } 
  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = brands;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setBrands({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setBrands({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };
  return (
    <>
      <div className={filtersOpen ? 'filters-overlay filters-overlay-open' : "filters-overlay"}></div>
      <div className={filtersOpen ? 'shop-filters-container filters-open' : 'shop-filters-container'}>
        <Icon icon="gridicons:cross-circle" className='shop-filters-close-icon' onClick={() => setFiltersOpen(false)}/>
        <div className='shop-price-filter-container'>
          <h3>Price</h3>
          <div className='shop-price-input-container'>
            <div className='shop-price-input'>
              <button className='shop-price-minus-btn'>-</button>
              <input type='number' min="0"></input>
              <button className='shop-price-plus-btn'>+</button>
            </div>
            <p className='shop-price-currency'>MMK</p>
          </div>
        </div>
        <div className='shop-brand-filer-container'>
          <h3>Brand</h3>
          <div className='shop-brand-checkboxes-container'>
            <div className='shop-brand-checkbox'>
              <input
                type="checkbox"
                name="brands"
                value="nikes"
                id="nikes"
                onChange={handleChange}
              />
              <label htmlFor="nikes">
                  Nikes
              </label>
            </div>
            <div className='shop-brand-checkbox'>
              <input
                type="checkbox"
                name="brands"
                value="adidas"
                id="adidas"
                onChange={handleChange}
              />
              <label htmlFor="adidas">
                  Adidas
              </label>
            </div>
            <div className='shop-brand-checkbox'>
              <input
                type="checkbox"
                name="brands"
                value="vans"
                id="vans"
                onChange={handleChange}
              />
              <label htmlFor="vans">
                  Vans
              </label>
            </div>
            <div className='shop-brand-checkbox'>
              <input
                type="checkbox"
                name="brands"
                value="puma"
                id="puma"
                onChange={handleChange}
              />
              <label htmlFor="puma">
                  Puma
              </label>
            </div>
            <div className='shop-brand-checkbox'>
              <input
                type="checkbox"
                name="brands"
                value="converse"
                id="converse"
                onChange={handleChange}
              />
              <label htmlFor="converse">
                  Converse
              </label>
            </div>
          </div>
        </div>
        <div className='shop-gender-filter-container'>
          <h3>Gender</h3>
          <div className='shop-gender-radio-container' >
            <div className='shop-gender-radio'>
              <input type="radio" value="All" name="gender" id="all" checked={gender === "All"} onChange={(e) => handleGenderChange(e)}/>
              <label htmlFor='all'>All</label>
            </div>
            <div className='shop-gender-radio'>
              <input type="radio" value="Male" name="gender" id="male" checked={gender === "Male"} onChange={(e) => handleGenderChange(e)}/>
              <label htmlFor='male'>Male</label>
            </div>
            <div className='shop-gender-radio'>
              <input type="radio" value="Female" name="gender" id='female' checked={gender === "Female"} onChange={(e) => handleGenderChange(e)}/>
              <label htmlFor='female'>Female</label>
            </div>
          </div>
        </div>

        <div className='shop-filters-brand-container'>
          <button className='primary-btn'>Filter</button>
          <button className='secondary-btn'>Clear</button>
        </div>
      </div>
      <div className='container'>
        <div className='filter-toggle-btn' onClick={() => setFiltersOpen(true)}>
          <Icon icon="mdi:filter" className='filter-icon'/>
          <p>Filters</p>
        </div>
        <div className='shop-cards-parent-container'>
          <div className='shop-card'>
            <img src={shoe1} alt='shoe'/>
            <p className='shop-title'>Nike Air Zoom Infinity Tour NEXT% NRG</p>
            <p className='shop-price'>$180</p>
            <Link to="/shop/itemdetails/1" className='secondary-btn'>
              View Details
            </Link>
          </div>
          <div className='shop-card'>
            <img src={shoe1} alt='shoe'/>
            <p className='shop-title'>Nike Air Zoom Infinity Tour NEXT% NRG</p>
            <p className='shop-price'>$180</p>
            <Link to="/shop/itemdetails/1" className='secondary-btn'>
              View Details
            </Link>
          </div>
          <div className='shop-card'>
            <img src={shoe1} alt='shoe'/>
            <p className='shop-title'>Nike Air Zoom Infinity Tour NEXT% NRG</p>
            <p className='shop-price'>$180</p>
            <Link to="/shop/itemdetails/1" className='secondary-btn'>
              View Details
            </Link>
          </div>
          <div className='shop-card'>
            <img src={shoe1} alt='shoe'/>
            <p className='shop-title'>Nike Air Zoom Infinity Tour NEXT% NRG</p>
            <p className='shop-price'>$180</p>
            <Link to="/shop/itemdetails/1" className='secondary-btn'>
              View Details
            </Link>
          </div>
          <div className='shop-card'>
            <img src={shoe1} alt='shoe'/>
            <p className='shop-title'>Nike Air Zoom Infinity Tour NEXT% NRG</p>
            <p className='shop-price'>$180</p>
            <Link to="/shop/itemdetails/1" className='secondary-btn'>
              View Details
            </Link>
          </div>
          <div className='shop-card'>
            <img src={shoe1} alt='shoe'/>
            <p className='shop-title'>Nike Air Zoom Infinity Tour NEXT% NRG</p>
            <p className='shop-price'>$180</p>
            <Link to="/shop/itemdetails/1" className='secondary-btn'>
              View Details
            </Link>
          </div>
          <div className='shop-card'>
            <img src={shoe1} alt='shoe'/>
            <p className='shop-title'>Nike Air Zoom Infinity Tour NEXT% NRG</p>
            <p className='shop-price'>$180</p>
            <Link to="/shop/itemdetails/1" className='secondary-btn'>
              View Details
            </Link>
          </div>
          <div className='shop-card'>
            <img src={shoe1} alt='shoe'/>
            <p className='shop-title'>Nike Air Zoom Infinity Tour NEXT% NRG</p>
            <p className='shop-price'>$180</p>
            <Link to="/shop/itemdetails/1" className='secondary-btn'>
              View Details
            </Link>
          </div>
          <div className='shop-card'>
            <img src={shoe1} alt='shoe'/>
            <p className='shop-title'>Nike Air Zoom Infinity Tour NEXT% NRG</p>
            <p className='shop-price'>$180</p>
            <Link to="/shop/itemdetails/1" className='secondary-btn'>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Shop