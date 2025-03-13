import { getCartByOrderStatus } from '@/_infraestructure/http/cart/cartRequests';
import { useQuery } from "@tanstack/react-query";

export const useGetCartsByOrderStatus = (orderStatus: string) => {
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCartByOrderStatus({ orderStatus }),
  });
  return { data, isError, error, isFetching };
};
