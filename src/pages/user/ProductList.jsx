import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/products";
import ProductGrid from "../../components/product/ProductGrid";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-semibold mb-4 text-[#6F4E37]">Shop Products</h1>
      <ProductGrid products={products} isLoading={loading} />
    </div>
  );
};

export default ProductList;
