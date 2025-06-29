import { useEffect, useState } from "react";
import { fetchAllOrders, cancelOrder, updateOrderStatus } from "../../api/orders";
import AdminLayout from "../../components/admin/AdminLayout";
import OrderCard from "../../components/admin/OrderCard";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";



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
    await toast.promise(cancelOrder(orderId), {
      loading: "Cancelling order...",
      success: "Order cancelled",
      error: "Failed to cancel order",
    });
    loadOrders();
  }
};


 const handleStatusChange = async (orderId, newStatus) => {
  await toast.promise(updateOrderStatus(orderId, newStatus), {
    loading: "Updating status...",
    success: "Status updated",
    error: "Failed to update status",
  });
  loadOrders();
};


  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-[#6F4E37]">All Orders</h2>

        {orders.length === 0 ? (
          <p className="text-muted-foreground">No orders found.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onCancel={handleCancel}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminOrdersPage;
