import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { cartProducts as setCart } from "../features/mainSlices";
import { ArrayProducts } from "../types";
import icon from "../icons/logo-todo.png";
import { useNavigate } from "react-router-dom";
import "./CartProducts.css";

export const CartProducts = () => {
  const { cartProducts } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

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
    let values: ArrayProducts[] = [...cartProducts]
    const index = cartProducts.findIndex((item: ArrayProducts) => item.id === product.id)
    
    values.splice(index, 1)
    dispatch(setCart([...values]))  
  }

  const handleDeleteProducts = (product: ArrayProducts) => {
    const values = cartProducts.filter((item: ArrayProducts) => item.id !== product.id)
    dispatch(setCart(values))  
  }

  return (
    <div className="CartProducts">
      <div className="CartProducts-title">
        <p>Shoping Cart</p>
        <span>{cartProducts.length}</span>
      </div>
      <a
        href="https://alicbm.github.io/todo-app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="CartProducts-ad">
          <p>"Take control of your habits. Take control of your life"</p>
          <img src={icon} alt="Ad" />
        </div>
      </a>
      {newValue.length > 0 ? (
        newValue.map((product: ArrayProducts) => (
          <div className="CartProducts-product" key={product.id}>
            <div className="CartProducts-product__img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="CartProducts-product__features">
              <p className="CartProducts-product__features-brand">
                {product.brand}
              </p>
              <p className="CartProducts-product__features-name">
                {product.name.split(" ").splice(0, 4).join(" ")}...{" "}
              </p>
              <p className="CartProducts-product__features-price">
                An unit: <strong>$ {product.price}</strong>
              </p>
            </div>
            <div
              onClick={() => handleDeleteProducts(product)}
              className="CartProducts-product__delete"
            >
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
        ))
      ) : (
        <div className="CartProducts-not-product">
          <p>Empty shopping cart, add some products!</p>
          <button onClick={() => navigate("/products")}>See More</button>
        </div>
      )}
    </div>
  );
};
