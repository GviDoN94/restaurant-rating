import './card.css';
import Rating from '@/components/Rating';

interface IProps {
  image: string;
  name: string;
  description: string;
  rating: number;
}

const Card = ({ image, name, description, rating }: IProps) => (
  <div className="card">
    <img
      className="card__image"
      alt={name}
      src={image}
    />
    <div className="card__content">
      <div className="card__name">{name}</div>
      <div className="card__description">{description}</div>
      <div className="card__rating">
        <Rating rating={rating} />
      </div>
    </div>
  </div>
);

export default Card;
