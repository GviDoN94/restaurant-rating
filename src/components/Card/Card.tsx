import './card.css';
import Rating from '@/components/Rating';
import { Restaurant } from '@/api/api';

interface IProps {
  card: Restaurant;
}

const Card = ({ card }: IProps) => (
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
        <Rating rating={card.raiting} />
      </div>
    </div>
  </div>
);

export default Card;
