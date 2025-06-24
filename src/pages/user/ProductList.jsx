import { useEffect, useState } from "react";
import { getProducts } from "../../api/Products";
import ProductCard from "../../components/product/ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
