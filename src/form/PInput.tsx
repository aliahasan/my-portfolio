import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
};

const PInput = ({
  type,
  name,
  label,
  disabled,
  placeholder,
  defaultValue,
  required,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field, fieldState }) => (
        <FormItem className="space-y-2">
          {label && (
            <Label
              htmlFor={name}
              className="text-sm font-semibold text-my-light dark:text-my-dark"
            >
              {label}
            </Label>
          )}
          <FormControl>
            <Input
              {...field}
              type={type}
              required={required}
              id={name}
              disabled={disabled}
              placeholder={placeholder}
              value={field.value || ""}
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition-colors disabled:bg-gray-200 disabled:text-gray-500"
            />
          </FormControl>
          {fieldState?.error?.message && (
            <FormMessage className="text-sm text-red-500">
              {fieldState.error.message}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default PInput;
