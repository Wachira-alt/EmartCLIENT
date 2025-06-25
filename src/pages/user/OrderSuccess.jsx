import { useLocation, Link } from "react-router-dom";

const OrderSuccess = () => {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4"> Order Placed Successfully!</h2>
      {order && <p>Order ID: <strong>{order.id}</strong></p>}
      <Link to="/" className="mt-4 inline-block text-blue-600 underline">
        Back to Home
      </Link>
    </div>
  );
};

export default OrderSuccess;
