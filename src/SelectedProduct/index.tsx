import React from 'react'
import { Filter } from '../Filter'
import { Recommendations } from '../Recommendations'
import './SelectedProducts.css'

export const SelectedProduct = () => {
  return (
    <div className="SelectedProduct">
      <Filter />
      <div className="SelectedProduct-container">
        <Recommendations />
      </div>
    </div>
  );
}
