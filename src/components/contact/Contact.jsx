import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>padeepachamika12@gmail.com</h5>
            <a href="mailto:padeepachamika12@gmail.com" target="-blank">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>padeepa chamika</h5>
            <a href="">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+94 77 4640621</h5>
            <a href="https://api.whatsapp.com/send?phone+94774640621" target="-blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name'required />
          <input type="email" name='email' placeholder='Your Email'required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact