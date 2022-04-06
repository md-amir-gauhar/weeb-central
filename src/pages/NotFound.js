import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Notfound.css'

const NotFound = () => {
  return (
    <div className='not-found flex flex-col'>
      <h1>Sorry, for the trouble. We are under maintainance ＞︿＜</h1>
      <h2>Products Will be added soon...</h2>
      <h2>For manga: <Link to='products/manga'>Click Here</Link></h2>
    </div>
  )
}

export default NotFound