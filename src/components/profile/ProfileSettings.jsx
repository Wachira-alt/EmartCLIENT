import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { updateUserProfile } from "@/api/auth";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const schema = z.object({
  username: z.string().min(3, "Username is too short"),
  currentPassword: z.string().min(6, "Required to update password"),
  newPassword: z.string().min(6, "New password too short"),
});

const ProfileSettings = () => {
  const { user, refreshUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: user?.username || "",
    },
  });

  const onSubmit = async (values) => {
    try {
      await toast.promise(
        updateUserProfile(values),
        {
          loading: "Updating profile...",
          success: "Profile updated",
          error: (err) => err?.error || "Update failed",
        }
      );
      refreshUser?.(); // Refresh user info in context
    } catch (err) {
      console.error("Profile update error", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md space-y-4"
    >
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" {...register("username")} />
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="currentPassword">Current Password</Label>
        <Input
          id="currentPassword"
          type="password"
          {...register("currentPassword")}
        />
        {errors.currentPassword && (
          <p className="text-sm text-red-500">{errors.currentPassword.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="newPassword">New Password</Label>
        <Input
          id="newPassword"
          type="password"
          {...register("newPassword")}
        />
        {errors.newPassword && (
          <p className="text-sm text-red-500">{errors.newPassword.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
};

export default ProfileSettings;
