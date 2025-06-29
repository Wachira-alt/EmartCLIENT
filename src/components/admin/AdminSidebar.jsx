import { NavLink } from "react-router-dom";
import { PanelLeft, Package, ShoppingCart, Users, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

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

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile: Sheet Trigger Button */}
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
            <div className="mt-4">
              <SidebarContent onClickLink={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-semibold text-[#6F4E37]">Admin</h1>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 min-h-screen bg-gray-100 dark:bg-gray-900 border-r p-6">
        <h2 className="text-xl font-semibold mb-6 text-[#6F4E37]">Admin Panel</h2>
        <SidebarContent />
      </aside>
    </>
  );
};

export default AdminSidebar;
