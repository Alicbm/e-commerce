import React from 'react'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { FaTruck } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

export const Description = () => {
  return (
    <div>
      <div>
        <img src="https://raw.githubusercontent.com/Alicbm/store-image/master/tecnology/laptop-4.png" alt="" />
      </div>
      <div>
        <p>HP</p>
        <h3>Laptop HP Victus 15</h3>
        <h2>USD 1.122</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum numquam corporis, rerum dolorum dicta quod amet iste neque itaque qui, ea veniam porro, nisi repellat? Accusamus incidunt id architecto expedita.</p>
        <button>Buy Product</button>
        <button>Add to Cart</button>
        <div><FaHeart /></div>
      </div>
      <div>
        <div>
          <span><FaHandHoldingUsd /></span>
          <p>Up to 48 fees: 48 USD</p>
        </div>
        <div>
          <span><FaTruck /></span>
          <p>Free Shipping</p>
        </div>
        <div>
          <span><FaAward /></span>
          <p>1 Year Warranty</p>
        </div>
      </div>
    </div>
  )
}
