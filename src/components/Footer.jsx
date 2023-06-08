import React from 'react'
import '../styles/footer.css'
import {FaFacebookF} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Elarh Adu</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://instagram" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="http://instagram" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
        <a href="http://instagram" target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Elarh Adu. All rights reservered.</small>
      </div>
    </footer>
  )
}

export default Footer