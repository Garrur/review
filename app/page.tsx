"use client"

import { useState } from 'react';
import Head from 'next/head';
import ReviewForm from './components/ReviewForm';

const HomePage: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <Head>
        <title>Leave a Review</title> 
      </Head>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <button
          onClick={handleOpenForm}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg border border-4 border-slate-300 shadow-2xl"
        >
          Leave a Review
        </button>
        {showForm && <ReviewForm onClose={handleCloseForm} />}
      </main>
    </div>
  );
}

export default HomePage;
