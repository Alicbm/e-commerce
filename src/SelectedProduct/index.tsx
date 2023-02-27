import React from 'react'
import { Filter } from '../Filter'
import { Recommendations } from '../Recommendations'

export const SelectedProduct = () => {
  return (
    <div>
      <div>
        <Filter />
        <Recommendations />
      </div>
    </div>
  )
}
