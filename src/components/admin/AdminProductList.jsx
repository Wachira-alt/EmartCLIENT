import { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../../api/products";

const AdminProductList = () => {
  const [products, setProducts] = useState([]);

  const load = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    load();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      {products.map((p) => (
        <div key={p.id} className="border p-3 rounded mb-2 flex justify-between items-center">
          <span>{p.title}</span>
          <button onClick={() => handleDelete(p.id)} className="text-red-600">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminProductList;