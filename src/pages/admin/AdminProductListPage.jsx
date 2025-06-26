import { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../../api/products";
import AdminProductList from "../../components/admin/AdminProductList";
import AdminProductForm from "../../components/admin/AdminProductForm";

const AdminProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // If editing
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    await deleteProduct(id);
    loadProducts(); // Refresh list
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProduct(null);
    loadProducts();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage Products</h2>
        <button
          onClick={() => {
            setEditingProduct(null);
            setShowForm(true);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Product
        </button>
      </div>

      <AdminProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />

      {showForm && (
        <AdminProductForm product={editingProduct} onClose={handleFormClose} />
      )}
    </div>
  );
};

export default AdminProductListPage;
