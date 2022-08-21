import React from 'react'
import { Link } from 'react-router-dom'
import {Fade} from 'react-reveal'

function About() {
  return (
    <div>
      <section className='about section bd-container' id='about'>
        <div className='about__container bd-grid'>
          <div className='about__data'>
            <Fade top duration={2000}>
              <span className='section-subtitle about__initial'>About</span>
            </Fade>
            <Fade top duration={3000}>
              <h2 className='section-title about__initial'>We cook the best <br /> vegan food</h2>
            </Fade>
            <Fade top duration={4000}>
              <p className='about__description'>We cook the best food in entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
            </Fade>
            <Fade top duration={5000}>
              <Link to='#'><span className='button'>Explore history</span></Link>
            </Fade>
          </div>

          <Fade top duration={3000}>
            <img src='/img/about.jpg' alt='' className='about__img' />
          </Fade>
        </div>
      </section>  
    </div>
  ) 
}

export default About
