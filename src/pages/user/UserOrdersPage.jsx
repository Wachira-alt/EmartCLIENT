import { useEffect, useState } from "react";
import { fetchUserOrders } from "../../api/orders";
import UserOrderCard from "@/components/user/UserOrderCard";

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
            <UserOrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserOrdersPage;
