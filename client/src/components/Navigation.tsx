import React from "react";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";

const LINKS = ["Solutions", "Develop", "Examples", "Pricing", "Resources"];

function Navigation() {
  return (
    <nav className="w-full flex items-center justify-center md:py-3 md:p-0 p-5 md:bg-transparent md:shadow-none bg-white shadow-lg ">
      <div className="md:max-w-[1170px]  w-full flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={Logo} alt="logo" className="md:w-[12rem] w-[8rem]" />
        </div>
        {/* Links */}
        <div className="md:flex hidden md:gap-5">
          {LINKS.map((link, index) => (
            <span key={index} className="text-lg">
              {link}
            </span>
          ))}
        </div>
        {/* Contact and Menu */}
        <div className="flex gap-2 items-center">
          <Button className="md:flex hidden" name="Contact Us" />

          <GiHamburgerMenu className="text-2xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
