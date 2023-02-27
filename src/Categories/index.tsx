import React from 'react'
import { categories } from '../data/data'

export const Categories = () => {
  return (
    <div className='Categories'>
      <h1 className='Categories-title'>CATEGORIES</h1>
      <div className='Categories-container'>
        {
          categories.map(category => (
            <div className='Categories-container__item'>
              <div className='Categories-container__item-image'>
                <img src={category.image} alt={category.name} />
              </div>
              <p className='Categories-container__item-name'>{ category.name }</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
