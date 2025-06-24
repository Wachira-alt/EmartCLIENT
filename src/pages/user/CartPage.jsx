//full cart view page
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/cart/CartItem";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="text-right font-bold text-lg mt-4">
            Total: Ksh {total}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;