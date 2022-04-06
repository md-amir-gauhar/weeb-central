import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Categories.css'

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-heading">
        <div className="line"></div>
        <h2>Products</h2>
        <div className="line"></div>
      </div>
      <div className="products">
        <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/816bOvun-tL._SL1500_.jpg"
            alt=""
          />
          <Link to='products/blu-rays'>Blu-rays</Link>
        </div>
        <div className="product">
          <img
            src="https://i5.walmartimages.com/asr/c6ce13a5-6005-4224-90ad-02ef4fc5703d.ba64fb5a2a7ec192a22abac4cf4f9202.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"
            alt=""
          />
          <Link to='products/accessories'>Accessories</Link>
        </div>
        <div className="product">
          <img
            src="https://cdn.vox-cdn.com/thumbor/pA-81RA9taQxwwqA6HHKfH37aD4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23194865/jbareham_211203_ecl1085_anime_clothing_0003.jpg"
            alt=""
          />
          <Link to='product/merchandise'>Merchandise</Link>
        </div>
        <div className="product">
          <img
            src="https://m.media-amazon.com/images/P/B00F3HJLS2.01._SCLZZZZZZZ_SX500_.jpg"
            alt=""
          />
          <Link to="/products/manga">Manga</Link>
        </div>
      </div>
    </section>
  )
}

export default Categories