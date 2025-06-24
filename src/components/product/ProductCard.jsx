import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-full h-40 object-cover mb-3 rounded"
      />
      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
      <p className="text-gray-600 mb-1">Ksh {product.price}</p>
      <p className="text-sm text-gray-500 mb-3">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
