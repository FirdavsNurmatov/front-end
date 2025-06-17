import { useState } from "react";
import prMain from "../assets/svg/products/product2.svg";
import pr2 from "../assets/svg/products/product3.svg";
import pr3 from "../assets/svg/products/product4.svg";
import { Button } from "../components/button";
import StarRating from "../components/star-rating";
import minus from "../assets/svg/products/minus.svg";
import plus from "../assets/svg/products/plus.svg";

export const Products = () => {
  const [val, func] = useState(1);

  const subtract = () => {
    if (val >= 2) {
      func(val - 1);
    }
  };

  const add = () => {
    func(val + 1);
  };

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
              <div className="pb-[24px]">
                <h2 className="font-bold text-[40px] text-[#000]">
                  ONE LIFE GRAPHIC T-SHIRT
                </h2>
                <div className="flex gap-[13px] py-[14px]">
                  <StarRating />
                  <p className="font-family font-normal text-[14px]">
                    {"3.0"}/<span className="text-[rgba(0,0,0,0.6)]">5</span>
                  </p>
                </div>
                <p className=" font-bold text-[32px] text-[#000] pb-[20px]">
                  $260
                  {/* <span className=" minus-through text-[rgba(0,0,0,0.3)]">
                    $300
                  </span> */}
                </p>
                <p className="font-normal text-[16px] leading-[137%] text-[rgba(0,0,0,0.6)]">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
              </div>
              <div className="border-y-1 border-[rgba(0,0,0,0.1)] py-[24px]">
                <p className="font-family font-normal text-[16px] text-[rgba(0,0,0,0.6)]">
                  Choose Size
                </p>
                <div className="flex gap-[12px] pt-[16px]">
                  <Button
                    className={
                      "text-[rgba(0,0,0,0.6)] rounded-[62px] py-[12px] px-[24px] bg-[#f0f0f0] cursor-pointer"
                    }
                    text={"Small"}
                  />
                  <Button
                    className={
                      "text-[rgba(0,0,0,0.6)] rounded-[62px] py-[12px] px-[24px] bg-[#f0f0f0] cursor-pointer"
                    }
                    text={"Medium"}
                  />
                  <Button
                    className={
                      "text-[rgba(0,0,0,0.6)] rounded-[62px] py-[12px] px-[24px] bg-[#f0f0f0] cursor-pointer"
                    }
                    text={"Large"}
                  />
                  <Button
                    className={
                      "text-[rgba(0,0,0,0.6)] rounded-[62px] py-[12px] px-[24px] bg-[#f0f0f0] cursor-pointer"
                    }
                    text={"X-Large"}
                  />
                </div>
              </div>
              <div className="flex gap-[20px] justify-evenly py-[24px]">
                <div className="bg-[#f0f0f0] flex items-center rounded-[62px] py-[16px] px-[20px]">
                  <button onClick={subtract}>
                    <img src={minus} alt="subtract" />
                  </button>
                  <span className="font-family font-medium text-[16px] px-[38px]">
                    {val}
                  </span>
                  <button onClick={add}>
                    <img src={plus} alt="add" />
                  </button>
                </div>
                <button className="font-family font-medium text-[16px] rounded-[62px] grow py-[16px] px-[54px] bg-black text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
