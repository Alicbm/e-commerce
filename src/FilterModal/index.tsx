import React from "react";
import { GrCheckbox } from "react-icons/gr";
import { CgClose } from "react-icons/cg";
import { filterModal as setFilter } from "../features/mainSlices";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import "./FilterModal.css";

export const FilterModal = () => {
  const { filterModal } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();

  return (
    <div className={filterModal ? "FilterModal modal-show" : "FilterModal"}>
      <div className="FilterModal-container">
        <span
          onClick={() => dispatch(setFilter(false))}
          className="FilterModal-close"
        >
          <CgClose />
        </span>
        <h1 className="FilterModal-title">Filter by</h1>
        <ul className="FilterModal-prices">
          <li className="FilterModal-prices__item">
            <span>
              <GrCheckbox />
            </span>
            <p>All products</p>
          </li>
          <li className="FilterModal-prices__item">
            <span>
              <GrCheckbox />
            </span>
            <p>Up to $200</p>
          </li>
          <li className="FilterModal-prices__item">
            <span>
              <GrCheckbox />
            </span>
            <p>$200 to $500</p>
          </li>
          <li className="FilterModal-prices__item">
            <span>
              <GrCheckbox />
            </span>
            <p>More than $500</p>
          </li>
        </ul>
        <div className="FilterModal-brands">
          <h2 className="FilterModal-brands__title">Brands</h2>
          <ul className="FilterModal-brands__list">
            <li className="FilterModal-brands__list-item">
              <span>
                <GrCheckbox />
              </span>
              <p>Samsung</p>
            </li>
            <li className="FilterModal-brands__list-item">
              <span>
                <GrCheckbox />
              </span>
              <p>Samsung</p>
            </li>
            <li className="FilterModal-brands__list-item">
              <span>
                <GrCheckbox />
              </span>
              <p>Samsung</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
