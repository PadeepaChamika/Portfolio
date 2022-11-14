import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>PADEEPA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experince">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100007105758679"><FaFacebookF/></a>
        <a href="https://www.linkedin.com/in/padeepa-chamika-ba879a222/"><BsLinkedin/></a>
        <a href="https://twitter.com/Padeepa98"><BsTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Padeepa Chamika. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer