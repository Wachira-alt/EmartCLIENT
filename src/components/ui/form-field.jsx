import { useState } from "react";
import { Controller } from "react-hook-form";
import { Input } from "./input";
import { Label } from "./label";
import { Eye, EyeOff } from "lucide-react";

const FormField = ({
  name,
  control,
  label,
  type = "text",
  placeholder,
  icon: Icon, //  receives icon component
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-1">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <div className="relative">
              {/* left icon */}
              {Icon && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon size={16} />
                </span>
              )}
              {/* input field */}
              <Input
                id={name}
                type={inputType}
                placeholder={placeholder}
                className={Icon ? "pl-9" : ""}
                {...field}
              />
              {/* right toogle for password */}
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              )}
            </div>
            {/* error */}
            {fieldState.error && (
              <p className="text-sm text-red-500">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default FormField;
