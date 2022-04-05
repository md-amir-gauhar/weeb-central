import React from 'react'
import { Link } from 'react-router-dom'
import { ImSad } from 'react-icons/im'
import { useLocation } from 'react-router-dom'
import Card from '../components/Card'
import { useWishlist } from '../context/wishlistContext'
import '../styles/Wishlist.css'

const WishList = () => {
  const location = useLocation()

  const pathname = location.pathname.split('').splice(1).join('')
  const { wishlist } = useWishlist()
  return (
    <main className="wishlist-container">
      {
        wishlist.length === 0 ? (
          <div className='empty-wishlist flex align-center justify-center flex-col'>
            <h1 className='flex align-center justify-center'>
              <span>Your Wishlist is empty</span><ImSad /></h1>
            <Link to="/products/manga" >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <h2>My Wishlist</h2>
            <section className="wishlists">
              {
                wishlist.map(({ id, name, imgUrl, price, rating }) => (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    imgUrl={imgUrl}
                    rating={rating}
                    price={price}
                    pathname={pathname}
                  />
                ))
              }
            </section>
          </>
        )
      }

    </main>
  )
}

export default WishList