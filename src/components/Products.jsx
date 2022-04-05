import React from 'react'
import Card from './Card'

import { useData } from '../context/DataContext'

import '../styles/Products.css'
import { filterData, sortData } from '../utils'

const Products = () => {
  const { products, categories, sortByPrice, sortByRating } = useData()

  const filteredData = filterData(products, categories)

  const sortedData = sortData([...filteredData], sortByPrice, sortByRating)

  return (
    <section className="products flex flex-col">
      <h3>Showing Manga (<span>{products.length} Items</span>)</h3>
      <div className="card-container flex justify-center">
        {
          sortedData.map(({ _id, title, price, imgUrl, rating }) => (
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