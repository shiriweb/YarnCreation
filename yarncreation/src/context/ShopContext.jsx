import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [activeStatus, setActiveStatus] = useState(false);
  const [userStatus, setUserStatus] = useState({ id: null, username: null });

  const currency = "Rs";
  const delivery_charge = 100;
  const [carts, setCarts] = useState(getFromLocalStorage("carts") || {});
  const [invoice, setInvoice] = useState({ count: 0, subTotal: 0 });

  const addCart = (product) => {
    if (!userStatus.id) return; // Prevent modification if user is not logged in
    const userId = userStatus.id;
    setCarts((prevCarts) => {
      const userCart = prevCarts[userId] || [];
      let updatedCart = [...userCart];
      const isProduct = updatedCart.find((prod) => prod.id === product.id);
      if (!isProduct) {
        updatedCart.push({ ...product, quantity: 1 });
      } else {
        updatedCart = updatedCart.map((prod) =>
          prod.id === isProduct.id
            ? { ...isProduct, quantity: isProduct.quantity + 1 }
            : prod
        );
      }
      const newCarts = { ...prevCarts, [userId]: updatedCart };
      saveToLocalStorage("carts", newCarts);
      return newCarts;
    });
  };

  const removeCart = (userId, product) => {
    if (!activeStatus) {
      alert("Please login to remove from cart");
      return false;
    }
    setCarts((prevCarts) => {
      const userCart = prevCarts[userId] || [];
      const updatedCart = userCart.filter((item) => item.id !== product.id);
      const newCarts = { ...prevCarts, [userId]: updatedCart };
      saveToLocalStorage("carts", newCarts);
      return newCarts;
    });
  };

  const setInvoiceData = () => {
    if (!userStatus.id) return;
    const userCart = carts[userStatus.id] || [];
    let newInvoice = { count: 0, subTotal: 0 };
    userCart.forEach((product) => {
      newInvoice.count += product.quantity;
      newInvoice.subTotal += product.quantity * product.price;
    });
    setInvoice(newInvoice);
  };

  useEffect(() => {
    if (userStatus.id) {
      setInvoiceData();
    }
  }, [carts, userStatus.id]);

  useEffect(() => {
    const savedCarts = getFromLocalStorage("carts") || {};
    setCarts(savedCarts);
  }, []);

  return (
    <ShopContext.Provider
      value={{
        activeStatus,
        setActiveStatus,
        userStatus,
        setUserStatus,
        products,
        carts,
        currency,
        delivery_charge,
        addCart,
        invoice,
        setInvoiceData,
        setCarts,
        removeCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
