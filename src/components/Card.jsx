import React from 'react'
import { AiFillHeart, AiFillStar, AiOutlineClose } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { useWishlist } from '../context/wishlistContext'
import { useCart } from '../context/cartContext';

import '../styles/Card.css'

const Card = ({ name, imgUrl, rating, price, pathname, id }) => {
  const { addToWishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const addToWishlistHandler = () => {
    addToWishlist({ id, name, imgUrl, rating, price })
  }

  const removeFromWishlistHandler = () => {
    removeFromWishlist({ id, name, imgUrl, rating, price })
  }

  const addToCartHandler = () => {
    addToCart({ id, name, imgUrl, rating, price, quantity: 1 })
  }

  return (
    <div className='card'>
      <img
        src={imgUrl}
        alt="manga"
      />
      <button className='wishlist'>
        {pathname ? (
          <div className='remove-btn flex align-center justify-center'>
            <AiOutlineClose onClick={removeFromWishlistHandler} style={{ color: 'black', fontSize: '1.5rem' }} />
          </div>
        ) : (
          <AiFillHeart onClick={addToWishlistHandler} style={{ color: 'red' }} />
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
      <button className='cart-button flex align-center justify-center' onClick={(addToCartHandler)} ><span>Move to Bag</span> <BsBagCheck /></button>
      
    </div>
  )
}

export default Card