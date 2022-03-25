import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'

import '../styles/Filter.css'

const Filter = () => {
  const [isChecked, setIsChecked] = useState({
    lowtohigh: false,
    hightolow: false,
  })

  const [categories, setCategories] = useState({
    action: false,
    romance: false,
    sliceOfLife: false,
    fantasy: false,
    comedy: false,
    adventure: false,
    sciFi: false
  })

  const radioHandler = e => {
    const { name } = e.target;
    if (name === 'low') setIsChecked({ ...isChecked, lowtohigh: true, hightolow: false })
    else setIsChecked({ ...isChecked, lowtohigh: false, hightolow: true })
  }

  const checkboxHandler = (e) => {
    const { name } = e.target;
    if (name === "action") {
      setCategories({ ...categories, action: categories.action === true ? false : true })
    } else if (name === "romance") {
      setCategories({ ...categories, romance: categories.romance === true ? false : true })
    } else if (name === "sliceoflife") {
      setCategories({ ...categories, sliceOfLife: categories.sliceOfLife === true ? false : true })
    } else if (name === "fantasy") {
      setCategories({ ...categories, fantasy: categories.fantasy === true ? false : true })
    } else if (name === "comedy") {
      setCategories({ ...categories, comedy: categories.comedy === true ? false : true })
    } else if (name === "adventure") {
      setCategories({ ...categories, adventure: categories.adventure === true ? false : true })
    } else {
      setCategories({ ...categories, sciFi: categories.sciFi === true ? false : true })
    }
  }

  return (
    <section className="filter-container">
      <div className='filter'>
        <div className="filter-header">
          <h2><FaFilter /><span>Filters</span></h2>
          <button>Clear All</button>
        </div>
        <div className="filter-sort">
          <span>SORT</span>
          <div>
            <input
              type="radio"
              name='low'
              value='low'
              checked={isChecked.lowtohigh}
              onChange={radioHandler}
            />
            <label>Low to High</label><br />
          </div>
          <div>
            <input
              type="radio"
              value="high"
              name='high'
              checked={isChecked.hightolow}
              onChange={radioHandler}
            />
            <label>High to Low</label><br />
          </div>
        </div>
        <div className="filter-categories">
          <span>CATEGORIES</span>
          <div>
            <input
              type="checkbox"
              name="action"
              value="action"
              checked={categories.action}
              onChange={checkboxHandler}
            />
            <label>Action</label><br />
          </div>
          <div>
            <input
              type="checkbox"
              name="romance"
              value="romance"
              checked={categories.romance}
              onChange={checkboxHandler}
            />
            <label>Romance</label><br />
          </div>
          <div>
            <input
              type="checkbox"
              name="sliceoflife"
              value="sliceoflife"
              checked={categories.sliceOfLife}
              onChange={checkboxHandler}
            />
            <label>Slice of Life</label><br />
          </div>
          <div>
            <input
              type="checkbox"
              name="fantasy"
              value="fantasy"
              checked={categories.fantasy}
              onChange={checkboxHandler}
            />
            <label>Fantasy</label><br />
          </div>
          <div>
            <input
              type="checkbox"
              name="comedy"
              value="comedy"
              checked={categories.comedy}
              onChange={checkboxHandler}
            />
            <label>Comedy</label><br />
          </div>
          <div>
            <input
              type="checkbox"
              name="adventure"
              value="adventure"
              checked={categories.adventure}
              onChange={checkboxHandler}
            />
            <label >Adventure</label><br />
          </div>
          <div>
            <input
              type="checkbox"
              name="sci-fi"
              value="sci-fi"
              checked={categories.sciFi}
              onChange={checkboxHandler}
            />
            <label>Sci-fi</label><br />
          </div>
        </div>
        <div className="filter-other">
          <span>OTHER</span>
          <div>
            <input type="checkbox" name="outofstock" value="outofstock" />
            <label>Out of Stock</label><br />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filter