import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { ArrayProducts } from "../types";
import { productSelected as setProduct } from '../features/mainSlices'
import "./ReletedProducts.css";

export const ReletedProducts = (prop: {data: ArrayProducts[]}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const sendData = (product: ArrayProducts) => {
    dispatch(setProduct(product))
    navigate('/description')
  }

  return (
    <div className="ReletedProducts">
      <h2 className="ReletedProducts-title">Related Products</h2>
      <div className="ReletedProducts-container">
        {prop.data.map((product) => (
          <div className="ReletedProducts-container__products" key={product.id}>
            <div className="ReletedProducts-container__products-img">
              <img
                src={product.image}
                alt={product.description}
                onClick={() => sendData(product)}
              />
            </div>
            <div onClick={() => sendData(product)}>
              <p className="ReletedProducts-container__products-brand">
                {product.brand}
              </p>
              <p className="ReletedProducts-container__products-name">
                {product.name}
              </p>
              <h4 className="ReletedProducts-container__products-price">
                USD {product.price}
              </h4>
              <p className="ReletedProducts-container__products-description">
                Aqui va una pequeña descripcion del producto
              </p>
            </div>
            <div className="ReletedProducts-container__products-cart">
              <BsFillCartPlusFill />
            </div>
            <div className="ReletedProducts-container__products-heart">
              <FaHeart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
