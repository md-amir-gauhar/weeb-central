import { ImTwitter } from 'react-icons/im'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <section className="about">
          <span>About</span>
          <Link to='#'>Contact Us</Link>
          <Link to='#'>About Us</Link>
          <Link to='#'>Press</Link>
        </section>
        <section className="help">
          <span>Help</span>
          <Link to='#'>Payment</Link>
          <Link to='#'>Shipping</Link>
          <Link to='#'>Cancellation & return</Link>
          <Link to='#'>FAQ</Link>
        </section>
        <section className="social">
          <span>Social</span>
          <Link to='#'><ImTwitter style={{ color: "#1A8CD8" }} /></Link>
          <Link to='#'><BsFacebook style={{ color: '#fff' }} /></Link>
          <Link to='#'><BsLinkedin style={{ color: '#0077B5' }} /></Link>
        </section>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2022 Weeb Central</p>
      </div>
    </footer>
  )
}

export default Footer