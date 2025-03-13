import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText, InputTextProps } from "primereact/inputtext";
import { FieldError } from "react-hook-form";

interface FormGroupProps extends Omit<InputTextProps, "value"> {
  icon?: string;
  error?: FieldError;
  label: string;
  value?: string | null;
}

const FormGroup = ({ icon, error, label, value, ...rest }: FormGroupProps) => {
  const I = (
    <InputText
      {...rest}
      className={`w-full transition-all duration-300 ${
        error ? "p-invalid" : ""
      }`}
      aria-describedby={`${rest.id}-help`}
    />
  );

  const II = (
    <IconField iconPosition="left">
      <InputIcon>
        <Icon icon={icon ?? ""} className="scale-150" />
      </InputIcon>
      {I}
    </IconField>
  );

  return (
    <label htmlFor={rest.id} className="flex flex-col gap-1 w-full mb-5">
      <span className="font-medium">{label}</span>
      {icon ? II : I}

      <AnimatePresence mode="wait">
        {error ? (
          <motion.small
            key="error-message"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-rose-500"
            id={`${rest.id}-help`}
          >
            {error.message}
          </motion.small>
        ) : (
          <motion.small
            key="helper-text"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-gray-400"
            id={`${rest.id}-help`}
          >
            Ingrese {label}
          </motion.small>
        )}
      </AnimatePresence>
    </label>
  );
};

export default FormGroup;
