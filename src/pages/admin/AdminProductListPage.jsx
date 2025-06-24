import { useState, useEffect } from "react";
import AdminProductForm from "../../components/admin/AdminProductForm";
import AdminProductList from "../../components/admin/AdminProductList";
import { fetchProducts } from "../../api/products";

const AdminProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Manage Products</h1>
      <AdminProductForm onCreated={loadProducts} />
      <AdminProductList products={products} onDelete={loadProducts} loading={loading} />
    </div>
  );
};

export default AdminProductListPage;
