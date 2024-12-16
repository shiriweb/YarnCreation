import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, invoice, removeCart, setCart, setInvoice } =
    useContext(ShopContext); // Destructure removeCart from context
  const navigate = useNavigate();

  const placeOrder = () => {
    setCart([]);
    setInvoice({ count: 0, subTOtal: 0 });
    navigate("/success");
  };
  return (
    <div className="p-4 bg-[#f2f2f2]">
      {cart.length > 0 ? (
        cart.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center w-[1000px] ml-14 shadow-md p-4 mb-4 bg-white rounded-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[120px] h-[80px] object-contain border gap-4"
              />

              <div className="flex flex-col gap-2 ml-4 w-[800px]">
                <p className="font-bold text-xl">{product.name}</p>
                <p className="text-sm text-gray-500">{product.short_des}</p>
                <p className="text-xs">Qty: {product.quantity}</p>
              </div>

              <div className="flex items-center justify-between w-[200px]">
                <p className="font-semibold">Rs {product.price}</p>

                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-red-600 text-2xl cursor-pointer hover:text-red-800"
                  onClick={() => removeCart(product)}
                />
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex items-center text-2xl justify-center p-4 gap-2 text-gray-600">
          <span>Your Cart is Empty</span>
          <FontAwesomeIcon icon={faShoppingCart} />
          <Link className="text-blue-600" to={"/"}>
            Add Products
          </Link>
        </div>
      )}

      {cart.length > 0 && (
        <div className="flex flex-col items-baseline ml-[830px] gap-3 py-4 mt-6 border-t border-gray-200">
          <p className="font-bold text-lg ">
            Subtotal ({invoice.count} {invoice.count > 1 ? "items" : "item"}):
            Rs {invoice.subTotal}
          </p>
          <button
            className="bg-red-600 text-xs text-white p-2 w-[210px] rounded-md hover:bg-red-700 transition duration-300"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
