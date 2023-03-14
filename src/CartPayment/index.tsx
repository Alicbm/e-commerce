import React from "react";
import { IoLocationSharp } from 'react-icons/io5'
import { FaTruck } from 'react-icons/fa'
import dinersClub from '../icons/diners-club.png'
import paypal from '../icons/paypal.png'
import creditCard from '../icons/credit-card.png'
import visa from '../icons/visa.png'
import americanExpress from '../icons/american-express.png'
import money from '../icons/dinero.png'
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
      <div className="CartPayment-button">
        <button>Continue</button>
      </div>
      <div className="CartPayment-location">
        <span><IoLocationSharp /></span>
        <p>The price is the same all over the world</p>
      </div>
      <div className="CartPayment-shipping">
        <span><FaTruck /></span>
        <p>Free Shipping</p>
      </div>
      <div className="CartPayment-payment">
        <span>
          <img src={dinersClub} alt="dinersClub" />
        </span>
        <span>
          <img src={paypal} alt="paypal" />
        </span>
        <span>
          <img src={creditCard} alt="creditCard" />
        </span>
        <span>
          <img src={visa} alt="visa" />
        </span>
        <span>
          <img src={americanExpress} alt="americanExpress" />
        </span>
        <span>
          <img src={money} alt="money" />
        </span>
      </div>
    </div>
  );
};
