import React from 'react'
import '../styles/skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Skills() {
  return (
    <section id='skills'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills_frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills_details">
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills_backend">
        <h3>Backend Development</h3>
          <div className="skills__content">
          <article className="skills_details">
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
              <h4>Ruby</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
              <h4>Ruby On Rails</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills