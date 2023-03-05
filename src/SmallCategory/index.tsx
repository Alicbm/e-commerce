import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { AnyAction } from "redux";
import { useAppDispatch } from "../store/hooks";
import { ArrayProducts } from "../types";
import "./SmallCategory.css";

export const SmallCategory = (prop: {
  state: boolean;
  setState: (res: boolean) => AnyAction;
  title: string;
  categoryProduct: ArrayProducts[];
}) => {
  const dispatch = useAppDispatch();
  const dataFinal: string[] = [];

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(prop.setState(event.target.checked));
  };

  const listTypeProducts = (category: ArrayProducts[]) => {
    category.map((product: ArrayProducts) => {
      const nameProduct = product.product;
      const findProduct = dataFinal.find((product) => product == nameProduct);
      if (!findProduct) {
        dataFinal.push(nameProduct);
      }
    });
  };
  listTypeProducts(prop.categoryProduct);  

  return (
    <div className="SmallCategory">
      <label className="SmallCategory-title">
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
          checked={prop.state}
          className="SmallCategory-checkbox"
        />
        <p>{prop.title}</p>
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
        {dataFinal.map((product) => (
          <li className="SmallCategory-list__item">
            <label>
              <input
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
