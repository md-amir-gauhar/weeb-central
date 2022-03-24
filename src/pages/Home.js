import Tag from '../components/Tag'
import Categories from '../components/Categories'

import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Tag />
      <div className="banner"></div>
      
      <Categories />
    </div>
  )
}

export default Home