import { Icon } from "@iconify/react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText, InputTextProps } from "primereact/inputtext";
import { FieldError } from "react-hook-form";

const labelToName = {
  adminName: "Nombre usuario",
  email: "Correo",
  phone: "Telefono",
  storeName: "Nombre tienda",
  slogan: "Eslogan",
  key: "Llave",
  accessToken: "Token de acceso",
  publicKey: "Llave publica",
  collectorID: "Identificador",
};

interface FormGroupProps extends Omit<InputTextProps, "value"> {
  icon: string;
  error?: FieldError;
  label: keyof typeof labelToName;
  value?: string | null;
}

const FormGroup = ({ icon, error, label, value, ...rest }: FormGroupProps) => (
  <label htmlFor={rest.id} className="flex flex-col gap-2 w-full">
    <span>{labelToName[label]}</span>
    <IconField iconPosition="left">
      <InputIcon>
        <Icon icon={icon} className="scale-150" />
      </InputIcon>
      <InputText
        {...rest}
        className={`w-full ${error ? "p-invalid" : ""}`}
        aria-describedby={`${rest.id}-help`}
      />
    </IconField>
    {error ? (
      <small className="text-rose-500" id={`${rest.id}-help`}>
        {error.message}
      </small>
    ) : (
      <small className="text-text/50" id={`${rest.id}-help`}>
        Ingrese {labelToName[label]}
      </small>
    )}
  </label>
);

export default FormGroup;
