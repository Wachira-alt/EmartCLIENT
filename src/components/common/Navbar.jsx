import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { ShoppingCart, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLink = "text-sm font-medium text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 font-body">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Brand */}
        <Link
          to="/"
          className="text-2xl tracking-tight text-blue-600 font-display"
        >
          elimu<span className="text-gray-700 font-body">emart</span>
        </Link>

        {/* Links */}
        <div className="flex gap-6 items-center">

          <NavLink to="/" className={navLink}>Home</NavLink>
          <NavLink to="/products" className={navLink}>Products</NavLink>

          {/* Cart */}
          <NavLink to="/cart" className="relative flex items-center gap-1 text-sm hover:text-blue-600">
            <ShoppingCart size={18} />
            Cart
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-3 text-[10px] px-1 py-0.5">
                {cartCount}
              </Badge>
            )}
          </NavLink>

          {/* Authenticated User */}
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
                className="text-gray-600 hover:text-red-500"
              >
                <LogOut size={14} className="mr-1" />
                Logout
              </Button>
            </>
          ) : (
            <NavLink to="/login" className={navLink}>Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
