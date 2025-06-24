import { useState } from "react";
import { createProduct } from "../../api/products";

const AdminProductForm = ({ onCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image_url: "",
    stock: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = await createProduct({
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    });
    onCreated(newProduct);
    setFormData({
      title: "",
      description: "",
      price: "",
      image_url: "",
      stock: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded bg-white">
      <input name="title" placeholder="Title" onChange={handleChange} value={formData.title} className="w-full border p-2" />
      <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} className="w-full border p-2" />
      <input name="price" placeholder="Price" onChange={handleChange} value={formData.price} className="w-full border p-2" />
      <input name="image_url" placeholder="Image URL" onChange={handleChange} value={formData.image_url} className="w-full border p-2" />
      <input name="stock" placeholder="Stock" onChange={handleChange} value={formData.stock} className="w-full border p-2" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Product</button>
    </form>
  );
};

export default AdminProductForm;