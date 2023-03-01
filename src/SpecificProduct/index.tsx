import React from 'react'
import { Comments } from '../Comments'
import { Description } from '../Description'
import { ModalCategories } from '../ModalCategories'
import { ReletedProducts } from '../ReletedProducts'
import { Warning } from '../Warning'
import { WriteComments } from '../WriteComments'
import './SpecificProduct.css'

export const SpecificProduct = () => {
  return (
    <div className='SpecificProduct'>
      <ModalCategories />
      <Description />
      <Warning />
      <ReletedProducts />
      <WriteComments />
      <Comments />
    </div>
  )
}
