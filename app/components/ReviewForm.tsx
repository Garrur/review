"use client"

import { useState, FormEvent } from 'react';

const ReviewForm: React.FC = () => {
  const [safety, setSafety] = useState<number>(5);
  const [communication, setCommunication] = useState<number>(4);
  const [recommend, setRecommend] = useState<string | null>(null);
  const [praise, setPraise] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ safety, communication, recommend, praise });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Leave a review</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Safety</label>
        <StarRating rating={safety} setRating={setSafety} />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Communication</label>
        <StarRating rating={communication} setRating={setCommunication} />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Would you recommend Trausti?</label>
        <div className="flex space-x-4">
          <button type="button" className={`px-4 py-2 rounded ${recommend === 'no' ? 'bg-red-500 text-white' : 'bg-gray-200'}`} onClick={() => setRecommend('no')}>No</button>
          <button type="button" className={`px-4 py-2 rounded ${recommend === 'yes' ? 'bg-green-500 text-white' : 'bg-gray-200'}`} onClick={() => setRecommend('yes')}>Yes</button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Praise</label>
        <input 
          type="text" 
          value={praise} 
          onChange={(e) => setPraise(e.target.value)} 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
          placeholder="What terms best describe Trausti?" 
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Submit</button>
    </form>
  );
};

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

export default ReviewForm;
