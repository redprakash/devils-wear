import { createContext, useState } from "react";
export const DevilCart = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <DevilCart.Provider value={{ cart, setCart }}>
      {children}
    </DevilCart.Provider>
  );
};

export default CartProvider;
