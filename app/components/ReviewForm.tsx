"use client"

import { useState, FormEvent } from 'react';
import StarRating from './StarRating';

interface ReviewFormProps {
  onClose: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onClose }) => {
  const [safety, setSafety] = useState<number>(5);
  const [communication, setCommunication] = useState<number>(4);
  const [recommend, setRecommend] = useState<string | null>(null);
  const [praise, setPraise] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ safety, communication, recommend, praise });
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form onSubmit={handleSubmit} className="relative max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 text-2xl hover:text-gray-700 hover:scale-150 hover:animate-pulse"
        >
          &times;
        </button>
        <h2 className="text-l font-bold mb-4 text-center">Leave a review</h2>

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
    </div>
  );
};

export default ReviewForm;