import { addProduct } from "@/_infraestructure/http/product/getProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useAddProduct = () => {
  const qc = useQueryClient();

  const { mutateAsync, isPending, data, error } = useMutation({
    mutationKey: ["addProducts"],
    mutationFn: addProduct,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    mutateAsync,
    isPending,
    data,
    error: (error as AxiosError)?.response,
  };
};

export default useAddProduct;
