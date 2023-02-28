import React from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import logo from '../images/black.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-myself'>
        <div className='Footer-myself__icons'>
          <div><BsPersonCircle /></div>
          <div><FaGithub /></div>
          <div><BsLinkedin /></div>
        </div>
        <button>Contact me</button>
      </div>
      <div className='Footer-logo'>
        <img src={logo} alt="Logo" />
        <p>All rights reserved</p>
      </div>
    </div>
  )
}
