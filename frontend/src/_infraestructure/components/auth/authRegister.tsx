import { RegisterAuthModel } from "@/_domain/models/auth/RegisterAuthModel";
import useRegister from "@/_infraestructure/hooks/auth/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FullScreenLoading from "../layout/FullScreenLoading";

interface AuthRegisterProps {
  setIndex: Dispatch<SetStateAction<number>>;
}

const AuthRegister = ({ setIndex }: AuthRegisterProps) => {
  const { isLoading, isSuccess, registerResponse } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterAuthModel>({
    resolver: zodResolver(RegisterAuthModel),
  });
  const handleRegister: SubmitHandler<RegisterAuthModel> = useCallback(
    async (data) => {
      await registerResponse(data);
    },
    [registerResponse]
  );

  useEffect(() => {
    if (isSuccess) setIndex(0);
  }, [isSuccess]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{
          duration: 0.25,
          type: "spring",
          bounce: 0.3,
        }}
      >
        <form
          autoComplete="off"
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Correo</label>
            <IconField iconPosition="left">
              <InputIcon>
                <Icon
                  icon="material-symbols:alternate-email"
                  width="20"
                  height="20"
                />
              </InputIcon>
              <InputText
                disabled={isLoading}
                className="w-full"
                placeholder="jhon@doeh.com"
                {...register("email")}
                id="email"
                aria-describedby="email-help"
              />
            </IconField>
            <small className={errors.email && "text-rose-500"} id="email-help">
              {errors.email ? errors.email.message : "Ingrese su correo"}
            </small>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Clave</label>
            <IconField iconPosition="left">
              <InputIcon>
                <Icon icon="carbon:password" width="20" height="20" />
              </InputIcon>
              <InputText
                disabled={isLoading}
                className="w-full"
                type="password"
                placeholder="********"
                {...register("password")}
                id="password"
                aria-describedby="password-help"
              />
            </IconField>
            <small
              className={errors.password && "text-rose-500"}
              id="password-help"
            >
              {errors.password ? errors.password.message : "Ingrese su clave"}
            </small>
          </div>
          <Button disabled={isLoading} type="submit" label="Registrar" />
        </form>
        <div className="flex items-center mt-10">
          <hr className="w-full opacity-50" />
          <span className="w-4/5 text-center">ó</span>
          <hr className="w-full opacity-50" />
        </div>
        <div className="flex items-center justify-center gap-3 mt-5">
          <Button
            icon={<Icon icon="uim:google" width="24" height="24" />}
            rounded
            outlined
            aria-label="Filter"
          />
          <Button
            icon={
              <Icon icon="icon-park-twotone:facebook" width="24" height="24" />
            }
            rounded
            outlined
            aria-label="Filter"
          />
        </div>
      </motion.div>
      <AnimatePresence>{isLoading && <FullScreenLoading />}</AnimatePresence>
    </>
  );
};

export default AuthRegister;
