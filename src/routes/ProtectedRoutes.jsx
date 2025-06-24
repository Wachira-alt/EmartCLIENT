import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// role can be 'user' or 'admin'
export default function ProtectedRoute({ children, role = "user" }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role === "admin" && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
