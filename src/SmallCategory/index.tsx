import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  typeProductSelected,
  nameCategory as setNameCategory,
  refreshValues as setRefresh,
} from "../features/mainSlices";
import { AnyAction } from "redux";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ArrayCategory, ArrayProducts } from "../types";
import "./SmallCategory.css";

export const SmallCategory = (prop: {
  state: boolean;
  setState: (res: boolean) => AnyAction;
  category: ArrayCategory;
}) => {
  const { refreshValues } = useAppSelector((state) => state.mainReducer);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const dataFinal: string[] = [];

  const handleCategories = () => {
    navigate("/products");
    dispatch(setNameCategory(prop.category.name));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(prop.setState(event.target.checked));
  };

  const listTypeProducts = (category: ArrayProducts[]) => {
    category.map((product: ArrayProducts) => {
      const nameProduct = product.product;
      const findProduct = dataFinal.find((product) => product === nameProduct);
      if (!findProduct) {
        dataFinal.push(nameProduct);
      }
      return findProduct;
    });
  };
  listTypeProducts(prop.category.products);

  const handleCheckHeart = () => {
    const inputElements = Array.from(
      document.querySelectorAll("input")
    ) as HTMLInputElement[];

    let newArray: ArrayProducts[] = [];

    inputElements.forEach((type: HTMLInputElement) => {
      if (type.checked) {
        prop.category.products.filter((item: ArrayProducts) => {
          if (item.product === type.value) {
            return newArray.push(item);
          }
        });
      }
    });

    dispatch(typeProductSelected([...newArray]));
    dispatch(setRefresh(!refreshValues));
  };

  return (
    <div className="SmallCategory" key={prop.category.id}>
      <label className="SmallCategory-title">
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
          checked={prop.state}
          className="SmallCategory-checkbox"
        />
        <p onClick={handleCategories}>{prop.category.name}</p>
        <span>
          {!prop.state ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </span>
      </label>
      <ul
        className={
          !prop.state
            ? `SmallCategory-list ${prop.state}-show`
            : "SmallCategory"
        }
      >
        {dataFinal.map((product: string) => (
          <li
            onClick={handleCategories}
            className="SmallCategory-list__item"
            key={product}
          >
            <label>
              <input
                onChange={handleCheckHeart}
                type="checkbox"
                value={product}
                className="categories-checkbox"
              />
              {product}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
