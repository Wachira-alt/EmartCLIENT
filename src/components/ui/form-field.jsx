import { Controller } from "react-hook-form";
import { Input } from "./input";
import { Label } from "./label";

const FormField = ({
  name,
  control,
  label,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              {...field}
            />
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
