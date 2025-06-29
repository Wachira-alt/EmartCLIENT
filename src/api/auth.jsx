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

// ADMIN — Fetch all users
export const fetchAllUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};
// ADMIN — Promote user to admin
export const promoteUser = async (userId) => {
  const res = await api.patch(`/users/${userId}/promote`);
  return res.data;
};

// ADMIN — Delete user
export const deleteUser = async (userId) => {
  await api.delete(`/users/${userId}`);
};

//updating user profile

export async function updateUserProfile(data) {
  const res = await fetch("/api/profile", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw await res.json();
  }

  return await res.json();
}
