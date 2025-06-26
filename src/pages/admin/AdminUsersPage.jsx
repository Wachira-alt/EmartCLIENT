import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../api/auth";

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchAllUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to load users", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Username</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Role</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="py-2 px-4">{user.id}</td>
                  <td className="py-2 px-4">{user.username}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${
                        user.role === "admin"
                          ? "bg-green-600"
                          : "bg-gray-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-2 px-4 space-x-2">
                    {/* Future actions */}
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                      disabled
                    >
                      Promote
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                      disabled
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUsersPage;
