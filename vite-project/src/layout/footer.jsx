import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import emailIcon from "../assets/svg/footer/email-icon.svg";
import visa from "../assets/svg/footer/visa.svg";
import mastercard from "../assets/svg/footer/mastercard.svg";
import paypal from "../assets/svg/footer/paypal.svg";
import applePay from "../assets/svg/footer/applePay.svg";
import googlePay from "../assets/svg/footer/googlePay.svg";

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
    <section className="bg-[#f0f0f0]">
      <div className="container pb-[88px]">
        <div className=" flex flex-col gap-[50px]">
          <div className=" bg-black flex items-center justify-between rounded-[20px] py-[36px] px-[64px]">
            <h2 className="second-family font-bold text-[40px] leading-[112%] w-[551px] text-white">
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
          <div className="flex">
            <div>content</div>
            <div>content</div>
          </div>
        </div>
        <hr className="mt-[50px] mb-[20px] text-[rgba(0,0,0,0.1)]" />
        <div className="flex justify-between items-center">
          <p className="font-family font-normal text-right text-[14px] text-[rgba(0,0,0,0.6)]">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <ul className="flex gap-[12px]">
            <li>
              <button>
                <img src={visa} alt="visa" />
              </button>
            </li>
            <li>
              <button>
                <img src={mastercard} alt="mastercard" />
              </button>
            </li>
            <li>
              <button>
                <img src={paypal} alt="paypal" />
              </button>
            </li>
            <li>
              <button>
                <img src={applePay} alt="apple pay" />
              </button>
            </li>
            <li>
              <button>
                <img src={googlePay} alt="google pay" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
