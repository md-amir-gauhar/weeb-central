import React, { useState } from 'react'
import Filter from '../components/Filter'
import Products from '../components/Products'

import '../styles/Manga.css'

const Manga = () => {
  const [manga, setManga] = useState([])
  return (
    <div className='manga'>
      <Filter manga={manga} setManga={setManga} />
      <Products manga={manga} />
    </div>
  )
}

export default Manga