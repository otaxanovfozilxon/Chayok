import React, { useState } from 'react'
import "./Navbar.css"
import { FiSearch } from "react-icons/fi"
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineHome } from "react-icons/ai"
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const { pathname } = useLocation()
  const [show, setShow] = useState(false)
  
  if ( pathname.includes("admin") ){
    return <></>
  }

  return (
    <div className='navbar container'>
      <div className="navbar_top">
        <NavLink to={"/"} className='nav_logo'>
           <h2>Chayok</h2>
        </NavLink>
        <div className="nav_search">
            <input type="text" placeholder='Mahsulotlarni qidirish' />
            <button>
            <FiSearch />
            </button>
        </div>
        <div className="nav_icons">
          <NavLink to={"/"} className='nav_item nav_none'>
            <AiOutlineHome />
              <span>Bosh sahifa</span>
          </NavLink>

            <NavLink to={"/login"} className='nav_item nav_nonee'>
                <AiOutlineUser />
                <span>Kirish</span>
            </NavLink>
            <NavLink to={"/wishlist"} className='nav_item'>
                <AiOutlineHeart />
                <span>Sevimlilar</span>
            </NavLink>
            <NavLink to={"/cart"} className='nav_item'>
                <AiOutlineShoppingCart />
                <span>Savatcha</span>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
