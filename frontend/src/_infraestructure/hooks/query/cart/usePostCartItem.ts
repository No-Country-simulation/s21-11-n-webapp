import { postCartItem } from '@/_infraestructure/http/cart/cartRequests';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const usePostCartItem = () => {
  const queryClient = useQueryClient();

  const putCartItemRequest = useMutation({
    mutationKey: [usePostCartItem.name],
    mutationFn: postCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (error: unknown) => {
      console.log(`${usePostCartItem.name} Error`);
      console.log(error);
    },
  });

  return {
    postCartItem: putCartItemRequest.mutateAsync,
    isCreating: putCartItemRequest.isPending,
    createResponse: putCartItemRequest.data,
    status: putCartItemRequest.status,
    error: (putCartItemRequest.error as AxiosError)?.response?.data, // Tipo correcto
  };
}
