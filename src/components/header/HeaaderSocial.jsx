import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/padeepa-chamika-ba879a222/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/PadeepaChamika" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/Padeepa98" target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default HeaaderSocial