import { useEffect, useState } from "react";
import { fetchUserOrders } from "@/api/orders";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const ProfileOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchUserOrders().then(setOrders).catch(console.error);
  }, []);

  if (orders.length === 0) {
    return <p>You haven't placed any orders yet.</p>;
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              Order #{order.id}
              <Badge className={`capitalize ${statusColors[order.status]}`}>
                {order.status}
              </Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {new Date(order.created_at).toLocaleString()}
            </p>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-1 font-medium">Product</th>
                  <th className="py-1 font-medium">Qty</th>
                  <th className="py-1 font-medium">Price</th>
                  <th className="py-1 font-medium">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.order_items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.product_id}</td>
                    <td>{item.quantity}</td>
                    <td>Ksh {item.price_at_purchase}</td>
                    <td>Ksh {item.quantity * item.price_at_purchase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProfileOrders;
