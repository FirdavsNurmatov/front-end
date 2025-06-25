import { Button } from "../components/button";
import vercaceIcon from "../assets/svg/brands/versace.svg";
import zaraIcon from "../assets/svg/brands/zara.svg";
import gucciIcon from "../assets/svg/brands/gucci.svg";
import pradaIcon from "../assets/svg/brands/prada.svg";
import calvinKleinIcon from "../assets/svg/brands/calvin-klein.svg";
import productImg from "../assets/svg/products/product.svg";
import casual from "../assets/png/home/casual.png";
import formal from "../assets/png/home/formal.png";
import party from "../assets/png/home/party.png";
import gym from "../assets/png/home/gym.png";
import navigateButton from "../assets/svg/home/navigate-button.svg";
import statusOk from "../assets/svg/home/status-ok.svg";
import StarRating from "../components/star-rating";

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
      <section className="hero bg-[#F2F0F1] ">
        <div className="container lg:bg-[url('src/assets/png/home/models.png')] lg:bg-cover lg:bg-center">
          <div className="max-w-[577px] pt-[40px] lg:pt-[103px] pb-[116px] flex flex-col lg:gap-8 gap-5">
            <h1 className="font-bold text-[36px] lg:text-[64px] leading-[94%] lg:leading-[100%]">
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
                "rounded-[62px] py-[16px] px-[54px] text-[#fff] bg-[#000] grow lg:w-[210px] cursor-pointer"
              }
              text={"Shop Now"}
            />
            <div className="max-w-[596px] flex lg:flex-nowrap flex-wrap lg:gap-0 gap-8">
              <div className="lg:pr-[32px] lg:border-r-1 border-[rgba(0,0,0,0.1)]">
                <h4 className="font-family font-bold text-[24px] lg:text-[40px] text-[#000]">
                  200+
                </h4>
                <p className="font-family font-normal text-[12px] lg:text-[16px] leading-[183%] lg:leading-[137%] text-[rgba(0,0,0,0.6)]">
                  Internationl Brands
                </p>
              </div>
              <div className="lg:px-[32px] lg:border-r-1 border-[rgba(0,0,0,0.1)]">
                <h4 className="font-family font-bold text-[24px] lg:text-[40px] text-[#000]">
                  2,000+
                </h4>
                <p className="font-family font-normal text-[12px] lg:text-[16px] leading-[183%] lg:leading-[137%] text-[rgba(0,0,0,0.6)]">
                  High-Quality Products
                </p>
              </div>
              <div className="lg:pl-[32px]">
                <h4 className="font-family font-bold text-[24px] lg:text-[40px] text-[#000]">
                  30,000+
                </h4>
                <p className="font-family font-normal text-[12px] lg:text-[16px] leading-[183%] lg:leading-[137%] text-[rgba(0,0,0,0.6)]">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brands bg-black">
        <div className="container flex flex-wrap justify-evenly lg:grid lg:grid-cols-5 gap-[106px] lg:justify-items-center items-stretch py-[45px] ">
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
                  <div className="flex flex-col gap-[8px]">
                    <p className="pt-[16px] font-family font-bold text-[20px]">
                      T-shirt with Tape Details
                    </p>
                    <div className="flex gap-[13px]">
                      <StarRating />
                      <p className="font-family font-normal text-[14px]">
                        {"3.0"}/
                        <span className="text-[rgba(0,0,0,0.6)]">5</span>
                      </p>
                    </div>
                    <p className="font-family font-bold text-[24px]">$120</p>
                  </div>
                </div>
                <div>
                  <img src={productImg} alt="img" />
                  <div className="flex flex-col gap-[8px]">
                    <p className="pt-[16px] font-family font-bold text-[20px]">
                      T-shirt with Tape Details
                    </p>
                    <div className="flex gap-[13px]">
                      <StarRating />
                      <p className="font-family font-normal text-[14px]">
                        {"3.0"}/
                        <span className="text-[rgba(0,0,0,0.6)]">5</span>
                      </p>
                    </div>
                    <p className="font-family font-bold text-[24px]">$120</p>
                  </div>
                </div>
                <div>
                  <img src={productImg} alt="img" />
                  <div className="flex flex-col gap-[8px]">
                    <p className="pt-[16px] font-family font-bold text-[20px]">
                      T-shirt with Tape Details
                    </p>
                    <div className="flex gap-[13px]">
                      <StarRating />
                      <p className="font-family font-normal text-[14px]">
                        {"3.0"}/
                        <span className="text-[rgba(0,0,0,0.6)]">5</span>
                      </p>
                    </div>
                    <p className="font-family font-bold text-[24px]">$120</p>
                  </div>
                </div>
                <div>
                  <img src={productImg} alt="img" />
                  <div className="flex flex-col gap-[8px]">
                    <p className="pt-[16px] font-family font-bold text-[20px]">
                      T-shirt with Tape Details
                    </p>
                    <div className="flex gap-[13px]">
                      <StarRating />
                      <p className="font-family font-normal text-[14px]">
                        {"3.0"}/
                        <span className="text-[rgba(0,0,0,0.6)]">5</span>
                      </p>
                    </div>
                    <p className="font-family font-bold text-[24px]">$120</p>
                  </div>
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
          <hr className="text-[rgba(0,0,0,0.1)]" />
          <div>
            <h2 className="font-bold text-[48px] pt-[64px] text-center text-[#000]">
              TOP SELLING
            </h2>
          </div>
          <div className="pt-[55px] text-center">
            <div className="flex mb-[36px] gap-[20px] text-start">
              <div>
                <img src={productImg} alt="img" />
                <div className="flex flex-col gap-[8px]">
                  <p className="pt-[16px] font-family font-bold text-[20px]">
                    T-shirt with Tape Details
                  </p>
                  <div className="flex gap-[13px]">
                    <StarRating />
                    <p className="font-family font-normal text-[14px]">
                      {"3.0"}/<span className="text-[rgba(0,0,0,0.6)]">5</span>
                    </p>
                  </div>
                  <p className="font-family font-bold text-[24px]">$120</p>
                </div>
              </div>
              <div>
                <img src={productImg} alt="img" />
                <div className="flex flex-col gap-[8px]">
                  <p className="pt-[16px] font-family font-bold text-[20px]">
                    T-shirt with Tape Details
                  </p>
                  <div className="flex gap-[13px]">
                    <StarRating />
                    <p className="font-family font-normal text-[14px]">
                      {"3.0"}/<span className="text-[rgba(0,0,0,0.6)]">5</span>
                    </p>
                  </div>
                  <p className="font-family font-bold text-[24px]">$120</p>
                </div>
              </div>
              <div>
                <img src={productImg} alt="img" />
                <div className="flex flex-col gap-[8px]">
                  <p className="pt-[16px] font-family font-bold text-[20px]">
                    T-shirt with Tape Details
                  </p>
                  <div className="flex gap-[13px]">
                    <StarRating />
                    <p className="font-family font-normal text-[14px]">
                      {"3.0"}/<span className="text-[rgba(0,0,0,0.6)]">5</span>
                    </p>
                  </div>
                  <p className="font-family font-bold text-[24px]">$120</p>
                </div>
              </div>
              <div>
                <img src={productImg} alt="img" />
                <p className="pt-[16px] font-family font-bold text-[20px]">
                  T-shirt with Tape Details
                </p>
                <StarRating />
                <p className="font-family font-bold text-[24px]">$120</p>
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
      <section className="browse pb-[80px]">
        <div className="container bg-[#f0f0f0] rounded-[40px] pt-[70px] pb-[76px]">
          <h2 className="font-bold text-[48px] text-center">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="pt-[28px] lg:pt-[64px] lg:px-[64px] flex flex-col gap-[20px]">
            <div className="lg:flex gap-[20px]">
              <a href="">
                <img className="w-[310px] h-[190px] lg:w-auto lg:h-auto" src={casual} alt="casual" />
              </a>
              <a href="">
                <img className="w-[310px] h-[190px] lg:w-auto lg:h-auto" src={formal} alt="formal" />
              </a>
            </div>
            <div className="lg:flex gap-[20px]">
              <a href="">
                <img className="w-[310px] h-[190px] lg:w-auto lg:h-auto" src={party} alt="party" />
              </a>
              <a href="">
                <img className="w-[310px] h-[190px] lg:w-auto lg:h-auto" src={gym} alt="gym" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="comments">
        <div className="container flex flex-col gap-[40px]">
          <div className="flex justify-between">
            <h2 className="font-bold text-[48px]">OUR HAPPY CUSTOMERS</h2>
            <div className="flex gap-[16px]">
              <button>
                <img src={navigateButton} alt="left navigate button" />
              </button>
              <button>
                <img
                  className="rotate-180"
                  src={navigateButton}
                  alt="right navigate button"
                />
              </button>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="border-[rgba(0,0,0,0.1)] border-1 rounded-[20px] py-[28px] px-[32px] max-w-[400px]">
              <StarRating />
              <div className="flex items-center pb-[12px] pt-[16px]">
                <h5 className="font-family font-bold text-[20px] leading-[110%]">
                  Alex K.
                </h5>
                <img
                  className="ml-[4px] w-[24px] h-[24px]"
                  src={statusOk}
                  alt="status"
                />
              </div>
              <p>
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
            <div className="border-[rgba(0,0,0,0.1)] border-1 rounded-[20px] py-[28px] px-[32px] max-w-[400px]">
              <StarRating />
              <div className="flex items-center pb-[12px] pt-[16px]">
                <h5 className="font-family font-bold text-[20px] leading-[110%]">
                  Alex K.
                </h5>
                <img
                  className="ml-[4px] w-[24px] h-[24px]"
                  src={statusOk}
                  alt="status"
                />
              </div>
              <p>
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
