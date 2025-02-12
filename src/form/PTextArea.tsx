import { Textarea } from "@/components/ui/textarea";
import { Controller, useFormContext } from "react-hook-form";

type PTextareaProps = {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  defaultValue?: string;
  required?: boolean;
};

const PTextarea = ({
  name,
  placeholder,
  disabled,
  label,
  defaultValue,
  required,
}: PTextareaProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      defaultValue={defaultValue || ""}
      control={control}
      render={({ field, fieldState }) => (
        <div className="mb-4">
          {label && (
            <label
              htmlFor={name}
              className="block text-sm font-medium text-my-light dark:text-my-dark mb-4"
            >
              {label}
            </label>
          )}
          <Textarea
            {...field}
            placeholder={placeholder}
            id={name}
            required={required}
            disabled={disabled}
            className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {fieldState?.error && (
            <p className="text-sm text-red-500 mt-1">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default PTextarea;
