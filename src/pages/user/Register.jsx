import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4 text-center text-[#6F4E37]">
        Create an Account
      </h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
