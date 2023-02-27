import React from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import logo from '../images/black.png'

export const Footer = () => {
  return (
    <div>
      <div>
        <div><BsPersonCircle /></div>
        <div><FaGithub /></div>
        <div><BsLinkedin /></div>
        <button>Contact me</button>
      </div>
      <div>
        <img src={logo} alt="Logo" />
        <p>All rights reserved</p>
      </div>
    </div>
  )
}
