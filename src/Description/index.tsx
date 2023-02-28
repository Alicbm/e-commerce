import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./Description.css";

export const Description = () => {
  return (
    <div className="Description">
      <div className="Description-container">
        <div className="Description-image">
          <img
            src="https://raw.githubusercontent.com/Alicbm/store-image/master/tecnology/laptop-4.png"
            alt="Product Selected"
          />
        </div>
        <div className="Description-info">
          <p className="Description-info__brand">HP</p>
          <h3 className="Description-info__name">Laptop HP Victus 15</h3>
          <h2 className="Description-info__price">USD 1.122</h2>
          <p className="Description-info__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum numquam
            corporis, rerum dolorum dicta quod amet iste neque itaque qui, ea
            veniam porro, nisi repellat? Accusamus incidunt id architecto
            expedita.
          </p>
          <div className="Description-info__buttons">
            <button className="Description-info__buy">Buy Product</button>
            <button className="Description-info__add">Add to Cart</button>
          </div>
          <div className="Description-info__heart">
            <FaHeart />
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
