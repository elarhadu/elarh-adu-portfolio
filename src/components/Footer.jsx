import React from 'react';
import '../styles/footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => (
  <footer>
    <div className="footer__socials">
      <a href="https://web.facebook.com/elarh.adu/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
      <a href="https://www.instagram.com/__emma.nu.ella__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram /></a>
      <a href="https://twitter.com/elarh_" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><IoLogoTwitter /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Elarh Adu. All rights reservered.</small>
    </div>
  </footer>
);

export default Footer;
