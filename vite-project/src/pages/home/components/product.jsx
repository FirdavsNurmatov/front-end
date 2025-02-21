import { Link } from "react-router-dom";

export const Product = ({ imgUrl }) => {
  return (
    <div className=" w-[285px] cursor-pointer">
      <Link to={"/about"}>
        <img src={imgUrl} alt="product" />
        <div className=" bg-[#f4f5f7] pt-[16px] pr-[20px] pb-[30px] pl-[16px]">
          <h3 className=" font-semibold text-2xl text-[#3a3a3a] leading-[120%]">
            Syltherine
          </h3>
          <p className=" font-medium text-[16px] text-[#898989] leading-[150%]">
            Stylish cafe chair
          </p>
          <h3 className=" font-semibold text-[20px] text-[#3a3a3a] leading-[150%]">
            Rp 2.500.000{" "}
            <span className=" ml-[16px] font-normal text-[16px] leading-[150%] text-[#b0b0b0] line-through">
              Rp 3.500.000
            </span>
          </h3>
        </div>
      </Link>
    </div>
  );
};
