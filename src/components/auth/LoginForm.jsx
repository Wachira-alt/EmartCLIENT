import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    if (!res.success) {
      setError(res.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
      />
      {error && <p className="text-red-600">{error}</p>}
      <button className="bg-blue-600 text-white px-4 py-2">Login</button>
    </form>
  );
};

