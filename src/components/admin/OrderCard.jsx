import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const statuses = ["pending", "processing", "shipped", "delivered", "cancelled"];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const OrderCard = ({ order, onStatusChange, onCancel }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-start">
        <div>
          <CardTitle className="text-base flex items-center gap-2">
            Order #{order.id}
            <Badge className={`capitalize ${statusColors[order.status]}`}>
              {order.status}
            </Badge>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {new Date(order.created_at).toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground">
            User ID: {order.user_id}
          </p>
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
  );
};

export default OrderCard;
