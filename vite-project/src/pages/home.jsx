import React from "react";
import { Button } from "../components/button";
import vercaceIcon from "../assets/svg/brands/versace.svg";
import zaraIcon from "../assets/svg/brands/zara.svg";
import gucciIcon from "../assets/svg/brands/gucci.svg";
import pradaIcon from "../assets/svg/brands/prada.svg";
import calvinKleinIcon from "../assets/svg/brands/calvin-klein.svg";

const icons = [vercaceIcon, zaraIcon, gucciIcon, pradaIcon, calvinKleinIcon];

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
              link={"/product"}
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
            <img src={item} alt="img" />
          ))}
        </div>
      </section>
    </>
  );
};
