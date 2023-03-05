import React from "react";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { filterModal as setFilter, sortModal as setSort } from "../features/mainSlices";
import { useAppDispatch } from "../store/hooks";
import "./Filter.css";

export const Filter = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="Filter">
      <div 
        onClick={() => dispatch(setSort(true))}
        className="Filter-sort">
        <span>
          <FaSortAmountUpAlt />
        </span>
        <p>Sort</p>
      </div>
      <div
        onClick={() => dispatch(setFilter(true))}
        className="Filter-filter"
      >
        <span>
          <FaFilter />
        </span>
        <p>Filter</p>
      </div>
    </div>
  );
};
