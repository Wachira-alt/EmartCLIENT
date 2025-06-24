import { Routes, Route } from "react-router-dom";
import AdminPanel from "../pages/admin/AdminPanel";
import AdminProductListPage from "../pages/admin/AdminProductListPage";
import AdminOrdersPage from "../pages/admin/AdminOrdersPage";
import AdminUsersPage from "../pages/admin/AdminUsersPage"; 

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminPanel />} />
      <Route path="/products" element={<AdminProductListPage />} />
      <Route path="/orders" element={<AdminOrdersPage />} />
      <Route path="/users" element={<AdminUsersPage />} />
    </Routes>
  );
}
