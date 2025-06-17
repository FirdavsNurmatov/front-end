import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import emailIcon from "../assets/svg/footer/email-icon.svg";
import visa from "../assets/svg/footer/visa.svg";
import mastercard from "../assets/svg/footer/mastercard.svg";
import paypal from "../assets/svg/footer/paypal.svg";
import applePay from "../assets/svg/footer/applePay.svg";
import googlePay from "../assets/svg/footer/googlePay.svg";
import logo from "../assets/svg/logo.svg";
import facebook from "../assets/svg/footer/facebook.svg";
import instagram from "../assets/svg/footer/instagram.svg";
import github from "../assets/svg/footer/github.svg";

export const Footer = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-[#f0f0f0] mt-[169px]">
      <div className="container relative top-[-89px]">
        <div className="flex flex-col gap-[50px]">
          <div className="lg:flex-row lg:justify-between bg-black flex flex-col items-center gap-[32px] rounded-[20px] py-[36px] px-[64px]">
            <h2 className="second-family font-bold text-[40px] leading-[112%] lg:w-[551px] w-[327px] text-white">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <form
              onSubmit={handleSubmit(submit)}
              className="w-[349px] flex flex-col gap-[14px] relative"
            >
              <img
                src={emailIcon}
                alt="email"
                className="absolute left-4 top-2.5"
              />
              <input
                type="text"
                placeholder="Enter your email address"
                {...register("emailAddress")}
                className="bg-white outline-none border-none font-normal text-[16px]  w-[100%] h-[46px] rounded-[62px] py-[14px] pl-[52px]"
              />
              <Button
                type="submit"
                className={
                  "font-medium font-family text-[16px] w-[100%] h-[46px] rounded-[62px] py-[12px] px-[16px] bg-white"
                }
                text={"Subscribe to Newsletter"}
              />
            </form>
          </div>
          <div className="flex justify-between ">
            <div className="w-[248px]">
              <a href="/">
                <img src={logo} alt="logo" className="cursor-pointer" />
              </a>
              <p className="pt-[25px] pb-[35px] font-family font-normal text-[14px] leading-[157%] text-[rgba(0,0,0,0.6)]">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex gap-[12px]">
                <a href="">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="">
                  <img src={github} alt="github" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="pb-[26px] font-family font-medium text-[16px] leading-[112%] tracking-[0.19em] uppercase">
                COMPANY
              </h5>
              <ul className="flex flex-col gap-4.5 text-[rgba(0,0,0,0.6)] font-family font-normal text-[16px] leading-[119%]">
                <a href="">
                  <p>About</p>
                </a>
                <a href="">
                  <p>Features</p>
                </a>
                <a href="">
                  <p>Works</p>
                </a>
                <a href="">
                  <p>Career</p>
                </a>
              </ul>
            </div>
            <div>
              <h5 className="pb-[26px] font-family font-medium text-[16px] leading-[112%] tracking-[0.19em] uppercase">
                HELP
              </h5>
              <ul className="flex flex-col gap-4.5 text-[rgba(0,0,0,0.6)] font-family font-normal text-[16px] leading-[119%]">
                <a href="">
                  <p>Customer Support</p>
                </a>
                <a href="">
                  <p>Delivery Details</p>
                </a>
                <a href="">
                  <p>Terms & Conditions</p>
                </a>
                <a href="">
                  <p>Privacy Policy</p>
                </a>
              </ul>
            </div>
            <div>
              <h5 className="pb-[26px] font-family font-medium text-[16px] leading-[112%] tracking-[0.19em] uppercase">
                FAQ
              </h5>
              <ul className="flex flex-col gap-4.5 text-[rgba(0,0,0,0.6)] font-family font-normal text-[16px] leading-[119%]">
                <a href="">
                  <p>Account</p>
                </a>
                <a href="">
                  <p>Manage Deliveries</p>
                </a>
                <a href="">
                  <p>Orders</p>
                </a>
                <a href="">
                  <p>Payments</p>
                </a>
              </ul>
            </div>
            <div>
              <h5 className="pb-[26px] font-family font-medium text-[16px] leading-[112%] tracking-[0.19em] uppercase">
                RESOURCES
              </h5>
              <ul className="flex flex-col gap-4.5 text-[rgba(0,0,0,0.6)] font-family font-normal text-[16px] leading-[119%]">
                <a href="">
                  <p>Free eBooks</p>
                </a>
                <a href="">
                  <p>Development Tutorial</p>
                </a>
                <a href="">
                  <p>How to - Blog</p>
                </a>
                <a href="">
                  <p>Youtube Playlist</p>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-[50px] mb-[20px] text-[rgba(0,0,0,0.1)]" />
        <div className="flex justify-between items-center">
          <p className="font-family font-normal text-right text-[14px] text-[rgba(0,0,0,0.6)]">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <ul className="flex gap-[12px]">
            <li>
              <a href="">
                <img src={visa} alt="visa" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={mastercard} alt="mastercard" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={paypal} alt="paypal" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={applePay} alt="apple pay" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={googlePay} alt="google pay" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
