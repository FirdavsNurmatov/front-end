import React from "react";
import { CartComp } from "../components/cart-comp";

export const Cart = () => {
  return (
    <>
      <section className="your_cart">
        <div className="container">
          <div className="border-1 border-[rgba(0,0,0,0.1)] rounded[20px] py-[20px] px-[24px]">
            <CartComp
              className={"flex gap-[16px] border-[rgba(0,0,0,0.1)] pb-[24px]"}
              name={"Gradient Graphic T-shirt"}
              size={"Large"}
              color={"White"}
              price={"$145"}
            />
            <CartComp
              className={
                "flex gap-[16px] border-b-1 border-t-1 border-[rgba(0,0,0,0.1)] py-[24px]"
              }
              name={"CHECKERED SHIRT"}
              size={"Medium"}
              color={"Red"}
              price={"$180"}
            />
            <CartComp
              className={"flex gap-[16px]  border-[rgba(0,0,0,0.1)] pt-[24px]"}
              name={"Skinny Fit Jeans"}
              size={"Large"}
              color={"Blue"}
              price={"$240"}
            />
          </div>
          <div className="border-1 border-[rgba(0,0,0,0.1)] rounded[20px] p-[20px 24px] "></div>
        </div>
      </section>
    </>
  );
};
