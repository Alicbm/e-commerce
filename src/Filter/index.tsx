import React from "react";
import { FaSortAmountUpAlt } from 'react-icons/fa'
import { FaFilter } from 'react-icons/fa'
import './Filter.css'

export const Filter = () => {
  return (
    <div className="Filter">
      <div className="Filter-sort">
        <span><FaSortAmountUpAlt /></span>
        <p>Sort</p>
      </div>
      <div className="Filter-filter">
        <span><FaFilter /></span>
        <p>Filter</p>
      </div>
    </div>
  );
};
