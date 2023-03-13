import React from "react";
import "./CartPayment.css";

export const CartPayment = () => {
  return (
    <div className="CartPayment">
      <div className="CartPayment-title">
        <p>Summary of your Purchase</p>
      </div>
      <div className="CartPayment-selected">
        <div className="CartPayment-selected__container">
          <p className="CartPayment-selected__container-name">Iphone 13 Pro</p>
          <p className="CartPayment-selected__container-units">2 units</p>
          <h3 className="CartPayment-selected__container-price">4.350.000</h3>
        </div>
      </div>
      <div className="CartPayment-total">
        <h3>Total:</h3>
        <p>8.700.000</p>
      </div>
      <div className="CartPayment-location">
        <span></span>
        <p>The price is the same all over the world</p>
      </div>
      <div className="CartPayment-shipping">
        <span></span>
        <p>Free Shipping</p>
      </div>
      <div className="CartPayment-payment">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
