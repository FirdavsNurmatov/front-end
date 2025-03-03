import React, { useEffect } from "react";
import product from "../assets/svg/cart/product.svg";
import deleteIcon from "../assets/svg/cart/delete-icon.svg";

export const CartComp = ({ img, name, size, color, price, className }) => {
  const count = 1;

  return (
    <div className={className}>
      <img src={img ? img : product} alt="img" />
      <div className="flex grow justify-between">
        <div>
          <h4 className="font-bold text-[20px] text-[#000]">{name}</h4>
          <p className="font-normal text-[14px] text-[#000]">
            Size: <span className="text-[rgba(0,0,0,0.6)]">{size}</span>
          </p>
          <p className="font-normal text-[14px] text-[#000]">
            Color: <span className="text-[rgba(0,0,0,0.6)]">{color}</span>
          </p>
          <p className="font-bold text-2xl text-[#000] mt-[15px]">{price}</p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <button className="cursor-pointer">
            <img src={deleteIcon} alt="delete" />
          </button>
          <div className="flex bg-[#f0f0f0] rounded-[62px] py-[12px] px-[20px] items-center">
            <button className="p-[4px] font-bold">-</button>
            <p className="px-[20px]">{count}</p>
            <button className="p-[4px] font-bold">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
