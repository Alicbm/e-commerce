import React from 'react'
import { Filter } from '../Filter'
import { FilterModal } from '../FilterModal'
import { ModalCategories } from '../ModalCategories'
import { Recommendations } from '../Recommendations'
import './SelectedProducts.css'

export const SelectedProduct = () => {
  return (
    <div className="SelectedProduct">
      <FilterModal />
      <ModalCategories />
      <Filter />
      <div className="SelectedProduct-container">
        <Recommendations />
      </div>
    </div>
  );
}
