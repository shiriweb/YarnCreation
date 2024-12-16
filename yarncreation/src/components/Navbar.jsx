import React, { useContext, useState } from "react";
import Logo from "../assets/images/logos.png"; // Adjust the path as needed
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../context/ShopContext";
import { faUser, faHeart, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { invoice } = useContext(ShopContext); // Only import once

  return (
    <div className="flex h-15 w-full bg-[#f5f5f5] items-center">
      <div className="ml-16 cursor-pointer ">
        <Link to="/">
          <img className="w-20 h-15" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="ml-20 flex space-x-10 cursor-pointer items-center">
        <Link
          className={`font-bold text-lg ${
            menu === "home" ? "text-[#FF5733]" : "text-black"
          }`}
          to="/"
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <Link
          className={`font-bold text-lg ${
            menu === "products" ? "text-[#FF5733]" : "text-black"
          }`}
          to="/products"
          onClick={() => setMenu("products")}
        >
          Products
        </Link>
        <Link
          className={`font-bold text-lg ${
            menu === "aboutus" ? "text-[#FF5733]" : "text-black"
          }`}
          to="/aboutus"
          onClick={() => setMenu("aboutus")}
        >
          About
        </Link>
        <Link
          className={`font-bold text-lg ${
            menu === "contact" ? "text-[#FF5733]" : "text-black"
          }`}
          to="/contact"
          onClick={() => setMenu("contact")}
        >
          Contact
        </Link>
      </div>
      <div className="flex ml-[350px] mr-20 text-lg text-black space-x-2">
        <Link to="/login">
          <button className="w-24 border border-gray-400 text-sm p-2 rounded-lg shadow hover:bg-[#FF5733] hover:text-white hover:border-collapse">
            Login
          </button>
        </Link>


        <Link to={'/cart'}>
        <div className="relative" >
          <FontAwesomeIcon className="" icon={faShoppingCart} />
          {invoice?.count > 0 && (
            <div className="absolute top-2 right-2 w-4 h-4 text-xs bg-blue-700 text-white flex items-center justify-center rounded-full">
              {invoice?.count}
            </div>
          )}
        </div>
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
