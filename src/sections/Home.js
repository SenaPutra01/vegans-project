import React from 'react'
import { Link } from 'react-router-dom'
import {Fade} from 'react-reveal'

function Home() {
  return (
    <div>
      <section className='home' id='home'>
        <div className='home__container bd-container bd-grid'>
            <div className='home__data'>
              <Fade top duration={2000}>
                <h1 className='home__title'>Vegan's</h1>
              </Fade>
              <Fade top duration={3000}>
                <h2 className='home__subtitle'>Try the best food of <br /> the week.</h2>
              </Fade>
              <Fade top duration={4000}>
                <Link to='#'><span className='button'>View Menu</span> </Link>
              </Fade>
            </div>

          <Fade top duration={3000}>
            <img src='/img/home.png' alt='' className='home__img' />
          </Fade>
        </div>
      </section>
    </div>
  )
}

export default Home
