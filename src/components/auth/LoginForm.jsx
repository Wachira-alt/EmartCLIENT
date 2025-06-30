import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password too short"),
});

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    await toast.promise(
      login(data.email, data.password), // throws on error
      {
        loading: "Logging in...",
        success: "Welcome back!",
        error: (err) => err?.error || "Invalid login",
      }
    );

 
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto space-y-4">
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        control={control}
        icon={Mail}
      />
      <FormField
        name="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        control={control}
        icon={Lock}
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
