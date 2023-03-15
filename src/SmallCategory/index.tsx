import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  typeProductSelected as setType,
  nameCategory as setNameCategory,
  refreshValues as setRefresh,
} from "../features/mainSlices";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ArrayCategory, ArrayProducts } from "../types";
import "./SmallCategory.css";

export const SmallCategory = (prop: { category: ArrayCategory }) => {
  const [select, setSelect] = React.useState<boolean>(true);

  const { refreshValues, relevantProduct } = useAppSelector((state) => state.mainReducer);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const dataFinal: string[] = [];
  const data: ArrayProducts[] = [...relevantProduct];

  const handleCategories = () => {
    navigate("/products");
    dispatch(setNameCategory(prop.category.name));
  };

  const handleSpecificCategories = () => {
    navigate("/products");
    dispatch(setNameCategory(prop.category.name));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: boolean = event.target.checked;
    setSelect(value);
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
      document.querySelectorAll('input[type="checkbox"].categories-checkbox')
    ) as HTMLInputElement[];

    let newArray: ArrayProducts[] = [];
    const verifyValues = inputElements.every(
      (type: HTMLInputElement) => type.checked === false
    );

    if (!verifyValues) {
      inputElements.forEach((type: HTMLInputElement) => {
        if (type.checked) {
          prop.category.products.filter((item: ArrayProducts) => {
            if (item.product === type.value) {
              return newArray.push(item);
            }
          });
        }
      });
    } else if (!!verifyValues) {
      newArray = [...data];
    }
    
    dispatch(setType([...newArray]));
    dispatch(setRefresh(!refreshValues));
  };

  return (
    <div className="SmallCategory" key={prop.category.id}>
      <label className="SmallCategory-title">
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
          checked={select}
          className="SmallCategory-checkbox"
        />
        <p onClick={handleCategories}>{prop.category.name}</p>
        <span>{!select ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>
      </label>
      <ul
        className={
          !select ? `SmallCategory-list ${select}-show` : "SmallCategory"
        }
      >
        {dataFinal.map((product: string) => (
          <li
            onClick={handleSpecificCategories}
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
