import React from "react";
import { Link } from "react-router-dom";
import Cardigian from "../../assets/images/cardigian/1.jpg";
import Keychain from "../../assets/images/keychain/13.jpg";
import Muffler from "../../assets/images/beanie/2.jpg";
import Toys from "../../assets/images/toys/15.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
const Collection = () => {
  const { products } = useContext(ShopContext); // Get products from context
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [showProducts, setShowProducts] = useState([]);

  // useEffect(() => {
  //   if (selectedCategory) {
  //     setShowProducts(products);
  //   } else {
  //     setShowProducts(
  //       products.filter((product) => product.category === selectedCategory)
  //     );
  //     showProducts();
  //   }
  // }, [selectedCategory, products]);

  return (
    <div className="bg-[#f5f5f5] m-0 p-0 w-full h-[430px] ">
      <div className="flex w-full relative">
        <div className="w-1/2 ">
          <img
            className="w-[440px] h-[400px] rounded-lg mx-32"
            src={Cardigian}
          />
          <h1 className="absolute top-36 left-72 text-white text-[30px] font-bold p-2">
            Cardigan Sweater
          </h1>
          <Link to="products">
            <button  onClick={() => setSelectedCategory("cardigian")} className="absolute top-[220px] left-96 bg-slate-600 border text-white text-[12px] p-2 w-24 rounded-2xl font-bold hover:bg-[#f5f5f5] hover:text-black">
              Shop Now
          </button>
          </Link>
        </div>
        <div className="w-1/2 ml-2 relative">
          <div className="flex flex-col h-1/2 ">
            <div className="flex space-x-1">
              <img
                className="w-[210px] h-[190px] mb-2  rounded-lg"
                src={Keychain}
                alt="keychain"
              />
              <h1 className="absolute top-2 left-0 text-black text-[22px] font-extrabold p-2">
                Keychain
              </h1>
              <Link to="products">
                <button onClick={() => setSelectedCategory("keychain")} className="absolute left-2 top-12 bg-slate-600 border w-20 text-white text-[12px] p-2 rounded-2xl  font-bold hover:bg-[#f5f5f5] hover:text-black">
                  Shop Now
                </button>
              </Link>
              <img
                className="w-[210px] h-[190px] rounded-lg"
                src={Muffler}
                alt="keychain"
              />
              <h1 className="absolute top-2 left-56 text-white text-[22px] font-extrabold p-2">
                Beanie
              </h1>
              <Link to="products">
                <button onClick={() => setSelectedCategory("beanie")} className="absolute top-12 left-[235px] bg-slate-600  text-white text-[12px] border p-2 w-20 rounded-2xl font-bold hover:bg-[#f5f5f5] hover:text-black">
                  Shop Now
                </button>
              </Link>
            </div>
            <img
              className=" w-[432px] h-[200px] rounded-lg"
              src={Toys}
              alt="keychain"
            />
            <h1 className="absolute top-52 left-3 text-black text-[25px] font-extrabold p-2">
              Crochet Flower
            </h1>
            <Link to="products">
              <button onClick={() => setSelectedCategory("flower")} className="absolute top-60 left-4  text-blue-700 text-[13px] p-2  rounded-2xl font-extrabold  hover:text-white">
                Shop Now <FontAwesomeIcon icon={faArrowRight} />{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
