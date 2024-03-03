import Container from '@/components/Container';
import Search from '@/components/Search';
import Card from '@/components/Card';

const card = {
  id: 1,
  name: "Mama's Kitchen",
  description: 'American, 4.7 stars',
  raiting: 4,
  url: '/mamas-kitchen.png',
};

const MainPage = () => (
  <main>
    <Container>
      <Search placeholder="Search for restaurants" />
      <section>
        <Card
          image={card.url}
          name={card.name}
          description={card.description}
          rating={card.raiting}
        />
      </section>
    </Container>
  </main>
);

export default MainPage;
