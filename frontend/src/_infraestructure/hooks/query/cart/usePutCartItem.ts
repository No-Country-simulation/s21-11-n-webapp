import { putCartItem } from '@/_infraestructure/http/cart/cartRequests';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const usePutCartItem = () => {
  const queryClient = useQueryClient();

  const putCartItemRequest = useMutation({
    mutationKey: [usePutCartItem.name],
    mutationFn: putCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (error: unknown) => {
      console.log(`${usePutCartItem.name} Error`);
      console.log(error);
    },
  });

  return {
    putCartItem: putCartItemRequest.mutate,
    isUpdating: putCartItemRequest.isPending,
    updateResponse: putCartItemRequest.data,
    status: putCartItemRequest.status,
    error: (putCartItemRequest.error as AxiosError)?.response?.data, // Tipo correcto
  };
}
