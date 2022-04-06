import React from 'react'
import { AiFillTags } from 'react-icons/ai'
import { useCart } from '../context/cartContext'

import '../styles/Payment.css'

const Payment = () => {
  const { cart, price } = useCart()
  const quantity = cart.reduce((acc, val) => acc + val.quantity, 0)
  return (
    <section className="payment-checkout">
      <div className="coupons">
        <h3>Coupons</h3>
        <button><AiFillTags /> Apply Coupon</button>
      </div>
      <h3>Price Details: ({quantity} Items)</h3>
      <div className="total-mrp">
        <span>Total MRP</span>
        <span>₹{price}</span>
      </div>
      <div className="coupon">
        <span>Coupon Discount</span>
        <span>Apply Coupon</span>
      </div>
      <div className="convenience">
        <span>Convenience</span>
        <span>₹99</span>
      </div>
      <div className="total">
        <span>Total Amount</span>
        {
          price === 0 ? <span>₹{0}</span> : <span>₹{price + 99}</span>
        }
      </div>
      <button>Pay Now</button>
    </section>
  )
}

export default Payment