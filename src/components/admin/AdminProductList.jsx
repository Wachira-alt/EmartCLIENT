const AdminProductList = ({ products, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse bg-white shadow">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Price</th>
          <th className="border px-4 py-2">Stock</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border px-4 py-2">{product.title}</td>
            <td className="border px-4 py-2">Ksh {product.price}</td>
            <td className="border px-4 py-2">{product.stock}</td>
            <td className="border px-4 py-2 space-x-2">
              <button
                onClick={() => onEdit(product)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminProductList;
