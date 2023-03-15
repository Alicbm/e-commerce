import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { cartProducts as setCart } from "../features/mainSlices";
import { ArrayProducts } from "../types";
import ad from "../icons/avengers_ad.png";
import "./CartProducts.css";

export const CartProducts = () => {
  const { cartProducts } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();

  let newValue:ArrayProducts[] = []
  cartProducts.forEach((product: ArrayProducts) => {
    let test = newValue.filter(item => item.id === product.id)

    if(test.length <= 0){
      newValue.push(product)
    }
  })
  
  const findSameProduct = (id: number) => {
    let values: ArrayProducts[] = []

    cartProducts.filter((product: ArrayProducts) => {
      if(product.id === id){
        values.push(product)
      }
    })

    return values.length
  }
  
  const handlePlusProduct = (product: ArrayProducts) => {
    let values: ArrayProducts[] = []
    
    newValue.forEach((item: ArrayProducts) => {
      if(item.id === product.id){
        values.push(...cartProducts, item)
      }
    })

    dispatch(setCart([...values]))    
  }

  const handleMenusProduct = (product: ArrayProducts) => {
    let values: ArrayProducts[] = []
    const index = cartProducts.findIndex((item: ArrayProducts) => item.id === product.id)

    for (let i = 0; i < cartProducts.length; i++) {
      if (i !== index) {
        values.push(cartProducts[i])
      }
    }
    dispatch(setCart([...values]))

  }

  return (
    <div className="CartProducts">
      <div className="CartProducts-title">
        <p>Shoping Cart</p>
        <span>{cartProducts.length}</span>
      </div>
      <div className="CartProducts-ad">
        <img src={ad} alt="Ad" />
      </div>
      {newValue.map((product: ArrayProducts) => (
        <div className="CartProducts-product" key={product.id}>
          <div className="CartProducts-product__img">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="CartProducts-product__features">
            <p className="CartProducts-product__features-brand">{product.brand}</p>
            <p className="CartProducts-product__features-name">
              {product.name.split(" ").splice(0, 4).join(" ")}...            </p>
            <p className="CartProducts-product__features-price">
              An unit: <strong>$ {product.price}</strong>
            </p>
          </div>
          <div className="CartProducts-product__delete">
            <p>Delete Item:</p>
            <span>
              <FaTrashAlt />
            </span>
          </div>
          <div className="CartProducts-product__add">
            <p>Number items:</p>
            <div className="CartProducts-product__add-buttons">
              <button onClick={() => handleMenusProduct(product)}>
                <FaMinus />
              </button>
              <span>{findSameProduct(product.id)}</span>
              <button onClick={() => handlePlusProduct(product)}>
                <BiPlusMedical />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
