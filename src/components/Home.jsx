import React from 'react'
import Typewriter from 'typewriter-effect'
import '../styles/home.css'
import CTA from './CTA'
import my_profile from '../assets/my_profile.jpg'
import Social from './Social'

function Home() {

  return (
    <section className="container home home__container" id='home'>
      <h5>Hello I'm</h5>
      <h1>Elarh Adu</h1>
      <h4 className="text-light">
          <Typewriter
            options={{
              strings: ['Fullstack Developer', 'Frontend Developer', 'Backend Developer'],
              autoStart: true,
              loop: true,
            }}
          />
      </h4>
      <CTA />
      <Social />

      <div className="my_profile">
        <img src={my_profile} alt="" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </section>
  )
}

export default Home