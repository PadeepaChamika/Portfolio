import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from '../../assets/my-1.png'
import HeaaderSocial from './HeaaderSocial'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Padeepa Chamika Kavithilaka</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaaderSocial />

        <div className="me">
          <img src={ME} alt="my-1" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header