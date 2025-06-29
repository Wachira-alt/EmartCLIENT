import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CartItem = ({ item }) => {
  const { updateCartItem, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value);
    if (qty > 0) updateCartItem(item.id, qty);
  };

  return (
    <Card>
      <CardContent className="flex justify-between items-center py-4">
        <div>
          <h4 className="font-semibold">{item.product.title}</h4>
          <p className="text-sm text-muted-foreground">
            Ksh {item.product.price.toFixed(2)} × {item.quantity}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            min={1}
            className="w-16"
          />
          <Button
            variant="destructive"
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;
