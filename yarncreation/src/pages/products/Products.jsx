import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductItem from "../../components/ProductItem";

const Products = () => {
  const { products } = useContext(ShopContext); // Get products from context
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setShowProducts(products);
    } else {
      setShowProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="mx-14 bg-[#f5f5f5]">
        <div className="mb-4">
          <button
            className={`px-4 py-2 mx-2 font-bold mt-2 ${
              selectedCategory === "all"
                ? "bg-[#ff5733] text-white rounded-lg"
                : "text-black"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 mx-2 font-bold mt-2 ${
              selectedCategory === "keychain"
                ? "bg-[#ff5733] text-white rounded-lg"
                : "text-black"
            }`}
            onClick={() => setSelectedCategory("keychain")}
          >
            Keychains
          </button>
          <button
            className={`px-4 py-2 mx-2 font-bold mt-2 ${
              selectedCategory === "toys"
                ? "bg-[#ff5733] text-white rounded-lg"
                : "text-black"
            }`}
            onClick={() => setSelectedCategory("toys")}
          >
            Toys
          </button>

          <button
            onClick={() => setSelectedCategory("muffler")}
            className={`px-4 py-2 mx-2 font-bold mt-2 ${
              selectedCategory === "muffler"
                ? "bg-[#ff5733] text-white rounded-lg"
                : "text-black"
            }`}
          >
            Muffler
          </button>
          <button
            onClick={() => setSelectedCategory("beanie")}
            className={`px-4 py-2 mx-2 font-bold mt-2 ${
              selectedCategory === "beanie"
                ? "bg-[#ff5733] text-white rounded-lg"
                : "text-black"
            }`}
          >
            Beanies
          </button>

          <button
            className={`px-4 py-2 mx-2 font-bold mt-2 ${
              selectedCategory === "flower"
                ? "bg-[#ff5733] text-white rounded-lg"
                : "text-black"
            }`}
            onClick={() => setSelectedCategory("flower")}
          >
            Flower
          </button>

          <button
            className={`px-4 py-2 mx-2 font-bold mt-2 ${
              selectedCategory === "cardigan"
                ? "bg-[#ff5733] text-white rounded-lg"
                : "text-black"
            }`}
            onClick={() => setSelectedCategory("cardigan")}
          >
            Cardigan
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          {showProducts.map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-[360px] bg-[#f5f5f5] p-2 rounded-lg shadow"
            >
              <ProductItem
                id={item.id}
                name={item.name}
                image={item.image}
                short_des={item.description}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
