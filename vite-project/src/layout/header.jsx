import logo from "../assets/header/logo.svg";
import accountIcon from "../assets/header/account.svg";
import searchIcon from "../assets/header/search.svg";
import likedIcon from "../assets/header/liked.svg";
import shopIcon from "../assets/header/shop.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container flex justify-between items-center mt-[29px] mb-[29px]">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <ul className=" flex gap-[75px]">
        <li>
          <a href="#" className=" font-medium caret-white size-1">
            <Link to={"/"}>Home</Link>
          </a>
        </li>
        <li>
          <a href="#" className=" font-medium caret-white size-1">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className=" font-medium caret-white size-1">
            <Link to={"/about"}>About</Link>
          </a>
        </li>
        <li>
          <a href="#" className=" font-medium caret-white size-1">
            Contacts
          </a>
        </li>
      </ul>
      <ul className="flex gap-[45px]">
        <li>
          <a href="#">
            <img src={accountIcon} alt="img" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={searchIcon} alt="img" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={likedIcon} alt="img" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={shopIcon} alt="img" />
          </a>
        </li>
      </ul>
    </div>
  );
};
