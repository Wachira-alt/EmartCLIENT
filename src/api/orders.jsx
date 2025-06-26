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
// ADMIN — Cancel order
export const cancelOrder = async (orderId) => {
  const res = await axiosInstance.patch(`/orders/${orderId}/cancel`);
  return res.data;
};
// ADMIN — Update order status
export const updateOrderStatus = async (orderId, status) => {
  const res = await axiosInstance.patch(`/orders/${orderId}/status`, { status });
  return res.data;
};
// USER — Get their own orders
export const fetchUserOrders = async () => {
  const res = await axiosInstance.get("/orders/me");
  return res.data;
};



