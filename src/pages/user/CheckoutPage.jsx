// integrates cart + form
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, checkout } = useContext(CartContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      const order = await checkout();
      navigate("/checkout/success", { state: { order } });
    } catch (err) {
      setError("Failed to complete checkout.");
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Review Order</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.product.title} × {item.quantity}</span>
          <span>Ksh {item.product.price * item.quantity}</span>
        </div>
      ))}
      <div className="font-bold text-lg mt-4">Total: Ksh {total}</div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <button
        onClick={handleCheckout}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Confirm & Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;