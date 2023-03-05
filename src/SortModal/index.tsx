import React from 'react'
import { CgClose } from 'react-icons/cg'
import { sortModal as setSort } from '../features/mainSlices'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import './SortModal.css'

export const SortModal = () => {
  const { sortModal } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch()

  return (
    <div className={sortModal ? 'SortModal sort-active' : 'SortModal'}>
      <span 
        onClick={() => dispatch(setSort(false))}
        className='SortModal-close'>
        <CgClose />
      </span>
      <h1 className='SortModal-title'>Sort by</h1>
      <div className='SortModal-container'>
        <div className='sort-select'>
          <p>More relevant</p>
        </div>
        <div>
          <p>Lower price</p>
        </div>
        <div>
          <p>Higher price</p>
        </div>
      </div>
    </div>
  )
}
