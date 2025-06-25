import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLink =
    "text-sm font-medium text-[#3B3A36] hover:text-[#6F4E37] transition duration-200";

  return (
    <nav className="bg-[#F5F3EA] shadow-md border-b border-[#E7E0CE]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo = Home */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-[#6F4E37] hover:text-[#5A3E2B] transition"
        >
          elimu<span className="text-[#3B3A36]">emart</span>
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 items-center">

          {/* Client Pages */}
          <NavLink to="/" className={navLink}>Home</NavLink>
          <NavLink to="/products" className={navLink}>Products</NavLink>

          {/* Cart Icon */}
         <div className="relative">
          <NavLink to="/cart" className={navLink}>
            Cart
          </NavLink>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#6F4E37] text-white text-[10px] rounded-full px-[6px] py-[1px] shadow-inner">
              {cartCount}
            </span>
          )}
        </div>

          {/* Authenticated User */}
          {user ? (
            <>
              {user.role === "admin" && (
                <button
                  onClick={() => navigate("/admin")}
                  className="text-xs bg-[#3B3A36] text-white px-3 py-1 rounded shadow hover:brightness-110"
                >
                  Admin
                </button>
              )}
              <NavLink to="/profile" className={navLink}>Profile</NavLink>
              <NavLink to="/orders" className={navLink}>My Orders</NavLink>
              <NavLink to="/checkout" className={navLink}>Checkout</NavLink>
              <button
                onClick={logout}
                className="text-xs text-[#6F4E37] hover:text-red-500 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navLink}>Login</NavLink>
              <NavLink to="/register" className={navLink}>Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
