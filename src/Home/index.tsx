import React from 'react'
import { Carousel } from '../Carousel'
import { Categories } from '../Categories'
import { Comercial } from '../Comercial'
import { Details } from '../Details'
import { ModalCategories } from '../ModalCategories'
import { Recommendations } from '../Recommendations'
import './Home.css'

export const Home = () => {
  return (
    <div className='Home'>
      <ModalCategories />
      <Carousel />
      <div className='Home-container'>
        <Categories />
        <Recommendations />
      </div>
      <Comercial />
      <div className="Home-container">
        <Recommendations />
        <Details />
      </div>
    </div>
  )
}
