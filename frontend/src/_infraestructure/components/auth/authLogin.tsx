import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { AnimatePresence, motion } from "motion/react";
import { LoginAuthModel } from "@/_domain/models/auth/LoginAuthModel";
import { useAuthLogin } from "@/_infraestructure/hooks/auth/useLogin";
import { useCallback, useEffect } from "react";
import FullScreenLoading from "../layout/FullScreenLoading";
import { Password } from "primereact/password";

interface AuthLoginProps {
  closeModal: () => void;
}

const AuthLogin = ({ closeModal }: AuthLoginProps) => {
  const { loginResponse, isSuccess, isLoading } = useAuthLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginAuthModel>({
    resolver: zodResolver(LoginAuthModel),
  });

  const handleLogin: SubmitHandler<LoginAuthModel> = useCallback(
    async (data: LoginAuthModel) => {
      await loginResponse(data);
    },
    [loginResponse]
  );

  useEffect(() => {
    if (isSuccess) closeModal();
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
          onSubmit={handleSubmit(handleLogin)}
          autoComplete="off"
          className="flex flex-col gap-5"
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
                // toggleMask
                // feedback={false}
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

          <Button disabled={isLoading} type="submit" label="Entrar" />
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

export default AuthLogin;
