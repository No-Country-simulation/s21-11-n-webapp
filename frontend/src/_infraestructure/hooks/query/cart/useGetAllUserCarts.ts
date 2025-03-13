import { getCartAll } from '@/_infraestructure/http/cart/cartRequests';
import { useQuery } from '@tanstack/react-query';

export const useGetAllUserCarts = (userId: string) => {
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCartAll({ userId }),
  });
  return { data, isError, error, isFetching };
}
