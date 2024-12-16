import React from "react";
import image from "../../assets/images/homeeee.jpg";
import { Link } from "react-router-dom";
const FirstDiv = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] max-h-[450px] max-w-[1100px] flex relative">
        <div className="ml-12 overflow-hidden">
          <img className="h-full w-full object-cover" src={image} alt="Home" />
          <div className="absolute top-44 left-44 flex text-[#f5f5f5] text-[36px] font-bold">
            Enjoy the refined softness of our yarn products
          </div>
          <div className="absolute top-60 left-[430px]">
          <Link to="/products"><button className="border border-white text-sm font-bold rounded-md text-black p-3 mx-2 hover:bg-black hover:text-white">Explore Products</button></Link>
          <Link to="/login"><button className="border border-white text-sm font-bold rounded-md w-28 text-white p-3 hover:bg-black hover:text-white">Login</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstDiv;
