import React from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const ProductItem = ({ id, image, name, short_des, price, description }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/products/${id}`} className="text-gray-700 cursor-pointer">
      <div className="">
        <img className="h-[230px] w-[240px] rounded-lg" src={image} />
      </div>
      <p className="text-[15px] font-bold text-orange-400">{name}</p>
      <p className="text-[9px]">{short_des}</p>
      <p className="text-[12px]">{description}</p>

      <p className="text-sm mt-2 font-bold">
        {currency} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
