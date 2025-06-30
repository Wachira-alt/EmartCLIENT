import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, LogOut } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLink =
    "text-sm font-medium text-[#3B3A36] hover:text-[#6F4E37] transition";

  return (
    <nav className="bg-[#F5F3EA] border-b border-[#E7E0CE] shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Branding */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#6F4E37] tracking-tight"
        >
          elimu<span className="text-[#3B3A36]">emart</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">
          <NavLink to="/" className={navLink}>Home</NavLink>
          <NavLink to="/products" className={navLink}>Products</NavLink>

          {/* Cart */}
          <NavLink to="/cart" className="relative flex items-center gap-1 text-sm hover:text-[#6F4E37]">
            <ShoppingCart size={18} />
            Cart
            {cartCount > 0 && (
              <Badge variant="default" className="absolute -top-2 -right-4 text-[10px] px-1">
                {cartCount}
              </Badge>
            )}
          </NavLink>

          {/* Authenticated Links */}
          {user ? (
            <>
              {user.role === "admin" && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => navigate("/admin")}
                >
                  Admin
                </Button>
              )}
              <NavLink to="/profile" className={navLink}>Profile</NavLink>
              <NavLink to="/my-orders" className={navLink}>My Orders</NavLink>
              <Button
                size="sm"
                variant="ghost"
                onClick={logout}
                className="text-[#6F4E37] hover:text-red-500"
              >
                <LogOut size={14} className="mr-1" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navLink}>Login</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
