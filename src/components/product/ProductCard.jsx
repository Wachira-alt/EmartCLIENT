//display a single product
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { token } = useContext(AuthContext);

  const handleAdd = () => {
    if (!token) {
      alert("Please login to add to cart.");
      return;
    }
    addToCart(product.id, 1);
  };

  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm flex flex-col">
      <img
        src={product.image_url}
        alt={product.title}
        className="w-full h-40 object-cover mb-3 rounded"
      />
      <h3 className="font-bold text-lg">{product.title}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
        {product.description}
      </p>
      <p className="text-blue-600 font-semibold mt-2">
        Ksh {product.price.toFixed(2)}
      </p>
      <p className="text-sm text-gray-500 mb-3">Stock: {product.stock}</p>

      <button
        onClick={handleAdd}
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
