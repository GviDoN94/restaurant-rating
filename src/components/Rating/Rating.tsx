import StarIcon from '@/assets/star.svg?react';
import './rating.css';

const Rating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      className={`star ${index < rating ? 'star--fill' : undefined}`}
      color={index < rating ? '#e23636' : '#ccc'}
    />
  ));
  return <div className="card__rating">{stars}</div>;
};

export default Rating;
