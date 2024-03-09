import StarIcon from '@/assets/star.svg?react';
import './rating.css';

interface IProps {
  rating: number;
  id: string;
  onUpdate: (variables: { id: string; rating: number }) => void;
}

const Rating: React.FC<IProps> = ({ id, rating, onUpdate }: IProps) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      className={`star ${index < rating ? 'star--fill' : undefined}`}
      color={index < rating ? '#e23636' : '#ccc'}
      onClick={() => {
        if (rating !== index + 1) {
          onUpdate({ id, rating: index + 1 });
        }
      }}
    />
  ));
  return <div className="card__rating">{stars}</div>;
};

export default Rating;
