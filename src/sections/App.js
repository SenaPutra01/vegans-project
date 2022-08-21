import React from 'react'
import { Link } from 'react-router-dom'
import {Fade} from 'react-reveal'

function App() {
  return (
    <div>
      <section className='app section bd-conatiner'>
        <div className='app__container bd-grid'>
          <div className='app__data'>
            <Fade top duration={2000}>
              <span className='section-subtitle app__initial'>App</span>
            </Fade>       
            <Fade top duration={3000}>
              <h2 className='section-title app__initial'>App is available</h2>
            </Fade>
            <Fade top duration={4000}>
              <p className="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
            </Fade>
            <Fade top duration={5000}>
              <div className="app__stores">
                <Link to='#'><img src="/img/app1.png" alt="" className="app__store" /></Link>
                <Link to='#'><img src="/img/app2.png" alt="" className="app__store" /></Link>
              </div>
            </Fade>
          </div>

          <Fade top duration={4000}>
            <img src='/img/movil-app.png' alt='' className='app__img' />
          </Fade>
        </div>
      </section>
    </div>
  )
}

export default App
