import { createContext, useState } from 'react';

export const CartBadgeCountContext = createContext();
const CartBadgeCountProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const handleClick = (e) => {
    setCartCount(cartCount + 1);
  };
  const data = { cartCount, handleClick };
  return (
    <CartBadgeCountContext.Provider value={data}>
      {children}
    </CartBadgeCountContext.Provider>
  );
};
export default CartBadgeCountProvider;
