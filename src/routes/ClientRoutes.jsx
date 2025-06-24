import { Routes, Route } from "react-router-dom";

import Home from "../pages/user/Home";
import AboutUs from "../pages/user/AboutUs";

import CartPage from "../pages/user/CartPage";

import ProfilePage from "../pages/user/ProfilePage";
import CheckoutPage from "../pages/user/CheckoutPage";
import ProductList from "../pages/user/ProductList";

import Login from "../pages/user/Login";
import Register from "../pages/user/Register";

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
   
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
     
     
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<ProfilePage />} />
      
      <Route path="/products" element={<ProductList />} />
   
    </Routes>
  );
}
