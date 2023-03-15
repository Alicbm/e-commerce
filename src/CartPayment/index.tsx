import React from "react";
import { IoLocationSharp } from 'react-icons/io5'
import { FaTruck } from 'react-icons/fa'
import dinersClub from '../icons/diners-club.png'
import paypal from '../icons/paypal.png'
import creditCard from '../icons/credit-card.png'
import visa from '../icons/visa.png'
import americanExpress from '../icons/american-express.png'
import money from '../icons/dinero.png'
import { useAppSelector } from "../store/hooks";
import { ArrayProducts } from "../types";
import "./CartPayment.css";

export const CartPayment = () => {
  const { cartProducts } = useAppSelector(state => state.mainReducer)

  let newValue:ArrayProducts[] = []
  cartProducts.forEach((product: ArrayProducts) => {
    let test = newValue.filter(item => item.id === product.id)

    if(test.length <= 0){
      newValue.push(product)
    }
  })

  let value: number[] = []
  cartProducts.forEach((item: ArrayProducts) => {
    value.push(item.price)
  })

  const totalPrice = value.reduce((a:number, b:number) => a + b)

  const findSameProduct = (id: number) => {
    let values: ArrayProducts[] = []

    cartProducts.filter((product: ArrayProducts) => {
      if(product.id === id){
        values.push(product)
      }
    })

    return values.length
  }

  return (
    <div className="CartPayment">
      <div className="CartPayment-title">
        <p>Summary of your Purchase</p>
      </div>
      <div className="CartPayment-selected">
        {newValue.map((product: ArrayProducts) => (
          <div className="CartPayment-selected__container" key={product.id}>
            <p className="CartPayment-selected__container-name">
              {product.name.split(" ").splice(0, 5).join(" ")}...
            </p>
            <p className="CartPayment-selected__container-units">{findSameProduct(product.id)} units</p>
            <h3 className="CartPayment-selected__container-price">{product.price}</h3>
          </div>
        ))}
      </div>
      <div className="CartPayment-total">
        <h3>Total:</h3>
        <p>{totalPrice}</p>
      </div>
      <div className="CartPayment-button">
        <button>Continue</button>
      </div>
      <div className="CartPayment-location">
        <span>
          <IoLocationSharp />
        </span>
        <p>The price is the same all over the world</p>
      </div>
      <div className="CartPayment-shipping">
        <span>
          <FaTruck />
        </span>
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
