import React from "react";
import { FaTrashAlt } from 'react-icons/fa'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'
import "./CartProducts.css";

export const CartProducts = () => {
  return (
    <div className="CartProducts">
      <div className="CartProducts-title">
        <p>Shoping Cart</p>
        <span>2</span>
      </div>
      <div className="CartProducts-ad"></div>
      <div className="CartProducts-product">
        <div className="CartProducts-product__img">
          <img src="https://raw.githubusercontent.com/Alicbm/store-image/master/tecnology/cell-2.png" alt="" />
        </div>
        <div className="CartProducts-product__features">
          <p className="CartProducts-product__features-brand">IPHONE</p>
          <p className="CartProducts-product__features-name">Iphone 13 Pro</p>
          <p className="CartProducts-product__features-price">
            An unit: <strong>4.350.000</strong>
          </p>
        </div>
        <div className="CartProducts-product__delete">
          <p>Delete Item:</p>
          <span><FaTrashAlt /></span>
        </div>
        <div className="CartProducts-product__add">
          <p>Number items:</p>
          <div className="CartProducts-product__add-buttons">
            <button><FaMinus /></button>
            <span>2</span>
            <button><BiPlusMedical /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
