import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { userStatus,activeStatus, carts, invoice, removeCart, setCarts, setInvoiceData } =
    useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus && userStatus.id) {
      setInvoiceData();
    }
  }, [carts, userStatus.id]);

  if (!userStatus || !userStatus.id) {
    return (
      <div className="flex items-center text-2xl justify-center p-4 gap-2 text-gray-600">
        <span>Please log in to view your cart</span>
        <Link className="text-blue-600" to={"/login"}>
          Log In
        </Link>
      </div>
    );
  }

  const userId = userStatus.id;
  const cart = carts[userId] || [];

  const checkUser = (product) => {
    if (userStatus) {
      removeCart(userId, product);
    } else {
      alert("Please Login to remove from cart");
    }
  };

  const placeOrder = () => {
    setCarts((prevCarts) => ({ ...prevCarts, [userId]: [] }));
    setInvoiceData();
    navigate("/success");
  };

  return (
    <div className="p-4 bg-[#f2f2f2]">
      {activeStatus ? (
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
                  onClick={() => checkUser(product)}
                />
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex items-center text-2xl justify-center p-4 gap-2 text-gray-600">
          <span>Log in to view your cart</span>
          <FontAwesomeIcon icon={faShoppingCart} />
          {/* <Link className="text-blue-600" to={"/"}>
            Add Products
          </Link> */}
        </div>
      )}

      {activeStatus && (
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
