import { clearCart } from '@/_infraestructure/http/cart/cartRequests';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useClearUserCart = () => {
  const queryClient = useQueryClient();

  const putCartItemRequest = useMutation({
    mutationKey: [useClearUserCart.name],
    mutationFn: clearCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (error: unknown) => {
      console.log(`${useClearUserCart.name} Error`);
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
