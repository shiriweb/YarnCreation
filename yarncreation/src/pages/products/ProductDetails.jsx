import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import Footer from "../../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const {activeStatus, products, addCart } = useContext(ShopContext);

  const check = () =>{
    if(!activeStatus){
      alert("Please Login to add to cart");
    }else{
      addCart(product);
    }
  }

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="p-8 text-center">Product not found!</div>;
  }
  return (
    <div className=" flex flex-cols p-2 mx-auto bg-[#f5f5f5] w-full">
      <div className="w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-[460px] h-[450px] ml-24 rounded-lg shadow"
        />
      </div>
      <div className="mt-8 w-1/2 mr-24 ml-20">
        <h1 className="text-3xl font-bold text-[#FF5733] mb-4">
          {product.name}
        </h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className=" text-2xl font-bold mb-4 text-[#FF5733]">
          Rs {product.price}
        </p>
        <button
          className="bg-black w-28 h-10 text-white rounded-lg"
          onClick={() => check()}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
