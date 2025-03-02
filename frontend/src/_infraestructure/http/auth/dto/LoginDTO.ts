export interface LoginDTO {
  status: number;
  message: string;
  data: {
    token: string;
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
      restaurant: {
        id: number;
        name: string;
        address: string;
        openingHours: string;
        image: string;
        products: [];
      };
    };
  };
}
