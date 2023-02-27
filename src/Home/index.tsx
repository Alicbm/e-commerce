import React from 'react'
import { Carousel } from '../Carousel'
import { Categories } from '../Categories'
import { Comercial } from '../Comercial'
import { Details } from '../Details'
import { Recommendations } from '../Recommendations'

export const Home = () => {
  return (
    <div>
      <Carousel />
      <div>
        <Categories />
        <Recommendations />
        <Comercial />
        <Recommendations />
        <Details />
      </div>
    </div>
  )
}
