import { NavLink, useNavigate } from "react-router-dom";
import {
  PanelLeft,
  Package,
  ShoppingCart,
  Users,
  Menu,
  LogOut,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { AuthContext } from "../../context/AuthContext";

const links = [
  { to: "/admin", label: "Dashboard", icon: PanelLeft },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { to: "/admin/users", label: "Users", icon: Users },
];

const SidebarContent = ({ onClickLink }) => (
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
        onClick={onClickLink}
      >
        <Icon size={16} />
        {label}
      </NavLink>
    ))}
  </nav>
);

// ✅ FIX: Define this function outside the component return
const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Button
      variant="ghost"
      className="w-full flex items-center justify-start gap-2 mt-6 text-red-600 hover:text-red-800"
      onClick={handleLogout}
    >
      <LogOut size={16} />
      Logout
    </Button>
  );
};

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar (Sheet) */}
      <div className="md:hidden p-4 border-b bg-white dark:bg-black flex items-center justify-between">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="text-[#6F4E37]">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetHeader>
              <SheetTitle className="text-[#6F4E37]">Admin Panel</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col justify-between h-full">
              <SidebarContent onClickLink={() => setOpen(false)} />
              <LogoutButton />
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-semibold text-[#6F4E37]">Admin</h1>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 min-h-screen bg-gray-100 dark:bg-gray-900 border-r p-6 justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-6 text-[#6F4E37]">Admin Panel</h2>
          <SidebarContent />
        </div>
        <LogoutButton />
      </aside>
    </>
  );
};

export default AdminSidebar;
