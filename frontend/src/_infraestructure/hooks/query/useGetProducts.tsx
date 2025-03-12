import { AllProductResponse } from "@/_domain/models/http/productHttpModel";
import { getAllProducts } from "@/_infraestructure/http/product/getProducts";
import { useQuery } from "@tanstack/react-query";

const useGetProduct = () => {

  const { data, isError, error, isFetching } = useQuery<AllProductResponse>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  
  return { data, isError, error, isFetching };
};

export default useGetProduct;
