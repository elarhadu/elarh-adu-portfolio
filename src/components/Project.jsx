import React from 'react';
import '../styles/project.css';
import { BsGithub, BsGlobe2 } from 'react-icons/bs';
import project1 from '../assets/penny_wise.png';
import project2 from '../assets/au.png';
import project3 from '../assets/stay_a_while.png';
import project4 from '../assets/gh_movies.png';
import project5 from '../assets/space_travellers.png';

const projectData = [
  {
    id: 1,
    image: project1,
    title: 'PennyWise',
    summary: 'Penny Wise is a user-friendly budgeting app built with Ruby on Rails. Track income and expenses, set goals, and gain insights into spending habits. Achieve financial wellness and make informed decisions with Penny Wise.',
    github: 'https://github.com/elarhadu/penny-wise',
    demo: 'https://penny-wise.onrender.com/',
    tags: ['#Ruby', '#RubyonRails'],
  },
  {
    id: 2,
    image: project2,
    title: 'African Union',
    summary: 'The African Union App is a mobile web application that allows users to view a list of countries in the AU.',
    github: 'https://github.com/elarhadu/African-Union',
    demo: 'https://african-union.onrender.com/',
    tags: ['#ReactJS', '#Redux'],
  },
  {
    id: 3,
    image: project3,
    title: 'Stay-A-While',
    summary: '"Stay a while" is a HomeStay reservation app that lets users find their "Home away from home." Reserve, delete and create homestays with ease.',
    github: 'https://github.com/elarhadu/stay-a-while-front-end',
    demo: 'https://stay-a-while-front-end.vercel.app/home',
    tags: ['#React', '#RubyonRails', '#Postgres'],
  },
  {
    id: 4,
    image: project4,
    title: 'Ghana Movies Award',
    summary: 'The Ghana Movies Award is a demo website inspired by a design by Cindy Shin. It provides details for the upcoming movie awards organized by the VGMA.',
    github: 'https://github.com/elarhadu/African-Union',
    demo: 'https://elarhadu.github.io/Capstone-Module-1/',
    tags: ['#HTML', '#CSS', '#JavaScript'],
  },
  {
    id: 5,
    image: project5,
    title: 'Space Travellers Hub',
    summary: 'Space Travellers Hub is a web application for a company that provides commercial and scientific space travel services with real live data from the SpaceX API. The application allows users to book rockets and join selected space missions.',
    github: 'https://github.com/elarhadu/space-travellers-hub',
    demo: 'https://space-travellers-hub-livid.vercel.app/',
    tags: ['#ReactJS', '#Redux', '#Bootstrap', '#CSS'],
  },
];

const Project = () => (
  <section id="projects">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="project__container">
      {
          projectData.map(({
            id, image, summary, title, github, demo, tags,
          }) => (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="project__item-cta">
                <h3>{title}</h3>
                <span className="project__links">
                  <a href={demo} target="_blank" rel="noopener noreferrer" aria-label="Demo"><BsGlobe2 /></a>
                  <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><BsGithub /></a>
                </span>
                <p>{summary}</p>
                <ul>
                  <li>{tags}</li>
                </ul>
              </div>
            </article>
          ))
}
    </div>
  </section>
);

export default Project;
