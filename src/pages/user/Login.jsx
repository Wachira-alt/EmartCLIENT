import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4 text-center text-[#6F4E37]">Login to your account</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;