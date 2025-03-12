import { addProduct } from "@/_infraestructure/http/product/getProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useAddProduct = () => {
  const qc = useQueryClient();

  const addProducts = useMutation({
    mutationKey: ["addProducts"],
    mutationFn: addProduct,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      console.log("error");
    },
  });

  return {
    createProduct: addProducts.mutate,
    isCreating: addProducts.isPending,
    createResponse: addProducts.data,
    status: addProducts.status,
    error: (addProducts.error as AxiosError)?.response?.data, // Tipo correcto
  };
};

export default useAddProduct;
