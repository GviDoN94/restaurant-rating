import Container from '@/components/Container';
import Search from '@/components/Search';
import Card from '@/components/Card';
import { useRestaurantList } from '@/hooks/useRestaurantList';
import { Restaurant } from '@/api/api';
import { useCallback, useMemo, useState } from 'react';
import { updateRestaurantRating } from '@/api/api';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';

const MainPage = () => {
  const { data, isLoading } = useRestaurantList();
  const [search, setSearch] = useState('');

  const filterData = useCallback(
    (name: string): Restaurant[] =>
      name
        ? data.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(name.toLowerCase()),
          )
        : data,
    [data],
  );

  const filteredRestaurants = useMemo(
    () => filterData(search),
    [filterData, search],
  );

  const mutateRaiting = useMutation(
    {
      mutationFn: (variables: { id: string; raiting: number }) =>
        updateRestaurantRating(variables),
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ['restaurants'] }),
    },
    queryClient,
  );

  const updateData = (id: string, raiting: number) => {
    mutateRaiting.mutate({ id, raiting });
  };

  return (
    <main>
      <Container>
        <Search
          placeholder="Search for restaurants"
          search={setSearch}
        />
        {isLoading && (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</p>
        )}
        <section>
          {filteredRestaurants.map((restaurant) => (
            <Card
              card={restaurant}
              key={restaurant.id}
              update={updateData}
            />
          ))}
        </section>
      </Container>
    </main>
  );
};

export default MainPage;
