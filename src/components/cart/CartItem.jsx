// Reusable UI for one cart item
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { updateCartItem, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    updateCartItem(item.id, parseInt(e.target.value));
  };

  return (
    <div className="border p-3 flex justify-between items-center bg-white rounded mb-2">
      <div>
        <h4 className="font-bold">{item.product.title}</h4>
        <p>Ksh {item.product.price} x {item.quantity}</p>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
          className="w-16 border p-1"
        />
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;