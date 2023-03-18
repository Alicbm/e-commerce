import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { cartProducts as setCart } from "../features/mainSlices";
import { ArrayProducts } from "../types";
import "./Description.css";

export const Description = () => {
  const { productSelected, mainUrl, cartProducts, relevantProduct } = useAppSelector(state => state.mainReducer)
  const [selected, setSelected] = React.useState<ArrayProducts[]>([]);
  const finalUrl = mainUrl + "/products";
  
  const dispatch = useAppDispatch();
  const dues: string = (productSelected.price / 12).toFixed();

  const handleChangeFavorite = async (
    id: number,
    favResponse: boolean
  ) => {
    const data = {
      favorite: !favResponse,
    };

    await fetch(finalUrl + "/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  React.useEffect(() => {
    const fetUrl = async () => {
      const res = await fetch(finalUrl);
      const json = await res.json();

      setSelected(json)
    };

    fetUrl();
  }, []);

  const handleCartProducts = () => {
    let values: ArrayProducts[] = []
    let copy: ArrayProducts[] = [...cartProducts]
    
    selected.forEach((item: ArrayProducts) => {
      if(item.id === productSelected.id){
        values.push(...copy, item)
      }
    })

    dispatch(setCart([...values]))
  }

  return (
    <div className="Description">
      <div className="Description-container">
        <div className="Description-image">
          <img src={productSelected?.image} alt="Product Selected" />
        </div>
        <div className="Description-info">
          <p className="Description-info__brand">{productSelected?.brand}</p>
          <h3 className="Description-info__name">{productSelected?.name}</h3>
          <h2 className="Description-info__price">
            USD {productSelected?.price}
          </h2>
          <p className="Description-info__description">
            {productSelected?.description}
          </p>
          <div className="Description-info__buttons">
            <button className="Description-info__buy">Buy Product</button>
            <button 
              onClick={handleCartProducts}
              className="Description-info__add">
              Add to Cart
            </button>
          </div>
          <div className="Description-info__heart">
            <label>
              <input
                onChange={() =>
                  handleChangeFavorite(productSelected.id, productSelected.favorite)
                }
                type="checkbox"
              />
              <span
                className={
                  productSelected.favorite ? "Description-selected" : "Description-unselected"
                }
              >
                <FaHeart />
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="Description-details">
        <div className="Description-details__product">
          <span>
            <FaHandHoldingUsd />
          </span>
          <p>Up to 12 fees: {dues} USD</p>
        </div>
        <div className="Description-details__product">
          <span>
            <FaTruck />
          </span>
          <p>Free Shipping</p>
        </div>
        <div className="Description-details__product">
          <span>
            <FaAward />
          </span>
          <p>1 Year Warranty</p>
        </div>
      </div>
    </div>
  );
};
