import { useForm } from "react-hook-form";
import logo from "../assets/svg/logo.svg";
import shopIcon from "../assets/svg/header/shop-icon.svg";
import profileIcon from "../assets/svg/header/profile-icon.svg";
import searchIcon from "../assets/svg/header/search-icon.svg";
import { useNavigate } from "react-router-dom";
import menuIcon from "../assets/svg/header/menu-icon.svg";

export const Header = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className=" bg-black flex justify-center py-[10px]">
        <p className="font-family font-normal text-[12px] lg:text-[14px] text-[#fff] ">
          Sign up and get 20% off to your first order.{" "}
          <span className="cursor-pointer font-medium border-b-1">
            Sign Up Now
          </span>
        </p>
      </div>
      <div className="container flex justify-between items-center gap-10 py-6">
        <div className="flex items-center gap-[16px]">
          <button className="lg:hidden">
            <img src={menuIcon} alt="menu" />
          </button>
          <img
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
            className="cursor-pointer h-[18px] w-[126px] lg:w-auto lg:h-auto"
          />
        </div>
        <ul className="hidden lg:flex lg:gap-6">
          <li>
            <select name="shop" className="cursor-pointer">
              <option value="">Shop</option>
              <option value="">Dress</option>
              <option value="">Jacket</option>
            </select>
          </li>
          <li>
            <a href="#">On Sale</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
        </ul>
        <form
          onSubmit={handleSubmit(submit)}
          className="lg:block lg:grow lg:relative hidden"
        >
          <img
            src={searchIcon}
            alt="icon"
            className=" absolute top-[12px] left-4"
          />
          <input
            type="text"
            placeholder="Search for products..."
            {...register("searchProduct")}
            className="bg-[#f0f0f0] py-3 pl-13.5 pr-2.5 w-[100%] rounded-[62px]"
          />
        </form>
        <div className="flex gap-3.5">
          <button className="lg:hidden">
            <img src={searchIcon} alt="search" />
          </button>
          <a href="#">
            <img src={shopIcon} alt="shop" />
          </a>
          <a href="#">
            <img src={profileIcon} alt="profile" />
          </a>
        </div>
      </div>
    </>
  );
};
