
interface StarRatingProps {
    rating: number;
    setRating: (rating: number) => void;
  }
  
  const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setRating(index + 1)}
            className={`text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };
  
  export default StarRating;
  