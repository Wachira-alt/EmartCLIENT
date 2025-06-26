// src/pages/admin/AdminPanel.jsx
import { NavLink, Outlet } from "react-router-dom";

const AdminPanel = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-[#6F4E37] font-semibold bg-[#F5F3EA] px-4 py-2 rounded transition"
      : "text-[#3B3A36] hover:text-[#6F4E37] px-4 py-2 rounded transition";

  return (
    <div className="flex h-screen bg-[#F5F3EA]">
      {/* Sticky Sidebar */}
      <aside className="w-64 bg-[#E7E0CE] border-r border-[#D6CDBF] p-6 sticky top-0 h-screen shadow-md">
        <h2 className="text-2xl font-bold text-[#6F4E37] mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="orders" className={navLinkStyles}>
            Orders
          </NavLink>
          <NavLink to="products" className={navLinkStyles}>
            Products
          </NavLink>
          <NavLink to="users" className={navLinkStyles}>
            Users
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
