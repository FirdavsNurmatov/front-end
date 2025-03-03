import React from "react";
import { Button } from "../components/button";
import vercaceIcon from "../assets/svg/brands/versace.svg";
import zaraIcon from "../assets/svg/brands/zara.svg";
import gucciIcon from "../assets/svg/brands/gucci.svg";
import pradaIcon from "../assets/svg/brands/prada.svg";
import calvinKleinIcon from "../assets/svg/brands/calvin-klein.svg";
import productImg from "../assets/svg/products/product.svg";

const icons = [
  { id: 1, product: vercaceIcon },
  { id: 2, product: zaraIcon },
  { id: 3, product: gucciIcon },
  { id: 4, product: pradaIcon },
  { id: 5, product: calvinKleinIcon },
];

export const Home = () => {
  return (
    <>
      <section className="hero pt-[103px] pb-[116px] bg-[#F2F0F1]">
        <div className="container flex justify-between">
          <div className="w-[577px] flex flex-col gap-8">
            <h1 className="font-bold text-[64px] leading-[100%] text-[#000]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="font-normal text-[16px] leading-[137%] text-[rgba(0,0,0,0.6)]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button
              link={"/products"}
              className={
                " rounded-[62px] py-[16px] px-[54px] text-[#fff] bg-[#000] w-[210px] cursor-pointer"
              }
              text={"Shop Now"}
            />
            <div className="w-[596px] flex">
              <div className="pr-[32px] border-r-1 border-[rgba(0,0,0,0.1)]">
                <h4 className="font-bold text-[40px] text-[#000]">200+</h4>
                <p className="font-normal text-[16px] leading-[137%] text-[rgba(0,0,0,0.6)]">
                  Internationl Brands
                </p>
              </div>
              <div className="px-[32px] border-r-1 border-[rgba(0,0,0,0.1)]">
                <h4 className="font-bold text-[40px] text-[#000]">2,000+</h4>
                <p className="font-normal text-[16px] leading-[137%] text-[rgba(0,0,0,0.6)]">
                  High-Quality Products
                </p>
              </div>
              <div className="pl-[32px]">
                <h4 className="font-bold text-[40px] text-[#000]">30,000+</h4>
                <p className="font-normal text-[16px] leading-[137%] text-[rgba(0,0,0,0.6)]">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <img src="" alt="img" />
        </div>
      </section>
      <section className="brands bg-black">
        <div className="container flex gap-[106px] py-[45px]">
          {icons.map((item) => (
            <img key={item.id} src={item.product} alt="img" />
          ))}
        </div>
      </section>
      <section className="products pt-[72px] pb-[80px]">
        <div className="container">
          <div>
            <h2 className="font-bold text-[48px]  text-center text-[#000]">
              NEW ARRIVALS
            </h2>
            <div className="pt-[55px] pb-[64px] text-center">
              <div className="flex mb-[36px] gap-[20px] text-start">
                <div>
                  <img src={productImg} alt="img" />
                  <p className="pt-[16px]">T-SHIRT WITH TAPE DETAILS</p>
                </div>
                <div>
                  <img src={productImg} alt="img" />
                  <p className="pt-[16px]">T-SHIRT WITH TAPE DETAILS</p>
                </div>
                <div>
                  <img src={productImg} alt="img" />
                  <p className="pt-[16px]">T-SHIRT WITH TAPE DETAILS</p>
                </div>
                <div>
                  <img src={productImg} alt="img" />
                  <p className="pt-[16px]">T-SHIRT WITH TAPE DETAILS</p>
                </div>
              </div>
              <Button
                className={
                  "border cursor-pointer rounded-[62px] py-[16px] px-[54px] w-[218px]"
                }
                text={"View All"}
                link={"/products"}
              />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-[48px]  text-center text-[#000]">
              TOP SELLING
            </h2>
          </div>
          <div className="pt-[55px] pb-[64px] text-center">
            <div className="flex mb-[36px] gap-[20px] text-start">
              <div>
                <img src={productImg} alt="img" />
                <p className="pt-[16px]">T-SHIRT WITH TAPE DETAILS</p>
              </div>
              <div>
                <img src={productImg} alt="img" />
                <p className="pt-[16px]">T-SHIRT WITH TAPE DETAILS</p>
              </div>
              <div>
                <img src={productImg} alt="img" />
                <p className="pt-[16px]">T-SHIRT WITH TAPE DETAILS</p>
              </div>
              <div>
                <img src={productImg} alt="img" />
                <p className="pt-[16px]">T-SHIRT WITH TAPE DETAILS</p>
              </div>
            </div>
            <Button
              className={
                "border cursor-pointer rounded-[62px] py-[16px] px-[54px] w-[218px]"
              }
              text={"View All"}
              link={"/products"}
            />
          </div>
        </div>
      </section>
    </>
  );
};
