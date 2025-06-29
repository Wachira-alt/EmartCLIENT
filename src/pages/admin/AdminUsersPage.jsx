import { useEffect, useState } from "react";
import { fetchAllUsers, promoteUser, deleteUser } from "../../api/auth";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminUserRow from "../../components/admin/AdminUserRow";

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

  const handlePromote = async (userId) => {
    await promoteUser(userId);
    loadUsers();
  };

  const handleDelete = async (userId) => {
    await deleteUser(userId);
    loadUsers();
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">All Users</h2>

        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <div className="overflow-x-auto border rounded-md">
            <table className="min-w-full text-sm">
              <thead className="bg-muted text-left">
                <tr>
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Username</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Role</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <AdminUserRow
                    key={user.id}
                    user={user}
                    onPromote={handlePromote}
                    onDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminUsersPage;
