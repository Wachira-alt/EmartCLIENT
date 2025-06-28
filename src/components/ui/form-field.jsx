import { Controller } from "react-hook-form";
import { Input } from "./input";
import { Label } from "./label";

const FormField = ({
  name,
  control,
  label,
  type = "text",
  placeholder,
  icon: Icon, //  receives icon component
}) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <div className="relative">
              {Icon && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon size={16} />
                </span>
              )}
              <Input
                id={name}
                type={type}
                placeholder={placeholder}
                className={Icon ? "pl-9" : ""}
                {...field}
              />
            </div>
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
