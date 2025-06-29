import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { CartContext } from "../../context/CartContext";
import CartItem from "@/components/cart/CartItem";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const { cartItems, checkout } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      const order = await checkout();
      toast.success("Order placed!");
      navigate("/checkout/success", { state: { order } });
    } catch (err) {
      toast.error("Checkout failed. Try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Cart</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-muted-foreground">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </CardContent>

        {cartItems.length > 0 && (
          <>
            <Separator />
            <CardFooter className="flex justify-between items-center">
              <span className="font-semibold text-lg">Total:</span>
              <span className="text-lg font-bold">Ksh {total.toFixed(2)}</span>
            </CardFooter>
          </>
        )}
      </Card>

      {cartItems.length > 0 && (
        <div className="flex justify-end">
          <Button onClick={handleCheckout}>Place Order</Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
