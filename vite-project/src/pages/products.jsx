import React from "react";
import prMain from "../assets/svg/products/product2.svg";
import pr2 from "../assets/svg/products/product3.svg";
import pr3 from "../assets/svg/products/product4.svg";
import { Button } from "../components/button";

export const Products = () => {
  return (
    <>
      <section className="hero py-[40px]">
        <div className="container">
          <div className="hero__block flex justify-between gap-[40px]">
            <div className="flex gap-3.5">
              <div className=" flex flex-col gap-3.5">
                <img src={prMain} alt="img" className="w-[157px] h-[167px]" />
                <img src={pr2} alt="img" className="w-[157px] h-[167px]" />
                <img src={pr3} alt="img" className="w-[157px] h-[167px]" />
              </div>
              <img src={prMain} alt="img" className="w-[444px]" />
            </div>
            <div className="w-[600px]">
              <div className="border-b-1 border-[rgba(0,0,0,0.1)] pb-[24px]">
                <h2 className="font-bold text-[40px] text-[#000]">
                  One Life Graphic T-shirt
                </h2>
                <p className="font-bold text-[32px] text-[#000]">
                  $260
                  <span className=" line-through text-[rgba(0,0,0,0.3)]">
                    $300
                  </span>
                </p>
                <p className="font-normal text-[16px] leading-[137%] text-[rgba(0,0,0,0.6)]">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
              </div>
              <div className=" border-y-1 border-[rgba(0,0,0,0.1)] py-[24px]">
                <p>Choose Size</p>
                <div>
                  <Button
                    className={
                      "rounded-[62px] py-[12px] px-[24px] bg-[#f0f0f0] cursor-pointer"
                    }
                    text={"Small"}
                  />
                  <Button
                    className={
                      "rounded-[62px] py-[12px] px-[24px] bg-[#f0f0f0] cursor-pointer"
                    }
                    text={"Medium"}
                  />
                  <Button
                    className={
                      "rounded-[62px] py-[12px] px-[24px] bg-[#f0f0f0] cursor-pointer"
                    }
                    text={"Large"}
                  />
                  <Button
                    className={
                      "rounded-[62px] py-[12px] px-[24px] bg-[#f0f0f0] cursor-pointer"
                    }
                    text={"X-Large"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
