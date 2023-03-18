import React from "react";
import avatar from "../images/myAvatar.png";
import "./Comercial.css";

export const Comercial = () => {
  return (
    <div className="Comercial">
      <div className="Comercial-one">
        <h2>Pelisflix</h2>
        <p>This is a place to know the new and the best movies!</p>

        <a
          href="https://alicbm.github.io/pelisflix/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>See More</button>
        </a>
      </div>
      <div className="Comercial-two">
        <div className="Comercial-two__image">
          <img src={avatar} alt="My Avatar" />
        </div>
        <div className="Comercial-two__info">
          <h2>Alic Barandica</h2>
          <p>I invite you to my portfolio, with some of my projects</p>
        </div>

        <a
          href="https://alicbm.github.io/alicbarandica.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="Comercial-button">See More</button>
        </a>
      </div>
    </div>
  );
};
