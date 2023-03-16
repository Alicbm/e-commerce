import React from "react";
import { CgClose } from "react-icons/cg";
import { filterModal as setFilter,
   typeProductSelected as setType, 
   refreshValuesTwo as setRefreshTwo } from "../features/mainSlices";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ArrayProducts } from "../types";
import "./FilterModal.css";

export const FilterModal = () => {
  const { filterModal, relevantProduct, refreshValuesTwo } = useAppSelector(
    (state) => state.mainReducer
  );

  const dispatch = useAppDispatch();

  const dataFilter: string[] = [];
  const data: ArrayProducts[] = [...relevantProduct];
  let filterBrands: ArrayProducts[] = [];

  const brands = () => {
    relevantProduct.forEach((item: ArrayProducts) => {
      const find = dataFilter.find((element) => element === item.brand);

      if (!find) {
        dataFilter.push(item.brand);
      }
    });
  };

  brands();

  const handleRangePrices = () => {
    const values = Array.from(
      document.querySelectorAll(
        'input[type="checkbox"].small_value, input[type="checkbox"].medium_value, input[type="checkbox"].big_value'
      )
    ) as HTMLInputElement[];

    const verifyValues = values.every(
      (type: HTMLInputElement) => type.checked === false
    );
    if (!verifyValues) {
      values.forEach((type: HTMLInputElement) => {
        if (type.checked) {
          data.filter((item: ArrayProducts) => {
            if (type.value === "small_value" && item.price < 200) {
              filterBrands.push(item);
            } else if (
              type.value === "medium_value" &&
              item.price >= 200 &&
              item.price < 500
            ) {
              filterBrands.push(item);
            } else if (type.value === "big_value" && item.price >= 500) {
              filterBrands.push(item);
            }
          });
        }
      });
    } else if (!!verifyValues) {
      filterBrands = [...data];
    }

    dispatch(setType(filterBrands));    
  };

  const handleSelectBranch = () => {
    handleRangePrices()

    const inputElements = Array.from(
      document.querySelectorAll('input[type="checkbox"].brand-checkbox')
    ) as HTMLInputElement[];

    let brandSelected: ArrayProducts[] = [];

    const verifyValues = inputElements.every(
      (type: HTMLInputElement) => type.checked === false
    );
    if(!verifyValues){
      inputElements.forEach((type: HTMLInputElement) => {
        if (type.checked) {
          filterBrands.filter((item: ArrayProducts) => {
            if (type.value === item.brand) {
              brandSelected.push(item);
            }
          });
        }
      });
    }else if (!!verifyValues) {
      brandSelected = [...filterBrands];
    }

    dispatch(setType(brandSelected));
    dispatch(setRefreshTwo(!refreshValuesTwo));
  };

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
            <label>
              <input
                onChange={handleRangePrices}
                type="checkbox"
                value="small_value"
                className="small_value"
              />
              Up to $200
            </label>
          </li>
          <li className="FilterModal-prices__item">
            <label>
              <input
                onChange={handleRangePrices}
                type="checkbox"
                value="medium_value"
                className="medium_value"
              />
              $200 to $500
            </label>
          </li>
          <li className="FilterModal-prices__item">
            <label>
              <input
                onChange={handleRangePrices}
                type="checkbox"
                value="big_value"
                className="big_value"
              />
              More than $500
            </label>
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
