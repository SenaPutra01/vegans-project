import React from 'react'
import { Link } from 'react-router-dom'
import {Fade} from 'react-reveal'
import { GrFacebookOption } from 'react-icons/gr';
import {IoLogoInstagram, IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <div>
      <footer className="footer section bd-container">
        <div className="footer__container bd-grid">
          <div className="footer__content">
            <Fade top duration={3000}>
              <Link to='#'>
                <span className="footer__logo">Vegan's</span>
              </Link>
              <span className="footer__description">Restaurant</span>
            </Fade>
            <Fade top duration={4000}>
              <div>
                <Link to='#'>
                  <span className="footer__social"><GrFacebookOption /></span>
                </Link>
                <Link to='#'>
                  <span className="footer__social"><IoLogoInstagram /></span>
                </Link>
                <Link to='#'>
                  <span className="footer__social"><IoLogoTwitter /></span>
                </Link>
              </div>
            </Fade>
          </div>

          <div className="footer__content">
            <Fade top duration={3000}>
              <h3 className="footer__title">Services</h3>
            </Fade>
            <Fade top duration={4000}>
              <ul>
                <li>
                  <Link to='#'>
                    <span className="footer__link">Delivery</span>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span className="footer__link">Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span className="footer__link">Fast food</span>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span className="footer__link">Reserve your spot</span>
                  </Link>
                </li>
              </ul>
            </Fade>
          </div>

          <div className="footer__content">
            <Fade top duration={3000}>
              <h3 className="footer__title">Information</h3>
            </Fade>
            <Fade top duration={4000}>

              <ul>
                <li>
                  <Link to='#'>
                    <span className="footer__link">Event</span>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span className="footer__link">Contact us</span>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span className="footer__link">Privacy policy</span>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span className="footer__link">Term of services</span>
                  </Link>
                </li>
              </ul>
            </Fade>
          </div>

          <div className="footer__content">
            <Fade top duration={3000}>
              <h3 className="footer__title">Adress</h3>
            </Fade>
            <Fade top duration={4000}>
              <ul>
                <li>Jakarta - Indonesia</li>
                <li>Sample Address 12430</li>
                <li>xxx - xxx - xxx - xxx</li>
                <li>vegans@email.com</li>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="footer__copy">&#169; 2022 Vegan's. All right reserved</p>
      </footer>
    </div>
  )
}

export default Footer
