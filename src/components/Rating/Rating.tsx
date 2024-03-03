import StarIcon from '@/assets/star.svg?react';

const Rating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      width={21}
      height={21}
      color={index < rating ? '#e23636' : '#ccc'}
    />
  ));
  return <div className="card__rating">{stars}</div>;
};

export default Rating;
