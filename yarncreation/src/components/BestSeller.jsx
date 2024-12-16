import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]);

  return (
    <div>
      <div className="mt-2 text-center text-2xl">
        <Title text1={"Best"} text2={"Seller"} />
      </div>
      <div className="flex gap-3 mx-14">
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="w-[250px] h-[360px] bg-[#f5f5f5] p-2 rounded-lg shadow"
          >
            <ProductItem
              id={item.id}
              name={item.name}
              short_des={item.description}
              image={item.image}
              price={item.price}
            />  
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
