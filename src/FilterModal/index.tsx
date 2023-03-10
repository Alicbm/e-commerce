import React from "react";
import { GrCheckbox } from "react-icons/gr";
import { CgClose } from "react-icons/cg";
import { filterModal as setFilter,
   typeProductSelected as setType, 
   refreshValues as setRefresh } from "../features/mainSlices";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ArrayProducts } from "../types";
import "./FilterModal.css";

export const FilterModal = () => {
  const { filterModal, relevantProduct, refreshValues } = useAppSelector(
    (state) => state.mainReducer
  );

  const dispatch = useAppDispatch();
  const dataFilter: string[] = [];
  const data: ArrayProducts[] = [...relevantProduct];
  
  const brands = () => {
    relevantProduct.forEach((item: ArrayProducts) => {
      const find = dataFilter.find((element) => element === item.brand);

      if (!find) {
        dataFilter.push(item.brand);
      }
    });
  };

  brands();

  const handleSelectBranch = () => {
    const inputElements = Array.from(
      document.querySelectorAll('input[type="checkbox"].brand-checkbox')
    ) as HTMLInputElement[];

    let brandSelected: ArrayProducts[] = []  

      inputElements.forEach((type: HTMLInputElement) => {
        if(type.checked){
          data.filter((item: ArrayProducts) => {
            if(type.value === item.brand){
              brandSelected.push(item)
            }
          })
        }
      })

      const verifyValues = inputElements.every((type: HTMLInputElement) => (
        type.checked === false
      ))
      if(verifyValues){
        brandSelected = [...data]
      }      

      dispatch(setType(brandSelected));
      dispatch(setRefresh(!refreshValues));      
  }

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
            {dataFilter.map((brand: string) => (
              <label className="FilterModal-brands__list-item" key={brand}>
                <input
                  onChange={handleSelectBranch}
                  type="checkbox"
                  value={brand}
                  className="brand-checkbox"
                />
                {brand}
              </label>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
