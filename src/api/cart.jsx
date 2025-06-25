import axiosInstance from "./axiosInstance";

// GET all cart items
export const fetchCartItems = async () => {
  const res = await axiosInstance.get("/cart-items");
  return res.data;
};

// POST add new item
export const addToCartAPI = async (product_id, quantity = 1) => {
  await axiosInstance.post("/cart-items", { product_id, quantity });
};

// PATCH update quantity
export const updateCartItemAPI = async (id, quantity) => {
  await axiosInstance.patch(`/cart-items/${id}`, { quantity });
};

// DELETE item
export const removeFromCartAPI = async (id) => {
  await axiosInstance.delete(`/cart-items/${id}`);
};
