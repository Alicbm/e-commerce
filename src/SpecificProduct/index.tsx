import React from 'react'
import { Comments } from '../Comments'
import { Description } from '../Description'
import { ReletedProducts } from '../ReletedProducts'
import { Warning } from '../Warning'
import { WriteComments } from '../WriteComments'

export const SpecificProduct = () => {
  return (
    <div>
      <Description />
      <Warning />
      <ReletedProducts />
      <WriteComments />
      <Comments />
    </div>
  )
}
