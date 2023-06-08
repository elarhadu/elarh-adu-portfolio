import React from 'react'
import My_Resume from '../assets/my_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={My_Resume} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA