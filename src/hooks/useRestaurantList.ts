import { getRestaurants } from '@/api/api';
import { useQuery } from '@tanstack/react-query';
import { Restaurant } from '@/api/api';
import { queryClient } from '@/api/queryClient';

type Response = {
  data: Restaurant[];
  isError: boolean;
  isLoading: boolean;
};

export const useRestaurantList = (): Response => {
  const {
    data = [],
    isError,
    isLoading,
  } = useQuery(
    {
      queryKey: ['restaurants'],
      queryFn: getRestaurants,
    },
    queryClient,
  );

  return { data, isError, isLoading };
};
