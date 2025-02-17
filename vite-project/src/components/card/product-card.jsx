import React from "react";

export const ProductCard = ({ id, title, img }) => {
  return (
    <div>
      <img src={img} alt="book" />
      <h3>{title}</h3>
    </div>
  );
};
