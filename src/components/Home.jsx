import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/home.css';
import CTA from './CTA';
import homePage from '../assets/home_page.jpg';
import Social from './Social';

function Home() {
  return (
    <section className="container home home__container" id="home">
      <div>
        <h5>Hello I&apos;m</h5>
        <h1>Elarh Adu</h1>
        <h4 className="text-light">
          <Typewriter
            options={{
              strings: ['I am a Fullstack Developer', 'I am a Frontend Developer', 'I am a Backend Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
        <CTA />
        <Social />
      </div>

      <div className="my_profile">
        <img src={homePage} alt="" />
      </div>

      <a href="#contact" className="scroll_down">Scroll Down</a>
    </section>
  );
}

export default Home;
