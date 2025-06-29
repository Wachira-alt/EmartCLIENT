import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { token } = useContext(AuthContext);

  const handleAdd = () => {
    if (!token) {
      toast.error("Please login to add to cart.");
      return;
    }
    addToCart(product.id, 1);
    toast.success(`Added "${product.title}" to cart!`);
  };

  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader className="p-0">
        <img
          src={product.image_url}
          alt={product.title}
          className="w-full h-40 object-cover rounded-t"
        />
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold">{product.title}</CardTitle>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>

        <div className="mt-3 space-y-1">
          <p className="text-blue-600 font-bold">Ksh {product.price.toFixed(2)}</p>
          <p className="text-xs text-gray-500">Stock: {product.stock}</p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-2 mt-auto">
        <Button className="w-full" onClick={handleAdd}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
