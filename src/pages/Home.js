import Tag from '../components/Tag'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

import '../styles/Home.css'


const Home = () => {
  return (
    <div className='home'>
      <Tag />
      <div className="banner"></div>
      
      <Categories />
      <Footer />
    </div>
  )
}

export default Home