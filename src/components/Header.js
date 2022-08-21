import React, {useState} from 'react'
import { Link } from 'react-scroll'
import {BsMoon} from 'react-icons/bs';
import {BiMenu} from 'react-icons/bi';
import styled from 'styled-components';

function Header() {  
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  return (
    <div>
      <header className='l-header' id="header">
        <nav className='nav bd-container'>
          <NavLink to="home"><span className='nav__logo'>Vegan's</span></NavLink>

          <div className='nav__menu' 
            id={ isNavExpanded ? 'nav-menu' : 'show-menu'}>
            <ul className='nav__list'>
              <li className='nav__item'>
                <NavLink to='home' spy={true} smooth={true} duration={100} activeClass='active'>Home</NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to='about' spy={true} smooth={true} duration={100} activeClass='active'>About</NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to='services' spy={true} smooth={true} duration={100} activeClass='active'>Service</NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to='menu' spy={true} smooth={true} duration={100} activeClass='active'>Menu</NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to='contact' spy={true} smooth={true} duration={100} activeClass='active'>Contact</NavLink>
              </li>
              <li><BsMoon className='change-theme' id="theme-button" /></li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle" 
            onClick={() => {
              setIsNavExpanded(!isNavExpanded)
            }}
          >
            <BiMenu />
          </div>
        </nav>
      </header>
    </div>
  )
}

const NavLink = styled(Link)`
    font-weight: 500;
    color: #707070;
    &.active {
      color: #069C54;
    }
`;
export default Header
