import { useState } from 'react'
import './App.css'
import NavBar from './components/Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import ItemDetails from './pages/ItemDetails'
import SizeGuide from './pages/SizeGuide'
import Cart from './pages/Cart'



function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/itemdetails/:id" element={<ItemDetails/>}/>
        <Route path="/sizeGuide" element={<SizeGuide/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="*" element={<Home/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
