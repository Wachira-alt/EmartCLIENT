import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const statuses = ["pending", "processing", "shipped", "delivered", "cancelled"];

// Helper to color-code the badge based on status
const getBadgeVariant = (status) => {
  switch (status) {
    case "pending":
      return "secondary";
    case "processing":
      return "default";
    case "shipped":
      return "outline";
    case "delivered":
      return "success";
    case "cancelled":
      return "destructive";
    default:
      return "outline";
  }
};

const OrderCard = ({ order, onStatusChange, onCancel }) => {
  const total = order.order_items.reduce(
    (sum, item) => sum + item.quantity * item.price_at_purchase,
    0
  );

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-start">
        <div>
          <CardTitle className="text-base">Order #{order.id}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {new Date(order.created_at).toLocaleString()}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-sm text-muted-foreground">User ID: {order.user_id}</p>
            <Badge variant={getBadgeVariant(order.status)}>{order.status}</Badge>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Select
            value={order.status}
            onValueChange={(value) => onStatusChange(order.id, value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {order.status !== "cancelled" && (
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onCancel(order.id)}
            >
              Cancel
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-4">
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
              <tr key={item.id} className="border-b">
                <td className="py-1">{item.product_title || item.product_id}</td>
                <td>{item.quantity}</td>
                <td>Ksh {item.price_at_purchase}</td>
                <td>Ksh {item.quantity * item.price_at_purchase}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-right font-semibold mt-3">
          Total: Ksh {total.toFixed(2)}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
