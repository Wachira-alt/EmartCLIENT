//full cart view page

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/cart/CartItem";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
      ))}
      <div className="text-right mt-4">
        <h3 className="text-xl font-semibold">Total: KSh {total.toFixed(2)}</h3>
        <button className="mt-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}