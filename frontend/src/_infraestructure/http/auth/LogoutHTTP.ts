import http from "../http";

export const postLogout = async (refreshToken: string): Promise<void> => {
  const { data } = await http.post("/auth/logout", { refreshToken });
  return data;
};
