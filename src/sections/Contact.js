import React from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <div>
      <section className="contact section bd-container" id="contact">
        <div className="contact__container bd-grid">
          <div className="contact__data">
            <Fade top duration={2000}>
              <span className="section-subtitle contact__initial">Let's talk</span>
            </Fade>
            <Fade top duration={3000}>
              <h2 className="section-title contact__initial">Contact us</h2>
            </Fade>
            <Fade top duration={4000}>
              <p className="contact__description">If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
            </Fade>
          </div>

          <Fade top duration={3000}>
            <div className="contact__button">
              <Link to='#'>
                <span className="button">Contact us now</span>
              </Link>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  )
}

export default Contact
