import { useEffect, useState } from "react";
import { fetchUserOrders } from "../../api/orders";

const UserOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await fetchUserOrders();
      setOrders(data);
    } catch (err) {
      console.error("Failed to fetch user orders", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded bg-white shadow-sm">
              <div className="mb-2">
                <p className="font-semibold">Order #{order.id}</p>
                <p className="text-sm text-gray-600">
                  Placed on {new Date(order.created_at).toLocaleString()}
                </p>
                <p className="text-sm">Status: {order.status}</p>
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.order_items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.product_id}</td>
                      <td>{item.quantity}</td>
                      <td>Ksh {item.price_at_purchase}</td>
                      <td>Ksh {item.quantity * item.price_at_purchase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserOrdersPage;
