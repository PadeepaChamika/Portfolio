import React from 'react'
import "./about.css"
import ME from '../../assets/my-2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experiance</h5>
              <small>1+ years</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>100+ Clients</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Project</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi impedit quibusdam illo, quidem, in voluptatibus ullam fuga, possimus mollitia nam debitis 
            cum quia doloribus beatae maiores reiciendis. Nam, ab.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About