import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Admin Pages
import AdminPanel from "../pages/admin/AdminPanel";
import AdminProductListPage from "../pages/admin/AdminProductListPage";
import AdminOrdersPage from "../pages/admin/AdminOrdersPage";
import AdminUsersPage from "../pages/admin/AdminUsersPage";

const AdminRoutes = () => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<AdminPanel />} />
      <Route path="/products" element={<AdminProductListPage />} />
      <Route path="/orders" element={<AdminOrdersPage />} />
      <Route path="/users" element={<AdminUsersPage />} />
    </Routes>
  );
};

export default AdminRoutes;
