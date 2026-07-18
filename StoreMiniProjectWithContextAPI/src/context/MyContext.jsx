import { createContext, useState } from "react";

export const Mystore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const incrementQuantity = (id) => {
    setCartItem((prev) => {
      return prev.map((ele) => {
        return ele.id == id ? { ...ele, quantity: (ele.quantity += 1) } : ele;
      });
    });
  };

  const decrementQuantity = (id) => {
    setCartItem((prev) => {
      return prev.map((ele) => {
        return ele.id == id
          ? { ...ele, quantity: ele.quantity > 1 ? (ele.quantity -= 1) : 1 }
          : ele;
      });
    });
  };

  return (
    <Mystore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItem,
        setCartItem,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </Mystore.Provider>
  );
};
