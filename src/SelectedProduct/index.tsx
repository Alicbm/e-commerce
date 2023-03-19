import React from "react";
import { Filter } from "../Filter";
import { FilterModal } from "../FilterModal";
import { ModalCategories } from "../ModalCategories";
import { Recommendations } from "../Recommendations";
import { SortModal } from "../SortModal";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ArrayProducts } from "../types";
import {
  typeProductSelected as setType,
  relevantProduct,
} from "../features/mainSlices";
import "./SelectedProducts.css";

export const SelectedProduct = () => {
  const { nameCategory, mainUrl, typeProductSelected } = useAppSelector(
    (state) => state.mainReducer
  );

  const finalUrl = mainUrl + "/categories";

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const fetUrl = async () => {
      const res = await fetch(finalUrl);
      const json = await res.json();

      const data = json.find(
        (category: ArrayProducts) => category.name === nameCategory
      );
      dispatch(setType(data.products));
      dispatch(relevantProduct(data.products));
    };

    fetUrl();
  }, [dispatch, finalUrl, nameCategory]);

  const fetchProducts = async () => {
    const allProducts = await fetch(mainUrl + "/products");
    const json = await allProducts.json();

    dispatch(setType(json));
    dispatch(relevantProduct(json));
  };

  if (typeProductSelected.length <= 0) {
    fetchProducts();
  }

  return (
    <div className="SelectedProduct">
      <FilterModal />
      <ModalCategories />
      <Filter />
      <div className="SelectedProduct-container">
        <Recommendations title={nameCategory} data={typeProductSelected} />
      </div>
      <SortModal />
    </div>
  );
};
