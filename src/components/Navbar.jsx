import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { RiHeart2Line } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className="flex w-full h-24 bg-primary">
      <div className="flex w-[80%]  mx-auto items-center justify-between ">
        <img
          src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/icons/logo_pantaloons.svg"
          alt="logo"
          className="flex items-center cursor-pointer "
          onClick={() => navigate("/")}
        />
        <div className="flex gap-4 text-white text-xl cursor-pointer">
          <p onClick={() => navigate("/login")}>Login</p>
          <p onClick={() => navigate("/register")}>Register</p>
        </div>
        {/* <div className="flex relative">
          <input
            type="text"
            class="py-3 px-7 rounded-xl border border-white
          bg-primary placeholder-white "
            placeholder="Search for products and
          more..."
          />
          <div className="flex absolute inset-y-0 right-3  items-center cursor-pointer">
            <CiSearch className="text-white font-semibold" size={30} />
          </div>
          
        </div> */}

        <div className="flex items-center gap-10">
          <BsPerson size={30} className="text-white hover:text-yellow" />
          <RiHeart2Line size={30} className="text-white hover:text-yellow" />
          <RiShoppingBag3Line
            size={30}
            className="text-white hover:text-yellow"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
