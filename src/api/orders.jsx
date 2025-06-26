// checkout API logic
import axiosInstance from "./axiosInstance";

// Call backend to checkout cart and create order
export const checkoutCart = async () => {
  const res = await axiosInstance.post("/orders/checkout");
  return res.data; // Contains created order
};
// ADMIN — Get all orders
export const fetchAllOrders = async () => {
  const res = await axiosInstance.get("/orders");
  return res.data;
};
