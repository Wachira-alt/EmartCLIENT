import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchCartItems,
  addToCartAPI,
  updateCartItemAPI,
  removeFromCartAPI,
} from "../api/cart";
import { checkoutCart } from "../api/orders"; // ✅ import checkout API
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  const loadCart = async () => {
    if (!token) return;
    try {
      const data = await fetchCartItems();
      setCartItems(data);
    } catch (error) {
      console.error("Error loading cart", error);
    }
  };

  const addToCart = async (product_id, quantity = 1) => {
    if (!token) return alert("You must be logged in to add to cart.");
    await addToCartAPI(product_id, quantity);
    await loadCart();
  };

  const updateCartItem = async (id, quantity) => {
    await updateCartItemAPI(id, quantity);
    await loadCart();
  };

  const removeFromCart = async (id) => {
    await removeFromCartAPI(id);
    await loadCart();
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Checkout Function
  const checkout = async () => {
    try {
      const order = await checkoutCart();
      setCartItems([]); // Clear cart on successful checkout
      return order;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    loadCart();
  }, [token]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        checkout, // ✅ added to context value
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
