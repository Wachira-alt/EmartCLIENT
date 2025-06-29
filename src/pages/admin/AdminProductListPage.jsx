import { useEffect, useState } from "react";
import {
  fetchProducts,
  deleteProduct,
} from "../../api/products";
import AdminProductTable from "../../components/admin/AdminProductTable";
import AdminProductForm from "../../components/admin/AdminProductForm";
import AdminLayout from "../../components/admin/AdminLayout";
import { Button } from "@/components/ui/button";


const AdminProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (!confirmed) return;

    await deleteProduct(id);
    loadProducts(); // Refresh the list after deletion
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProduct(null);
    loadProducts(); // Refresh after add/edit
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#6F4E37]">Manage Products</h2>
          <Button onClick={handleAddNew}>+ Add Product</Button>
        </div>

        <AdminProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {showForm && (
          <AdminProductForm
            product={editingProduct}
            onClose={handleFormClose}
          />
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminProductListPage;
