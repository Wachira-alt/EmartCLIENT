import { Routes, Route } from "react-router-dom";

import Home from "../pages/user/Home";
import AboutUs from "../pages/user/AboutUs";
import Accessories from "../pages/user/Accessories";
import CartPage from "../pages/user/CartPage";
import FAQ from "../pages/user/FAQ";
import GetHelp from "../pages/user/GetHelp";
import HotDeals from "../pages/user/HotDeals";
import ProfilePage from "../pages/user/ProfilePage";
import TopCategories from "../pages/user/TopCategories";
import ProductList from "../pages/user/ProductList";

import Login from "../pages/user/Login";
import Register from "../pages/user/Register";

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/get-help" element={<GetHelp />} />
      <Route path="/hot-deals" element={<HotDeals />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/top-categories" element={<TopCategories />} />
      <Route path="/products" element={<ProductList />} />
   
    </Routes>
  );
}
