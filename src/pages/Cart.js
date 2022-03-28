import React from 'react'
import { AiFillCaretLeft, AiFillCaretRight, AiFillTags } from 'react-icons/ai'
import { BsTrashFill } from 'react-icons/bs'
import { GiBeachBag } from 'react-icons/gi'
import Address from '../components/Address'

import '../styles/Cart.css'

const Cart = () => {
  return (
    <main className='cart'>
      <h2 className="title">My Bag <GiBeachBag /></h2>
      <div className="checkouts flex">
        <section className="checkout flex flex-col">
          <Address />
          <div className="card-container"></div>
        </section>
        <section className="payment-checkout"></section>
      </div>
    </main>
  )
}

export default Cart