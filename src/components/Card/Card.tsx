import './card.css';
import Rating from '@/components/Rating';
import { Restaurant } from '@/api/api';

interface IProps {
  card: Restaurant;
  update: (variables: { id: string; rating: number }) => void;
}

const Card: React.FC<IProps> = ({ card, update }: IProps) => (
  <div className="card">
    <div className="card__image">
      <img
        alt={card.name}
        src={card.url}
      />
    </div>
    <div className="card__content">
      <div className="card__name">{card.name}</div>
      <div className="card__description">{card.description}</div>
      <div className="card__rating">
        <Rating
          rating={card.rating}
          id={card.id}
          onUpdate={update}
        />
      </div>
    </div>
  </div>
);

export default Card;
