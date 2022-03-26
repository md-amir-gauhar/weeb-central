import React from 'react'
import Card from './Card'

import { useData } from '../context/DataContext'

import '../styles/Products.css'

const Products = () => {
  const { products } = useData()

  return (
    <section className="products flex flex-col">
      <h3>Showing Manga (<span>{products.length} Items</span>)</h3>
      <div className="card-container flex justify-center">
        {
          products.map(({ _id, title, price, imgUrl, rating }) => (
            <Card
              key={_id}
              name={title}
              imgUrl={imgUrl}
              rating={rating}
              price={price}
              id={_id}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Products