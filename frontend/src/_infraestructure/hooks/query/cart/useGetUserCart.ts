import { getCart } from '@/_infraestructure/http/cart/cartRequests';
import { useQuery } from "@tanstack/react-query";

export const useGetUserCart = (userId: string) => {
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCart({ userId }),
  });
  return { data, isError, error, isFetching };
};
