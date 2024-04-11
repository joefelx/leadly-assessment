import Button from "./Button";
import Navigation from "./Navigation";

import RightImage from "../assets/hero-section-right.png";
import BG_IMAGE from "../assets/slide-text-bg.png";
import SIDE_BG from "../assets/sliders-bg.png";

function Header() {
  return (
    <div className="">
      <div className="overflow-hidden md:block hidden">
        <img
          className="w-[40rem] absolute -right-20 -z-10 overflow-hidden"
          src={SIDE_BG}
          alt=""
        />
      </div>
      <Navigation />
      <div className="w-full md:h-[550px] h-[400px] flex items-center justify-center">
        <div className="max-w-[1170px] w-full flex justify-between h-[600px] md:text-left text-center">
          <div className="absolute md:left-[18rem] left-[5rem] top-[10rem] md:w-[20rem] w-[15rem] -z-20">
            <img src={BG_IMAGE} alt="background" />
          </div>
          <div className="mt-32">
            <h1 className="md:text-[3rem]  text-[1.5rem]  font-bold">
              Leading Enterprise
              <br /> Ecommerce Platform in India <br />
              <span className="text-2xl">Build whitelabelled</span>
            </h1>
            <p className="md:text-xl text-md py-5">
              Designed for diverse B2B and B2C business models
            </p>
            <Button name="Schedule a demo" />
          </div>
          <div className="w-[25rem] -z-10 md:block hidden">
            <img src={RightImage} alt="right-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
