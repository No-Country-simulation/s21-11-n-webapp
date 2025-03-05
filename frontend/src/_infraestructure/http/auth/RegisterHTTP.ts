import { RegisterAuthModel } from "@/_domain/models/auth/RegisterAuthModel";
import http from "../http";
import { SuccessResponse } from "@/_domain/models/http/LoginHttpModel";

export const postRegister = async (
  registerData: RegisterAuthModel
): Promise<SuccessResponse> => {
  const { data } = await http.post("/auth/signup", registerData);
  return data;
};
