import React from 'react'
import { Link } from 'react-router-dom'
import {IoCartOutline} from 'react-icons/io5'

function Card({item}) {
  return (
    <div>
        <div className='menu__content'>
          <img src={item.image} alt='' className='menu__img' />
          <h3 className='menu__name'>{item.menu_name}</h3>
          <span className='menu__detail'>{item.menu_detail}</span>
          <span className='menu__perci'>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "idr",
            }).format(item.price)}
          </span>
          <Link to='#'><span className='button menu__button'><IoCartOutline /></span></Link>
        </div>
    </div>
  )
}

export default Card
