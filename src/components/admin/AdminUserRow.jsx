// src/components/admin/AdminUserRow.jsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AdminUserRow = ({ user, onPromote, onDelete }) => {
  const handlePromote = async () => {
    await toast.promise(onPromote(user.id), {
      loading: "Promoting user...",
      success: "User promoted to admin!",
      error: "Promotion failed.",
    });
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (!confirm) return;

    await toast.promise(onDelete(user.id), {
      loading: "Deleting user...",
      success: "User deleted.",
      error: "Deletion failed.",
    });
  };

  return (
    <tr key={user.id}>
      <td className="py-2 px-4">{user.id}</td>
      <td className="py-2 px-4">{user.username}</td>
      <td className="py-2 px-4">{user.email}</td>
      <td className="py-2 px-4">
        <Badge variant={user.role === "admin" ? "default" : "secondary"}>
          {user.role}
        </Badge>
      </td>
      <td className="py-2 px-4 space-x-2">
        {user.role !== "admin" && (
          <Button size="sm" onClick={handlePromote}>
            Promote
          </Button>
        )}
        <Button size="sm" variant="destructive" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default AdminUserRow;
