import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Fade from 'react-reveal/Fade'

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    fetch('menu.json')
    .then(function(response){
      return response.json();
    })
    .then(function(result) {
      setMenu(result.menu)
    });
  }

  return (
    <div>
      <section className='menu section bd-container' id='menu'>
        <span className='section-subtitle'>Special</span>
        <h2 className='section-title'>Menu of the week</h2>
        
        <div className='menu__container bd-grid'>
          {menu.map((item, index) => {
          return <Fade top duration={2000} delay={500 * index}> 
                  <Card key={item.id} item={item}/> 
                </Fade>
          })}
        </div>
      </section>
    </div>
  )
}

export default Menu
