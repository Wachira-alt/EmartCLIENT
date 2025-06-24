import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Layout Components
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";

// Routes
import ClientRoutes from "./routes/ClientRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            {/* User-facing pages */}
            <Route path="/*" element={<ClientRoutes />} />

            {/* Admin dashboard pages */}
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute role="admin">
                  <AdminRoutes />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
