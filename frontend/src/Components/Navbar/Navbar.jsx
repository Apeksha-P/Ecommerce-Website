import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart.png'

const Navbar = () => {

    const [menu,setmenu]=useState("shop")
    
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}>Shop{menu==="shop"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("mens")}}>Men{menu==="mens"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("womens")}}>Women{menu==="womens"?<hr/>:null}</li>
        <li onClick={()=>{setmenu("kids")}}>Kids{menu==="kids"?<hr/>:null}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
