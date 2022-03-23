import { ImTwitter } from 'react-icons/im'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <section className="about">
          <span>About</span>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Press</a>
        </section>
        <section className="help">
          <span>Help</span>
          <a href="#">Payment</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation & return</a>
          <a href="#">FAQ</a>
        </section>
        <section className="social">
          <span>Social</span>
          <a href="#"><ImTwitter style={{ color: "#1A8CD8" }} /></a>
          <a href="#"><BsFacebook style={{ color: '#fff' }} /></a>
          <a href="#"><BsLinkedin style={{ color: '#0077B5' }} /></a>
        </section>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2022 Weeb Central</p>
      </div>
    </footer>
  )
}

export default Footer