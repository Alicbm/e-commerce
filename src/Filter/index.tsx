import React from "react";
import { FaSortAmountUpAlt } from 'react-icons/fa'
import { FaFilter } from 'react-icons/fa'

export const Filter = () => {
  return (
    <div>
      <div>
        <span><FaSortAmountUpAlt /></span>
        <p>Sort</p>
      </div>
      <div>
        <span><FaFilter /></span>
        <p>Filter</p>
      </div>
    </div>
  );
};
