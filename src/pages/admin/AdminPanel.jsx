import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-6 text-gray-600">Welcome to the control panel. Select an action below.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          to="/admin/products"
          className="block bg-white border rounded-lg p-4 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
          <p className="text-gray-500">Add, update, or delete products.</p>
        </Link>

        <Link
          to="/admin/orders"
          className="block bg-white border rounded-lg p-4 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Manage Orders</h2>
          <p className="text-gray-500">View and update order statuses.</p>
        </Link>

        <Link
          to="/admin/users"
          className="block bg-white border rounded-lg p-4 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
          <p className="text-gray-500">View and control user access.</p>
        </Link>
      </div>
    </div>
  );
}
