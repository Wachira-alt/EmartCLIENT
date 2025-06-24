import { createContext, useState, useEffect } from "react";
import { registerUser, loginUser, fetchProfile } from "../api/auth";

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);           // User info
  const [token, setToken] = useState(null);         // JWT token

  // Fetch user info using token (handled by Axios interceptor)
  const fetchUser = async () => {
    const { ok, data } = await fetchProfile();
    if (ok) {
      setUser(data);
      setToken(localStorage.getItem("token")); // already stored
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      logout(); // Invalid or expired token
    }
  };

  // Register new user and auto-login
  const register = async (username, email, password) => {
    const { ok, data } = await registerUser(username, email, password);
    if (ok) {
      localStorage.setItem("token", data.access_token);
      await fetchUser();
      return { success: true };
    } else {
      return { success: false, error: data.error };
    }
  };

  // Login user
  const login = async (email, password) => {
    const { ok, data } = await loginUser(email, password);
    if (ok) {
      localStorage.setItem("token", data.access_token);
      await fetchUser();
      return { success: true };
    } else {
      return { success: false, error: data.error };
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  // On mount, auto-login if token exists
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      fetchUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      register,
      logout,
      isAdmin: user?.role === "admin"
    }}>
      {children}
    </AuthContext.Provider>
  );
};
