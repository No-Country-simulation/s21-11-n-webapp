import { FullUserDataModel } from "../user/DataUserModel";

export type ResponseHttpLogin = {
  status: number;
  message: string;
  token: string;
  data: FullUserDataModel;
};
