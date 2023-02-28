import React from 'react'
import { products } from '../data/data'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import './Recommendations.css'

export const Recommendations = () => {
  return (
    <div className='Recommendations'>
      <h2 className='Recommendations-title'>Recommendations for you</h2>
      <div className='Recommendations-container'>
        {
          products.map(product => (
            <div className='Recommendations-container__products'>
              <div className='Recommendations-container__products-img'>
                <img 
                  src={product.image} 
                  alt={product.description} 
                />
              </div>
              <p className='Recommendations-container__products-brand'>
                {product.brand}
              </p>
              <p className='Recommendations-container__products-name'>
                {product.name}
              </p>
              <h4 className='Recommendations-container__products-price'>
                USD {product.price}
              </h4>
              <p className='Recommendations-container__products-description'>
                Aqui va una pequeña descripcion del producto
              </p>
              <div className='Recommendations-container__products-cart'>
                <BsFillCartPlusFill />
              </div>
              <div className='Recommendations-container__products-heart'>
                <FaHeart />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
