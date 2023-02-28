import React from 'react'
import { FaShieldAlt } from 'react-icons/fa'
import './Warning.css'

export const Warning = () => {
  return (
    <div className='Warning'>
      <span><FaShieldAlt /></span>
      <p>The products of this store CAN NOT be purchased through this store, to get them go to official stores.</p>
    </div>
  )
}
