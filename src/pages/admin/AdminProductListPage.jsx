import AdminProductForm from "../../components/admin/AdminProductForm";
import AdminProductList from "../../components/admin/AdminProductList";

const AdminProductListPage = () => {
  return (
    <div className="p-6 space-y-6">
      <AdminProductForm onCreated={() => window.location.reload()} />
      <AdminProductList />
    </div>
  );
};

export default AdminProductListPage;
