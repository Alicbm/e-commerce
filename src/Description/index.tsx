import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useAppSelector } from "../store/hooks";
import "./Description.css";

export const Description = () => {
  const { productSelected, mainUrl } = useAppSelector(state => state.mainReducer)
  const finalUrl = mainUrl + "/products";
  

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
            <button className="Description-info__add">Add to Cart</button>
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
          <p>Up to 48 fees: 48 USD</p>
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
