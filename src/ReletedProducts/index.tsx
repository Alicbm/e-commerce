import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ArrayProducts } from "../types";
import { productSelected as setProduct, cartProducts as setCart } from "../features/mainSlices";
import "./ReletedProducts.css";

export const ReletedProducts = (prop: { data: ArrayProducts[], title: string }) => {
  const { mainUrl, cartProducts } = useAppSelector(state => state.mainReducer)
  const finalUrl = mainUrl + "/products";

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const sendData = (product: ArrayProducts) => {
    dispatch(setProduct(product));
    navigate("/description");
  };

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

  const handleCartProducts = (product: ArrayProducts) => {
    let values: ArrayProducts[] = []
    
    prop.data.forEach((item) => {
      if(item.id === product.id){
        values.push(...cartProducts, item)
      }
    })

    dispatch(setCart([...values]))
  }

  return (
    <div className="ReletedProducts">
      <h2 className="ReletedProducts-title">{prop.title}</h2>
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
                {product.description.split(" ").splice(0, 10).join(" ")}...
              </p>
            </div>
            <div 
              onClick={() => handleCartProducts(product)}
              className="ReletedProducts-container__products-cart"
            >
              <BsFillCartPlusFill />
            </div>
            <div className="ReletedProducts-container__products-heart">
              <label>
                <input 
                  onChange={() => handleChangeFavorite(product.id, product.favorite)}
                  type="checkbox" 
                />
                <span className={product.favorite ? 'favorite-selected' : 'favorite-unselected'}>
                  <FaHeart />
                </span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
