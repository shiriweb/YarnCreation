import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const currency = "Rs";
  const delivery_charge = 100;
  const [cart, setCart] = useState([]);
  const [invoice, setInvoice] = useState({count: 0, subTotal:0 });
  const addCart = (product) => {
    console.log(product);
    setCart((oldCart) => {
      let previous = [...oldCart];
      if (previous.length < 1) {
        previous.push({ ...product, quantity: 1 });
      } else {
        const isProduct = previous.find((prod) => prod.id === product.id);
        if (!isProduct) {
          previous.push({ ...product, quantity: 1 });
        } else {
          previous = previous.map((prod) => {
            return prod.id === isProduct.id
              ? { ...isProduct, quantity: isProduct.quantity + 1 }
              : prod;
          });
        }
      }
      return previous;
    });
  };
  const removeCart = (product) => {
    setCart((oldCart) => {
      const previous = [...oldCart];
      const isProduct = previous.find(prod => prod.id === product.id); // Fix typo: 'prodiuct' -> 'product'
      if (isProduct) {
        const index = previous.indexOf(isProduct);
        previous.splice(index, 1);
      }
      return previous;
    });
  };   
     

  const setInvoiceData = () => {
    setInvoice(previous=> {
      let newInvoice = { ...previous, count: 0, subTotal: 0 };

      cart.forEach((product) => {
        newInvoice.count += product.quantity;
        newInvoice.subTotal += product.quantity * product.price;
      });
      return newInvoice;
    });
  };
  useEffect(() => {
    setInvoiceData();
  }, [cart]);
  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cart,
        currency: currency,
        delivery_charge: delivery_charge,
        addCart,invoice, setInvoice, setCart,removeCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
