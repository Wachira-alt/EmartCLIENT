import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const RegisterForm = () => {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(form.username, form.email, form.password);
    if (!res.success) {
      setError(res.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      {error && <p className="text-red-600">{error}</p>}
      <button className="bg-[#6F4E37] text-white px-4 py-2 rounded shadow">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
