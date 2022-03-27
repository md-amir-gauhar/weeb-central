import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'

import { useData } from '../context/DataContext'

import '../styles/Filter.css'


const star = [4, 3, 2]

const Filter = () => {
  const { categories, dispatch, sortByPrice, sortByRating } = useData()

  const sortByPriceHandler = e => {
    dispatch({
      type: "SORT_BY_PRICE",
      payload: e.target.name
    })
  }

  const sortByRatingHandler = s => {
    dispatch({
      type: "SORT_BY_RATING",
      payload: s
    })
  }

  const checkboxHandler = (key, e) => {
    dispatch({
      type: 'CATEGORIES',
      payload: {
        [key]: e.target.checked
      }
    })
  }

  const isSortByPrice = type => sortByPrice && sortByPrice === type

  const isSortByRating = star => sortByRating && sortByRating === star

  const clearAllHandler = () => {
    dispatch({
      type: "CLEAR_ALL",
      payload: categories
    })
  }

  return (
    <section className="filter-container">
      <div className='filter'>
        <div className="filter-header">
          <h2><FaFilter /><span>Filters</span></h2>
          <button onClick={clearAllHandler}>Clear All</button>
        </div>
        <div className="filter-sort">
          <span>SORT BY PICE</span>
          <div>
            <input
              type="radio"
              name='low-to-high'
              value='low'
              checked={isSortByPrice("low-to-high")}
              onChange={e => sortByPriceHandler(e)}
            />
            <label>Low to High</label><br />
          </div>
          <div>
            <input
              type="radio"
              value="high"
              name='high-to-low'
              checked={isSortByPrice("high-to-low")}
              onChange={e => sortByPriceHandler(e)}
            />
            <label>High to Low</label><br />
          </div>
        </div>
        <div className="filter-categories">
          <span>CATEGORIES</span>
          {
            Object.entries(categories).map(([key, val]) => {
              return (
                <div key={key}>
                  <input
                    type="checkbox"
                    checked={val}
                    onChange={(e) => checkboxHandler(key, e)}
                  />
                  <label>{key}</label>
                </div>
              )
            })
          }
        </div>
        <div className="filter-sort">
          <span>SORT BY RATINGS</span>
          {
            star.map(s => (
              <div key={s}>
                <input
                  type="radio"
                  name={s}
                  checked={isSortByRating(s)}
                  onChange={() => sortByRatingHandler(s)}
                />
                <label>{s}<AiFillStar /> & above </label>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Filter