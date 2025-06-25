//fetching all products
import axiosInstance from "./axiosInstance";

// PUBLIC — Fetch all products
export const fetchProducts = async () => {
  const res = await axiosInstance.get("/products");
  return res.data;
};

// PUBLIC — Fetch single product
export const fetchProductById = async (id) => {
  const res = await axiosInstance.get(`/products/${id}`);
  return res.data;
};

// ADMIN — Create product
export const createProduct = async (productData) => {
  const res = await axiosInstance.post("/products", productData);
  return res.data;
};

// ADMIN — Update product
export const updateProduct = async (id, updates) => {
  const res = await axiosInstance.patch(`/products/${id}`, updates);
  return res.data;
};

// ADMIN — Delete product
export const deleteProduct = async (id) => {
  await axiosInstance.delete(`/products/${id}`);
};
};
