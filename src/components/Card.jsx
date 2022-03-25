import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillHeart, AiFillStar, AiOutlineClose } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'

import '../styles/Card.css'

const Card = ({ name, imgUrl, rating, price, pathname, id }) => {

  return (
    <div className='card'>
      <img
        src={imgUrl}
        alt="manga"
      />
      <button className='wishlist'>
        {pathname ? (
          <AiOutlineClose style={{ color: 'black', fontSize: '1.5rem' }} />) : (
          <AiFillHeart style={{ color: 'red' }} />
        )}
      </button>
      <div className="details">
        <p>{name}</p>
        <div className="details-bottom">
          <span className='rating'>
            <span>{rating}</span>
            <AiFillStar style={{ color: 'gold' }} />
          </span>
          <span className='price'>₹{price}</span>
        </div>
      </div>
      <button className='cart-button flex align-center justify-center'><span>Move to Bag</span> <BsBagCheck /></button>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}

export default Card