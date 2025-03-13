import { UserAdminModel } from "@/_domain/models/user/UserAdminModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormGroup from "../FormGroup";
import { Button } from "primereact/button";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAdminModel>({
    resolver: zodResolver(UserAdminModel),
  });
  const handleSave: SubmitHandler<UserAdminModel> = (data) => {
    console.log(data);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="p-5 bg-surface-a"
    >
      <form autoComplete="off" onSubmit={handleSubmit(handleSave)}>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 gap-y-10">
          <FormGroup
            icon="fluent:rename-16-regular"
            label={"Nombre"}
            error={errors.adminName}
            id="adminName"
            {...register("adminName")}
          />

          <FormGroup
            icon="mdi:email-outline"
            label={"Correo"}
            error={errors.email}
            id="email"
            {...register("email")}
          />
          <FormGroup
            icon="solar:phone-linear"
            label={"Telefono"}
            error={errors.phone}
            id="phone"
            {...register("phone")}
          />
        </div>
        <div className="w-full mt-5 grid place-content-center">
          <Button label="Guardar" />
        </div>
      </form>
    </motion.div>
  );
}
