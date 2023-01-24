import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiHeart, FiMenu } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";

const Header = () => {
  return (
    <header>
      {/* Top Header */}
      <div className=" bg-primary text-base-100 py-2">
        <div className="w-[93%] mx-auto">
          <div className="lg:flex justify-between">
            <div className="hidden lg:block">
              <p className="text-sm font-medium">
                Convenient Bazaar on Your Hand
              </p>
            </div>
            <div>
              <ul className="flex gap-2 justify-center">
                <li>
                  <a href="" className="text-md">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="" className="text-lg">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaPinterestP />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTelegramPlane />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gray-100 py-3">
        <div className="w-[93%] mx-auto">
          <div className="flex items-center justify-between">
            {/* Mobile Drayer */}
            <div className="lg:hidden flex gap-1 items-center text-lg font-medium text-neutral">
              <FiMenu /> <span className="hidden md:block">MENU</span>
            </div>
            {/* Brand */}
            <div>
              {/*  */}
              <Link
                to="/home"
                className=" font-semibold text-lg md:text-2xl lg:text-3xl"
              >
                <span className="text-primary">Ghore</span>
                <span className="text-secondary ">Bazaar</span>
              </Link>
            </div>
            {/* Center */}
            <div className="w-[60%] hidden lg:block">
              <form>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search for Products"
                    className="w-[90%] outline-none px-4 py-2 border-2"
                  />
                  <button className="text-2xl bg-primary text-base-100 w-12 h-[42px] flex justify-center items-center">
                    <BiSearchAlt2 />
                  </button>
                </div>
              </form>
            </div>
            {/* End/Cart */}
            <div className="flex gap-4 items-center">
              <div className="hidden lg:block">
                <Link
                  to=""
                  className="text-neutral uppercase text-[15px] font-medium hover:text-neutral-content"
                >
                  Login/Register
                </Link>
              </div>
              <div className="flex gap-4 items-center">
                <button className="text-xl hover:text-neutral-content">
                  <FiHeart />
                </button>
                <div>
                  <button className="flex gap-1 items-center hover:text-neutral-content">
                    <span className="text-xl">
                      <BsBag />
                    </span>
                    <div className="hidden md:flex items-center hover:text-textSecondary ">
                      <span className="text-lg">
                        <TbCurrencyTaka />
                      </span>
                      <span className="ml-[-3px] font-semibold">100.00</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
