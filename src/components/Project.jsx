import React from 'react'
import "../styles/project.css"
import project_1 from '../assets/au.png'
import project_2 from '../assets/au.png'
import project_3 from '../assets/au.png'
import project_4 from '../assets/au.png'
import project_5 from '../assets/au.png'
import project_6 from '../assets/au.png'

const project_data = [
  {
    id: 1,
    image: project_1,
    title: 'African Union',
    github: 'https://github.com/elarhadu/African-Union',
    demo: 'https://african-union.onrender.com/'
  },
  {
    id: 2,
    image: project_2,
    title: 'African Union',
    github: 'https://github.com/elarhadu/African-Union',
    demo: 'https://african-union.onrender.com/'
  },
  {
    id: 3,
    image: project_3,
    title: 'African Union',
    github: 'https://github.com/elarhadu/African-Union',
    demo: 'https://african-union.onrender.com/'
  },
  {
    id: 4,
    image: project_4,
    title: 'African Union',
    github: 'https://github.com/elarhadu/African-Union',
    demo: 'https://african-union.onrender.com/'
  },
  {
    id: 5,
    image: project_5,
    title: 'African Union',
    github: 'https://github.com/elarhadu/African-Union',
    demo: 'https://african-union.onrender.com/'
  },
  {
    id: 6,
    image: project_6,
    title: 'African Union',
    github: 'https://github.com/elarhadu/African-Union',
    demo: 'https://african-union.onrender.com/'
  },

]

const Project = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container project__container">
        {
          project_data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt="project 1" />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
              <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>GitHub</a>
              <a href= {demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
              </div>
              </article>
          )
          }
        )}
      </div>
    </section>
  )
}

export default Project