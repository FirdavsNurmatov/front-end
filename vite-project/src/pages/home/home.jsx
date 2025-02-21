import { MainLayout } from "../../layout/main-layout";
import { Product } from "./components/product";
import { HeroItem } from "./components/heroItem";
import bedroomImg from "../../assets/hero/bedroom.svg";
import livingroomImg from "../../assets/hero/living.svg";
import diningroomImg from "../../assets/hero/dining.svg";
import productImg from "../../assets/product.svg";

export const Home = () => {
  return (
    <MainLayout>
      <section className="hero">
        <div className="container">
          <h2 className=" font-bold text-[32px] text-[#333] mt-[56px] text-center ">
            Browse The Range
          </h2>
          <p className=" font-normal text-[20px] text-[#666] text-center mb-[62px]">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <div className="flex gap-[20px]">
            <HeroItem imgUrl={diningroomImg} roomName={"Dining"} />
            <HeroItem imgUrl={livingroomImg} roomName={"Living"} />
            <HeroItem imgUrl={bedroomImg} roomName={"Bedroom"} />
          </div>
        </div>
      </section>
      <section className="products py-[56px] text-center">
        <div className="container">
          <h2 className=" font-bold text-[40px] text-center text-[#3a3a3a] leading-[120%] mb-[32px]">
            Our Products
          </h2>
          <div className="grid grid-cols-4 gap-[32px] text-start">
            <Product imgUrl={productImg} />
            <Product imgUrl={productImg} />
            <Product imgUrl={productImg} />
            <Product imgUrl={productImg} />
            <Product imgUrl={productImg} />
            <Product imgUrl={productImg} />
            <Product imgUrl={productImg} />
            <Product imgUrl={productImg} />
          </div>
          <button className="border mt-[32px] font-semibold text-[16px] leading-[150%] text-(--primary) py-[12px] px-[76px] cursor-pointer">
            Show More
          </button>
        </div>
      </section>
    </MainLayout>
  );
};
