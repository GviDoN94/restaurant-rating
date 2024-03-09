import { updateRestaurantRating } from '@/api/api';
import { queryClient } from '@/api/queryClient';
import { useMutation } from '@tanstack/react-query';

export const useUpdateRating = () => {
  const { mutate } = useMutation(
    {
      mutationFn: (variables: { id: string; rating: number }) =>
        updateRestaurantRating(variables),
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ['restaurants'] }),
    },
    queryClient,
  );

  return { mutate };
};
