import React from "react";
import { CartComp } from "../components/cart-comp";
import { Button } from "../components/button";

export const Cart = () => {
  return (
    <>
      <section className="your_cart">
        <div className="container">
          <div className="flex gap-5">
            <div className="border-1 border-[rgba(0,0,0,0.1)] rounded-[20px] py-[20px] px-[24px] grow">
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
                className={
                  "flex gap-[16px]  border-[rgba(0,0,0,0.1)] pt-[24px]"
                }
                name={"Skinny Fit Jeans"}
                size={"Large"}
                color={"Blue"}
                price={"$240"}
              />
            </div>
            <div className=" flex flex-col gap-[24px] border-1 border-[rgba(0,0,0,0.1)] rounded-[20px] py-[20px] px-[24px] ">
              <p className="font-bold text-2xl text-[#000]">Order Summary</p>
              <div>
                <div className="border-b-1  flex flex-col gap-[20px] pb-5">
                  <div className="flex justify-between">
                    <p className="font-normal text-[20px] text-[rgba(0,0,0,0.6)]">
                      Subtotal
                    </p>
                    <p className="font-bold text-[20px] text-right text-[#000]">
                      $565
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-normal text-[20px] text-[rgba(0,0,0,0.6)]">
                      Discount (-20%)
                    </p>
                    <p className="font-bold text-[20px] text-right text-[#f33]">
                      -$113
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-normal text-[20px] text-[rgba(0,0,0,0.6)]">
                      Delivery Fee
                    </p>
                    <p className="font-bold text-[20px] text-right text-[#000]">
                      $15
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pt-5">
                  <p className="font-normal text-[20px] text-[#000]">Total</p>
                  <p className="font-bold text-2xl text-right text-[#000]">
                    $467
                  </p>
                </div>
              </div>
              <div>
                <form className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="font-normal text-[16px] grow bg-[#f0f0f0] py-[12px] pl-[52px] pr-[16px] rounded-[62px]"
                  />
                  <Button
                    text={"Apply"}
                    className={
                      "bg-[#000] rounded-[62px] text-[#fff] py-[12px] px-[16px] w-[119px]"
                    }
                  />
                </form>
              </div>
              <Button
                text={"Go to Checkout"}
                className={
                  "text-[#fff] bg-[#000] rounded-[62px] py-[16px] px-[54px]"
                }
                link={"/"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
