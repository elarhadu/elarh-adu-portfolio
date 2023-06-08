import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub, FaAngellist } from 'react-icons/fa'
import { AiFillMediumCircle } from 'react-icons/ai'
import '../styles/social.css'

const Social = () => {
  return (
    <div className='home_social'>
      <a href="https://www.linkedin.com/in/emmanuella-adu" target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/elarhadu" target='_blank' rel="noreferrer"><FaGithub/> </a>
      <a href="https://medium.com/@elarhadu" target='_blank' rel="noreferrer"> <AiFillMediumCircle /></a>
      <a href="https://wellfound.com/u/emmanuella-adu" target='_blank' rel="noreferrer"> <FaAngellist /></a>
    </div>
  )
}

export default Social