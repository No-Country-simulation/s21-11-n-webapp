import { LoginAuthModel } from "@/_domain/models/auth/LoginAuthModel";
import http from "../http";
import { ResponseHttpLogin } from "@/_domain/models/http/LoginHttpModel";

export const postLogin = async (
  loginData: LoginAuthModel
): Promise<ResponseHttpLogin> => {
  return await http.post("/auth/login", loginData);
};
