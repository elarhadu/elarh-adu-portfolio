import React from 'react'
import '../styles/about.css'
import my_profile from '../assets/my_profile.jpg'
import { FaAward } from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={my_profile} alt="About" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1.5+ years working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>30+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Inventore, harum. Aliquid, vitae. Minima quos beatae explicabo
            enim quisquam aut saepe, labore,
            ratione sequi velit quaerat harum similique cum magnam ducimus!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
     </div>
    </section>
  )
}

export default About