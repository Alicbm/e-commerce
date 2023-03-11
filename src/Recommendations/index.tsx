import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { productSelected as setProduct } from '../features/mainSlices'
import { ArrayProducts } from "../types";
import { useNavigate } from "react-router-dom";
import "./Recommendations.css";

export const Recommendations = (prop: {title: string, data: ArrayProducts[]}) => {
  const { mainUrl } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const finalUrl = mainUrl + "/categories";

  // const [heart, setheart] = React.useState(false);

  // const handleCheckHeart = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setheart(event?.target.checked);
  // }

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

  const sendData = (product: ArrayProducts) => {
    dispatch(setProduct(product))
    navigate('/description')
  }

  return (
    <div className="Recommendations">
      <h2 className="Recommendations-title">{prop.title}</h2>
      <div className="Recommendations-container">
        {prop.data?.map((product: ArrayProducts) => (
          <div
            className="Recommendations-container__products"
            key={product.id}
          >
            <div className="Recommendations-container__products-img">
              <img 
                src={product.image} 
                alt={product.description} 
                onClick={() => sendData(product)}
              />
            </div>
            <div onClick={() => sendData(product)}>
              <p className="Recommendations-container__products-brand">
                {product.brand}
              </p>
              <p className="Recommendations-container__products-name">
                {product.name}
              </p>
              <h4 className="Recommendations-container__products-price">
                USD {product.price}
              </h4>
              <p className="Recommendations-container__products-description">
                Aqui va una pequeña descripcion del producto
              </p>
            </div>
            <div className="Recommendations-container__products-cart">
              <BsFillCartPlusFill />
            </div>
            <div
              onClick={() => handleChangeFavorite(product.id, product.favorite)}
              className="Recommendations-container__products-heart"
            >
              <label>
                <input type="checkbox" />
                {!product.favorite ? <FaRegHeart /> : <FaHeart />}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
