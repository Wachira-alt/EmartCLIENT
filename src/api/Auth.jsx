import api from "./axiosInstance";

// 🔐 REGISTER NEW USER
export const registerUser = async (username, email, password) => {
  try {
    const res = await api.post("/register", { username, email, password });
    return { ok: true, data: res.data };
  } catch (err) {
    return { ok: false, error: err.response?.data?.error || "Register failed" };
  }
};

// 🔐 LOGIN USER
export const loginUser = async (email, password) => {
  try {
    const res = await api.post("/login", { email, password });
    return { ok: true, data: res.data };
  } catch (err) {
    return { ok: false, error: err.response?.data?.error || "Login failed" };
  }
};

// 🔐 FETCH PROFILE
export const fetchProfile = async () => {
  try {
    const res = await api.get("/profile"); // Token is auto-attached by interceptor
    return { ok: true, data: res.data };
  } catch (err) {
      return { ok: false, error: err.response?.data?.error || "Profile fetch failed" };
    }
  };