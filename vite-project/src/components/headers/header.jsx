import React from "react";
import "./header.css";
import logoImg from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div className="container">
      <div className="header__block">
        <a href="#">
          <img src={logoImg} alt="logo" />
        </a>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#">Pricing</a>
          </li>
          <li className="nav__item">
            <a href="#">Product</a>
          </li>
          <li className="nav__item">
            <a href="#">About Us</a>
          </li>
          <li className="nav__item">
            <a href="#">Careers</a>
          </li>
          <li className="nav__item">
            <a href="#">Community</a>
          </li>
        </ul>
        <button className="header__btn">Get Started</button>
      </div>
    </div>
  );
};
