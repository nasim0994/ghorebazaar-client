import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
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
const categorys = [
  {
    item: "Baby Products",
    dropdown: [
      {
        item: "Baby Accessories",
      },
      {
        item: "Baby Food",
        subDropdown: [
          { item: "Baby Cereal" },
          { item: "Baby Honey" },
          { item: "Formula Milk" },
          { item: "Baby Biscotti" },
          { item: "Juise & Pure" },
        ],
      },
      {
        item: "Bath & Skincare",
      },
      {
        item: "Oral Care",
      },
    ],
  },
  {
    item: "Chocolates",
    dropdown: [
      {
        item: "Cadbury",
      },
      {
        item: "Candy",
      },
      {
        item: "Kit-Kat",
      },
      {
        item: "Lollipops",
      },
      {
        item: "Mints",
      },
    ],
  },
  {
    item: "Sports",
  },
];

const Header = () => {
  const [searchCategory, setSearchCategory] = useState(false);
  const [fixedForm, setFixedForm] = useState(false);
  const [categoryInput, setCategoryInput] = useState("");
  let menuRef = useRef();
  let fixedFormRef = useRef();

  const handelCategoryList = (e) => {
    setSearchCategory(false);
    setCategoryInput(e.target.innerText);
  };

  // Outside click to hide category Lists
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setSearchCategory(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  //Login Form Hide Click to Other side
  useEffect(() => {
    let handelForm = (e) => {
      if (!fixedFormRef.current.contains(e.target)) {
        setFixedForm(false);
      }
    };
    document.addEventListener("mousedown", handelForm);
    return () => {
      document.removeEventListener("mousedown", handelForm);
    };
  }, []);

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
                <div className="flex items-center relative">
                  <input
                    type="text"
                    placeholder="Search for Products"
                    className="w-[73%] outline-none px-4 py-2 pr-0 border-2"
                  />
                  <input
                    type="text"
                    placeholder="Select Category"
                    className="p-2 border-2 outline-none border-l-0 w-40 cursor-pointer text-neutral-content/80"
                    readOnly
                    value={categoryInput}
                    onClick={() =>
                      setSearchCategory((searchCategory) => !searchCategory)
                    }
                  />
                  <button className="text-2xl bg-primary text-base-100 w-12 h-[42px] flex justify-center items-center">
                    <BiSearchAlt2 />
                  </button>

                  {/* Search Category */}
                  <div
                    className={`${
                      searchCategory
                        ? "search-category search-category-show shadow-md"
                        : "search-category"
                    }`}
                    id="searchCategoryList"
                    ref={menuRef}
                  >
                    <ul>
                      {categorys.map((li) =>
                        li.dropdown && li.dropdown.length > 0 ? (
                          <>
                            <li onClick={handelCategoryList}>{li.item}</li>
                            <ul className="pl-4">
                              {li.dropdown.map((subLi) =>
                                subLi.subDropdown &&
                                subLi.subDropdown.length > 0 ? (
                                  <>
                                    <li onClick={handelCategoryList}>
                                      {subLi.item}
                                    </li>
                                    <ul className="pl-4">
                                      {subLi.subDropdown.map((subsubLi) => (
                                        <li onClick={handelCategoryList}>
                                          {subsubLi.item}
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                ) : (
                                  <li onClick={handelCategoryList}>
                                    {subLi.item}
                                  </li>
                                )
                              )}
                            </ul>
                          </>
                        ) : (
                          <li onClick={handelCategoryList}>{li.item}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            {/* End/Cart */}
            <div className="flex gap-4 items-center">
              <div className="hidden lg:block header-signin relative">
                <Link
                  to=""
                  className="text-neutral uppercase text-[15px] font-medium hover:text-neutral-content py-5  "
                >
                  Login/Register
                </Link>

                {/* Hover SignIn Form */}
                <div
                  className={`${
                    fixedForm ? "account-fixed-form" : "account-form"
                  } shadow`}
                >
                  <form className="p-5">
                    <div className="flex justify-between border-b pb-2">
                      <h2 className="text-lg font-bold ">SIGN IN</h2>
                      <Link className="text-[#2a3382] text-sm hover:underline">
                        Create an Account
                      </Link>
                    </div>
                    <div className="py-3">
                      <label htmlFor="email" className="pb-3">
                        <span className="text-neutral"> Email </span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="border w-full outline-none px-2 py-1"
                        // id="fixedFormInput1"
                        ref={fixedFormRef}
                        required
                        onClick={() => setFixedForm(true)}
                      />
                    </div>
                    <div className="pb-3">
                      <label htmlFor="password" className="pb-3">
                        <span className="text-neutral"> Password </span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="border w-full outline-none px-2 py-1"
                        // id="fixedFormInput2"
                        ref={fixedFormRef}
                        required
                        onClick={() => setFixedForm(true)}
                      />
                    </div>
                    <button className="w-full bg-primary text-base-100 py-1 hover:bg-secondary duration-300">
                      SIGN IN
                    </button>
                    <div className="flex justify-between pt-3">
                      <div>
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className="cursor-pointer"
                        />
                        <label
                          htmlFor="remember"
                          className="pl-2 cursor-pointer"
                        >
                          Remember me
                        </label>
                      </div>
                      <Link className="text-[#2a3382] text-sm hover:underline">
                        Lost your password?
                      </Link>
                    </div>
                  </form>
                </div>
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
