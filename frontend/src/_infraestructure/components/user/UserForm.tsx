import { UserUpdateModel } from "@/_domain/models/user/UserUpdateProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { SubmitHandler, useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdateModel>({
    resolver: zodResolver(UserUpdateModel),
  });

  const handleUpdate: SubmitHandler<UserUpdateModel> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-surface-a rounded shadow p-5 min-w-md">
      <span className="text-xl text-text">Informacion personal</span>
      <hr className="w-full border-surface-b/50 border-dashed" />
      <form onSubmit={handleSubmit(handleUpdate)} autoComplete="off">
        <div className="flex flex-col gap-5">
          <label htmlFor="name" className="flex flex-col gap-2 w-full">
            <span>Nombre</span>
            <IconField iconPosition="left">
              <InputIcon>
                <Icon icon="fluent:rename-16-regular" className="scale-150" />
              </InputIcon>
              <InputText
                // disabled={isLoading}
                className="w-full"
                placeholder="Jhon Doeh"
                {...register("name")}
                id="name"
                aria-describedby="name-help"
              />
            </IconField>
            <small className={errors.name && "text-rose-500"} id="name-help">
              {errors.name ? errors.name.message : "Ingrese su nombre completo"}
            </small>
          </label>

          <label htmlFor="email" className="flex flex-col gap-2 w-full">
            <span>Correo</span>
            <IconField iconPosition="left">
              <InputIcon>
                <Icon icon="mdi:email-outline" className="scale-150" />
              </InputIcon>
              <InputText
                // disabled={isLoading}
                className="w-full"
                placeholder="jhon@doeh.com"
                {...register("email")}
                id="email"
                aria-describedby="email-help"
              />
            </IconField>
            <small className={errors.email && "text-rose-500"} id="email-help">
              {errors.email
                ? errors.email.message
                : "Ingrese su correo electronico"}
            </small>
          </label>

          <label htmlFor="phone" className="flex flex-col gap-2 w-full">
            <span>Telefono</span>
            <IconField iconPosition="left">
              <InputIcon>
                <Icon icon="solar:phone-linear" className="scale-150" />
              </InputIcon>
              <InputText
                // disabled={isLoading}
                className="w-full"
                placeholder="3022222222"
                {...register("phone")}
                id="phone"
                aria-describedby="phone-help"
              />
            </IconField>
            <small className={errors.phone && "text-rose-500"} id="phone-help">
              {errors.phone
                ? errors.phone.message
                : "Ingrese su numero telefonico"}
            </small>
          </label>

          <label htmlFor="address" className="flex flex-col gap-2 w-full">
            <span>Dirección</span>
            <IconField iconPosition="left">
              <InputIcon>
                <Icon
                  icon="fluent:street-sign-20-regular"
                  className="scale-150"
                />
              </InputIcon>
              <InputText
                // disabled={isLoading}
                className="w-full"
                placeholder="calle x carrera x"
                {...register("address")}
                id="address"
                aria-describedby="address-help"
              />
            </IconField>
            <small
              className={errors.address && "text-rose-500"}
              id="address-help"
            >
              {errors.address
                ? errors.address.message
                : "Ingrese su dirección domiciliaria"}
            </small>
          </label>

          <label htmlFor="birthday" className="flex flex-col gap-2 w-full">
            <span>Fecha de nacimiento</span>
            <IconField iconPosition="left">
              <InputIcon>
                <Icon icon="iconoir:birthday-cake" className="scale-150" />
              </InputIcon>
              <InputText
                type="date"
                // disabled={isLoading}
                className="w-full"
                placeholder="calle x carrera x"
                {...register("birthday")}
                id="birthday"
                aria-describedby="birthday-help"
              />
            </IconField>
            <small
              className={errors.birthday && "text-rose-500"}
              id="birthday-help"
            >
              {errors.birthday
                ? errors.birthday.message
                : "Ingrese su fecha de nacimiento"}
            </small>
          </label>
        </div>
        <div>
          <Button label="Guardar" className="w-full mt-5" />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
