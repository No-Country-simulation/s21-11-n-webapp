import { deleteCartItem } from '@/_infraestructure/http/cart/cartRequests';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  const putCartItemRequest = useMutation({
    mutationKey: [useDeleteCartItem.name],
    mutationFn: deleteCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (error: unknown) => {
      console.log(`${useDeleteCartItem.name} Error`);
      console.log(error);
    },
  });

  return {
    deleteCartItem: putCartItemRequest.mutate,
    isDeleting: putCartItemRequest.isPending,
    deleteResponse: putCartItemRequest.data,
    status: putCartItemRequest.status,
    error: (putCartItemRequest.error as AxiosError)?.response?.data, // Tipo correcto
  };
}
