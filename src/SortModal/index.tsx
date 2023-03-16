import React from "react";
import { CgClose } from "react-icons/cg";
import { sortModal as setSort } from "../features/mainSlices";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ArrayProducts } from "../types";
import { typeProductSelected as setType } from "../features/mainSlices";
import "./SortModal.css";

export const SortModal = () => {
  const { sortModal, typeProductSelected, relevantProduct, refreshValues, refreshValuesTwo } =
    useAppSelector((state) => state.mainReducer);
  const [option, setOption] = React.useState("relevant");

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (option === "lower") {
      let newArray = [...typeProductSelected];
      newArray.sort(
        (priceA: ArrayProducts, priceB: ArrayProducts) =>
          priceA.price - priceB.price
      );
      dispatch(setType(newArray));
    } else if (option === "higher") {
      let newArray = [...typeProductSelected];
      newArray.sort(
        (priceA: ArrayProducts, priceB: ArrayProducts) =>
          priceB.price - priceA.price
      );
      dispatch(setType(newArray));
    } else if (option === "relevant") {
      dispatch(setType(relevantProduct));
    }
  }, [option, refreshValues, refreshValuesTwo]);

  return (
    <div className={sortModal ? "SortModal sort-active" : "SortModal"}>
      <span
        onClick={() => dispatch(setSort(false))}
        className="SortModal-close"
      >
        <CgClose />
      </span>
      <h1 className="SortModal-title">Sort by</h1>
      <div className="SortModal-container">
        <div
          onClick={() => setOption("relevant")}
          className={option === "relevant" ? "sort-select" : ""}
        >
          <p>More relevant</p>
        </div>
        <div
          onClick={() => setOption("lower")}
          className={option === "lower" ? "sort-select" : ""}
        >
          <p>Lower price</p>
        </div>
        <div
          onClick={() => setOption("higher")}
          className={option === "higher" ? "sort-select" : ""}
        >
          <p>Higher price</p>
        </div>
      </div>
    </div>
  );
};
