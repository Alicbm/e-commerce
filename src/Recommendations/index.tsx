import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { productSelected as setProduct, cartProducts as setCart } from "../features/mainSlices";
import { ArrayProducts } from "../types";
import { useNavigate } from "react-router-dom";
import "./Recommendations.css";

export const Recommendations = (prop: {
  title: string;
  data: ArrayProducts[];
}) => {
  const { mainUrl, cartProducts } = useAppSelector((state) => state.mainReducer);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const finalUrl = mainUrl + "/products";

  const handleChangeFavorite = async (id: number, favResponse: boolean) => {
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
    dispatch(setProduct(product));
    navigate("/description");
  };

  const handleCartProducts = (product: ArrayProducts) => {
    let values: ArrayProducts[] = []
    let copy: ArrayProducts[] = [...cartProducts]
    
    prop.data.forEach((item) => {
      if(item.id === product.id){
        values.push(...copy, item)
      }
    })

    dispatch(setCart([...values]))
  }

  return (
    <div className="Recommendations">
      <h2 className="Recommendations-title">{prop.title}</h2>
      <div className="Recommendations-container">
        {prop.data?.map((product: ArrayProducts) => (
          <div className="Recommendations-container__products" key={product.id}>
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
                {product.description.split(" ").splice(0, 10).join(" ")}...
              </p>
            </div>
            <div 
              onClick={() => handleCartProducts(product)}
              className="Recommendations-container__products-cart"
            >
              <BsFillCartPlusFill />
            </div>
            <div className="Recommendations-container__products-heart">
              <label>
                <input
                  onChange={() =>
                    handleChangeFavorite(product.id, product.favorite)
                  }
                  type="checkbox"
                />
                <span
                  className={
                    product.favorite ? "heart-selected" : "heart-unselected"
                  }
                >
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
