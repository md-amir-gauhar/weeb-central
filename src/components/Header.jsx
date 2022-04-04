import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import { useWishlist } from '../context/wishlistContext'
import { useCart } from '../context/cartContext'
import { useAuth } from '../context/AuthContext'

import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { GiBeachBag, GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'

import '../styles/Header.css'

const Header = () => {
  const [open, setOpen] = useState(false)
  const { wishlist } = useWishlist()
  const { cart } = useCart()
  const { isUser, token } = useAuth()

  console.log(isUser, token);
  return (
    <header className='header'>
      <Link to="/" className="header__logo">
        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/448/6912714448_9edc9c6b-9f6f-4c63-b41d-a281fee79431.png?cb=1646331383" alt="logo" />
      </Link>

      <div onClick={() => setOpen(open => !open)} className="mobile-nav-toggle">
        {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      <nav className={`navbar flex ${open ? "navbar-visible" : ""} `}>
        <div className="navbar__right flex align-center">
          {
            isUser ? (
              <Link to='#' className="flex align-center">
                <FaUserCircle />
                <span>User</span>
              </Link>
            ) : (<Link to='/auth' className="login flex align-center">LOGIN/SIGNUP</Link>
            )}
          <Link to='/wishlist' className='wishlist-link flex align-center'>
            <AiFillHeart style={{
              color: 'red'
            }} />
            <span>Wishlist</span>
            {wishlist.length > 0 ? <span className='wishlist-length'>{wishlist.length}</span> : ""}
          </Link>
          <Link to='/cart' className='cart-link flex align-center'>
            <GiBeachBag style={{
              color: '#d97706'
            }} />
            <span>Cart</span>
            {cart.length > 0 ? <span className='cart-length' >{cart.length}</span> : ""}
          </Link>
        </div>
      </nav>
    </header >
  )
}

export default Header