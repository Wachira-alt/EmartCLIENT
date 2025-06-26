import { Routes, Route } from "react-router-dom";

import Home from "../pages/user/Home";

import CartPage from "../pages/user/CartPage";

import ProfilePage from "../pages/user/ProfilePage";

import ProductList from "../pages/user/ProductList";
import CheckoutPage from "../pages/user/CheckoutPage";
import OrderSuccess from "../pages/user/OrderSuccess";
import UserOrdersPage from "../pages/user/UserOrdersPage";

<Route path="/my-orders" element={<UserOrdersPage />} />


import Login from "../pages/user/Login";
import Register from "../pages/user/Register";

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      
      <Route path="/cart" element={<CartPage />} />
     
    
      <Route path="/checkout" element={<CheckoutPage />} />
     <Route path="/checkout/success" element={<OrderSuccess />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/my-orders" element={<UserOrdersPage />} />
     
      <Route path="/products" element={<ProductList />} />
   
    </Routes>
  );
}
