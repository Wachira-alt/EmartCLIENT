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

  const baseLink =
    "relative text-sm font-medium text-[#3B3A36] hover:text-[#1C6DD0] transition duration-150 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#1C6DD0] after:transition-all after:duration-300";

  return (
    <nav className="bg-[#FDF6EC]/90 backdrop-blur-md shadow-md border-b border-[#E7E0CE] sticky top-0 z-50 font-body rounded-b-xl">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

        {/* Brand */}
        <Link
          to="/"
          className="text-2xl tracking-tight font-display text-[#1C6DD0]"
        >
          elimu<span className="text-[#3B3A36] font-body">emart</span>
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? "text-[#1C6DD0] after:w-full" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? "text-[#1C6DD0] after:w-full" : ""}`
            }
          >
            Products
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center gap-1 ${baseLink} ${isActive ? "text-[#1C6DD0] after:w-full" : ""}`
            }
          >
            <ShoppingCart size={18} />
            Cart
            {cartCount > 0 && (
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-3 text-[10px] px-1 py-0.5 bg-[#D4A373] text-white"
              >
                {cartCount}
              </Badge>
            )}
          </NavLink>

          {/* Authenticated */}
          {user ? (
            <>
              {user.role === "admin" && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate("/admin")}
                  className="text-sm border-[#D4A373] text-[#3B3A36] hover:bg-[#D4A373]/10"
                >
                  Admin
                </Button>
              )}
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? "text-[#1C6DD0] after:w-full" : ""}`
                }
              >
                Profile
              </NavLink>
              <NavLink
                to="/my-orders"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? "text-[#1C6DD0] after:w-full" : ""}`
                }
              >
                Orders
              </NavLink>
              <Button
                size="sm"
                variant="ghost"
                onClick={logout}
                className="flex items-center text-[#3B3A36] hover:text-red-500"
              >
                <LogOut size={16} className="mr-1" />
                Logout
              </Button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? "text-[#1C6DD0] after:w-full" : ""}`
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
