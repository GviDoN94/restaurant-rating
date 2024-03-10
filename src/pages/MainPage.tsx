import Container from '@/components/Container';
import Search from '@/components/Search';
import Card from '@/components/Card';
import { useRestaurantList } from '@/hooks/useRestaurantList';
import { useState } from 'react';
import { useUpdateRating } from '@/hooks/useUpdateRating';

const MainPage = () => {
  const { data: restaurants, isLoading } = useRestaurantList();
  const { mutate } = useUpdateRating();
  const [search, setSearch] = useState('');

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase()),
  );

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
              update={mutate}
            />
          ))}
        </section>
      </Container>
    </main>
  );
};

export default MainPage;
