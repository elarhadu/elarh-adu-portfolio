import React from 'react';
import '../styles/about.css';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import myProfile from '../assets/my_profile.jpg';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myProfile} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ years working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ completed</small>
            </article>
          </div>

          <p>
            As a front-end web developer and open-source enthusiast, I am deeply passionate
            about writing clean code and creating accessible designs.
            I thrive in pair-programming and remote work environments, cherishing the collaborative
            and flexible nature they offer.
            With fluency in multiple programming languages, frameworks, and technologies,
            including JavaScript, HTML, CSS, React, Ruby, Ruby on Rails, MySQL, and PostgreSQL.
            I possess the ability to quickly and efficiently adapt to and excel in new projects
            at a success rate of 85%.
          </p>

          <a href="#contact" className="btn btn-primary">Let&apos;s talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
