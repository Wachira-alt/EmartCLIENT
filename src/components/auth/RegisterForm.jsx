import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const registerSchema = z.object({
  username: z.string().min(3, "Username too short").max(20, "Username too long"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "At least 8 characters")
    .regex(/[A-Z]/, "Must contain one uppercase letter")
    .regex(/[a-z]/, "Must contain one lowercase letter")
    .regex(/[0-9]/, "Must contain one number")
    .regex(/[@$!%*?&]/, "Must contain one special character"),
});

const RegisterForm = () => {
  const { register: registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    await toast.promise(
      registerUser(data), // throws on error
      {
        loading: "Creating account...",
        success: "Account created! 🎉",
        error: (err) => {
          if (err?.field && err?.error) {
            setError(err.field, { message: err.error });
          }
          return err?.error || "Registration failed";
        },
      }
    );

    
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto space-y-4">
      <FormField
        name="username"
        label="Username"
        placeholder="johndoe"
        control={control}
        icon={User}
      />
      <FormField
        name="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        control={control}
        icon={Mail}
      />
      <FormField
        name="password"
        type="password"
        label="Password"
        placeholder="Strong password"
        control={control}
        icon={Lock}
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
