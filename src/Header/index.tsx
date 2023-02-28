import React from 'react'
import logo from '../images/black.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { BsFillCartPlusFill } from 'react-icons/bs'
import './Header.css'

export const Header = () => {
  return (
    <header className='Header'>
      <div className='Header-menu icon-green'><GiHamburgerMenu /></div>
      <div className='Header-logo icon-green'>
        <img src={ logo } alt="Logo" />
        <span>< FaSearch/></span>
      </div>
      <div className='Header-cart icon-green'>
        <span>0</span>
        <BsFillCartPlusFill />
      </div>
    </header>
  )
}
