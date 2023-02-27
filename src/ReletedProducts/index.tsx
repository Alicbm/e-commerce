import React from 'react'
import { products } from '../data/data'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'

export const ReletedProducts = () => {
  return (
    <div>
      <h2>Releted Products</h2>
      <div>
        {
          products.map(product => (
            <div>
              <img src={product.image} alt={product.description} />
              <p>{product.brand}</p>
              <p>{product.name}</p>
              <h4>{product.price}</h4>
              <p>{product.description}</p>
              <div><BsFillCartPlusFill /></div>
              <div><FaHeart /></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
