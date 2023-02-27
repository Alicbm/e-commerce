import React from 'react'
import logo from '../images/black.png'
import { GrMenu } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { BsFillCartPlusFill } from 'react-icons/bs'

export const Header = () => {
  return (
    <header className='Header'>
      <div className='Header-menu icon-green'><GrMenu /></div>
      <div className='Header-logo icon-green'>
        <img src={ logo } alt="Logo" />
      </div>
      <div className='Header-search icon-green'>
        < FaSearch/>
      </div>
      <div className='Header- icon-green'>
        <span>0</span>
        <BsFillCartPlusFill />
      </div>
    </header>
  )
}
