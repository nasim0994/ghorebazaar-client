import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";

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
                  <a href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="">
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
      <div className="bg-gray-100 p-0">
        <div className="w-[93%] mx-auto">
          <div className="flex justify-between">
            {/* Brand */}
            <div>
              <Link>GhoreBazaar</Link>
            </div>
            {/* Center */}
            <div></div>
            {/* End/Cart */}
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
