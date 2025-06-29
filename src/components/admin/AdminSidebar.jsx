import { NavLink } from "react-router-dom";
import { PanelLeft, Package, ShoppingCart, Users } from "lucide-react";

const links = [
  { to: "/admin", label: "Dashboard", icon: PanelLeft },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { to: "/admin/users", label: "Users", icon: Users },
];

const AdminSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-100 dark:bg-gray-900 border-r p-6">
      <h2 className="text-xl font-semibold mb-6 text-[#6F4E37]">Admin Panel</h2>
      <nav className="space-y-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            to={to}
            key={to}
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 ${
                isActive ? "bg-gray-200 dark:bg-gray-800 font-semibold" : ""
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
