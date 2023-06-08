import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import "../styles/navbar.css"

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
    document.body.classList.toggle('no-scroll');
  }

  const closeNavBar = () => {
    navRef.current.classList.remove('responsive_nav');
    document.body.classList.remove('no-scroll');
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/#" onClick={closeNavBar}>Home</a>
        <a href="/#about" onClick={closeNavBar}>About</a>
        <a href="/#projects" onClick={closeNavBar}>Projects</a>
        <a href="/#skills" onClick={closeNavBar}>Skills</a>
        <a href="/#testimonials" onClick={closeNavBar}>Testimonals</a>
        <a href="/#contact" onClick={closeNavBar}>Contact</a>
        <button className= "nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className= "nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
    </header>
  );
}

export default Navbar;