import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { GiBeachBag, GiHamburgerMenu } from 'react-icons/gi'
import { IoMdArrowDropdown } from 'react-icons/io'

import '../styles/Header.css'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [toggleDown, setToggleDown] = useState(false)
  return (
    <header className='header'>
      <div className="header__logo">
        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/448/6912714448_9edc9c6b-9f6f-4c63-b41d-a281fee79431.png?cb=1646331383" alt="logo" />
      </div>

      <div onClick={() => setOpen(open => !open)} className="mobile-nav-toggle">
        {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      <nav className={`navbar flex align-center justify-between ${open ? "navbar-visible" : ""} `}>
        <div className="navbar__left flex align-center">
          <Link to='/'>Home</Link>
          <div className="dropdown">
            <Link to='#' onClick={() => setToggleDown(!toggleDown)}>PRODUCTS <IoMdArrowDropdown /></Link>
            {toggleDown && <ul className="dropdown__items">
              <li><Link to="/product/manga">Manga</Link></li>
              <li><Link to="#">Blu-rays</Link></li>
              <li><Link to="#">Merchandise</Link></li>
              <li><Link to="#">Accessories</Link></li>
            </ul>}
          </div>
          <Link to='#' >About Us</Link>
        </div>
        <div className="navbar__right flex align-center">
          <Link to='/auth' className="login flex align-center">LOGIN/SIGNUP</Link>
          <Link to='/wishlist' className='flex align-center'>
            <AiFillHeart style={{
              color: 'red'
            }} />
            <span>Wishlist</span>
          </Link>
          <Link to='/cart' className='flex align-center'>
            <GiBeachBag style={{
              color: '#d97706'
            }} />
            <span>Bag</span>
          </Link>
        </div>
      </nav>
    </header >
  )
}

export default Header