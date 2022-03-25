import React from 'react'
import Card from './Card'

import '../styles/Products.css'


const Products = ({manga}) => {
  return (
    <section className="products">
      <h2>Mangas</h2>
      <div className="card-container">
        {
          manga.map(({ _id, title, price, imgUrl, rating }) => (
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