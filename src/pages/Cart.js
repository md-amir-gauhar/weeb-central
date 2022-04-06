import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineClose } from 'react-icons/ai'
import { ImSad } from 'react-icons/im'
import { GiBeachBag } from 'react-icons/gi'
import Address from '../components/Address'
import Payment from '../components/Payment'
import { useCart } from '../context/cartContext'
import { useWishlist } from '../context/wishlistContext'

import '../styles/Cart.css'

const Cart = () => {
  const { addToWishlist } = useWishlist()
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

  return (
    <main className='cart' >
      {cart.length === 0 ? (
        <div className='empty-cart flex align-center justify-center flex-col'>
          <h1 className='flex align-center justify-center'>
            <span>Your cart is empty</span><ImSad /></h1>
          <Link to="/products/manga" >
            Continue Shopping
          </Link>
        </div>
      ) : (<>
        <h2 className="title">My Bag <GiBeachBag /></h2>
        <div className="checkouts flex">
          <section className="checkout flex flex-col">
            <Address />
            <div className="card-container flex">
              {
                cart.map(({ id, name, imgUrl, price, quantity, rating }) => (
                  <div className="checkout-card flex" key={id}>
                    <img
                      src={imgUrl}
                      alt="manga"
                    />
                    <AiOutlineClose className='remove-btn' onClick={() => removeFromCart({ id })} />
                    <div className="checkout-card-details flex flex-col">
                      <p>{name}</p>
                      <span>₹{price}</span>
                      <div className="quantity flex align-center">
                        <span>Quantity:</span>
                        <div className="quantity-details flex align-center">
                          <AiFillCaretLeft onClick={() => decreaseQuantity({ id, quantity })} />
                          <span className="amount">{quantity}</span>
                          <AiFillCaretRight onClick={() => increaseQuantity({ id, name, imgUrl, price, quantity, rating })} />
                        </div>
                      </div>

                      <button onClick={() => addToWishlist({ id, name, imgUrl, rating, price })
                      }>Move to Wishlist</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
          <Payment />
        </div>
      </>

      )
      }

    </main >
  )
}

export default Cart