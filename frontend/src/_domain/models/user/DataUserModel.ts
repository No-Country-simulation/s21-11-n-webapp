export type BasicUserDataModel = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

export type FullUserDataModel = BasicUserDataModel & {
  phone?: string;
  address?: string;
  isActive: boolean;
};
