import { useEffect, useState } from "react";
import { fetchAllOrders, cancelOrder, updateOrderStatus } from "../../api/orders";
import AdminLayout from "../../components/admin/AdminLayout";

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

  const handleCancel = async (orderId) => {
    if (window.confirm("Cancel this order?")) {
      await cancelOrder(orderId);
      loadOrders();
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    await updateOrderStatus(orderId, newStatus);
    loadOrders();
  };

  return (
    <AdminLayout>
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
              <div className="flex justify-between mb-2 items-center">
                <div>
                  <p className="font-semibold">
                    Order #{order.id}
                  </p>
                  <p className="text-sm text-gray-600">
                    {new Date(order.created_at).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-700">
                    User ID: {order.user_id}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <label className="text-sm mr-1">Status:</label>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    className="border px-2 py-1 rounded"
                  >
                    {["pending", "processing", "shipped", "delivered", "cancelled"].map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>

                  {order.status !== "cancelled" && (
                    <button
                      onClick={() => handleCancel(order.id)}
                      className="text-sm bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>

              <table className="w-full text-sm mt-3">
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
                      <td>
                        Ksh {item.quantity * item.price_at_purchase}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
    </AdminLayout>
  );
};

export default AdminOrdersPage;
