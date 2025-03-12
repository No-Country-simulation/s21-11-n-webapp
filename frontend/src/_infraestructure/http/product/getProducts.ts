import http from "../http";

export const getAllProducts = async () => {
  const { data } = await http.get("/products");
  return data;
};

export const addProduct = async (product: any) => {
  const { data } = await http.post("/products", product);
  console.log(product)
  return data;
};
