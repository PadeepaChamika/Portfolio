import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/hotel-mange.png'
import IMG2 from '../../assets/3.png'
import IMG3 from '../../assets/7.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hotel Management System',
    github: 'https://github.com/PadeepaChamika/HotelManagementSystem',
    // demo:''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Vehicle Parking System',
    github: 'https://github.com/PadeepaChamika/VehicleParkingSystem'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Sipsewana Institute',
    github: 'https://github.com/PadeepaChamika/HibernatePOSSystem'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {/* <a href="https://github.com/PadeepaChamika/HotelManagementSystem" className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio