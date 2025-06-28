import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field";

// 1. Zod schema
const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Username too short")
    .max(20, "Username too long"),
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

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    const res = await registerUser(data.username, data.email, data.password);
    if (!res.success) {
      setError("password", { message: res.error || "Registration failed" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto space-y-4">
      <FormField
        name="username"
        label="Username"
        placeholder="johndoe"
        control={control}
      />

      <FormField
        name="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        control={control}
      />

      <FormField
        name="password"
        type="password"
        label="Password"
        placeholder="Strong password"
        control={control}
      />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
