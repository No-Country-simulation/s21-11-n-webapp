import { LoginAuthModel } from "@/_domain/models/auth/LoginAuthModel";
import http from "../http";
import { SuccessResponse } from "@/_domain/models/http/LoginHttpModel";

export const postLogin = async (
  loginData: LoginAuthModel
): Promise<SuccessResponse> => {
  const { data } = await http.post("/auth/login", loginData);
  return data;
};
