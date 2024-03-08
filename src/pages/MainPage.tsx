import Container from '@/components/Container';
import Search from '@/components/Search';
import Card from '@/components/Card';
import { useRestaurantList } from '@/hooks/useRestaurantList';
import { Restaurant } from '@/api/api';
import { useState } from 'react';

const MainPage = () => {
  const { data, isLoading } = useRestaurantList();
  const [search, setSearch] = useState('');

  const filterData = (name: string): Restaurant[] =>
    name
      ? data.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(name.toLowerCase()),
        )
      : data;

  const filteredRestaurants = filterData(search);

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
            />
          ))}
        </section>
      </Container>
    </main>
  );
};

export default MainPage;
