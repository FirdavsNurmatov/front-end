import React from "react";

export const ProductCard = ({ id, title, img }) => {
  return (
    <div className="w-[200px] h-[200px]">
      <img src={img} alt="img" />
      <h3>{title}</h3>
    </div>
  );
};
