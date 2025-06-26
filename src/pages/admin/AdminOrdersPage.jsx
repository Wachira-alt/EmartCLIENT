import { useEffect, useState } from "react";
import { fetchAllOrders } from "../../api/orders";

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await fetchAllOrders();
      setOrders(data);
    } catch (err) {
      console.error("Failed to load orders", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border p-4 rounded bg-white shadow-sm"
            >
              <div className="flex justify-between mb-2">
                <div>
                  <p className="font-semibold">
                    Order #{order.id} - {order.status}
                  </p>
                  <p className="text-sm text-gray-600">
                    {new Date(order.created_at).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm">User ID: {order.user_id}</p>
                  {/* Optional: fetch/display user email if available */}
                </div>
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
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

export default AdminOrdersPage;
