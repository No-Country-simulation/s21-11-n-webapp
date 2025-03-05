import { RegisterAuthModel } from "@/_domain/models/auth/RegisterAuthModel";
import { ErrorResponse } from "@/_domain/models/http/LoginHttpModel";
import { postRegister } from "@/_infraestructure/http/auth/RegisterHTTP";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

const useRegister = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerResponse = async (registerData: RegisterAuthModel) => {
    setIsLoading(true);
    toast.promise(postRegister(registerData), {
      loading: "Cargando...",
      success: ({ user }) => {
        setIsSuccess(true);
        console.log(user);
        return "Registro exitoso";
      },
      error: (error: AxiosError<ErrorResponse>) => {
        return error.response?.data.message;
      },
      finally: () => {
        setIsLoading(false);
      },
    });
  };

  return { isLoading, isSuccess, registerResponse };
};

export default useRegister;
