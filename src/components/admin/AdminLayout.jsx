import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-white dark:bg-black">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
