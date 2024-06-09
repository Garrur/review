

import Head from 'next/head';
import ReviewForm from './components/ReviewForm';

const Review: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Leave a Review</title>
      </Head>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ReviewForm />
      </main>
    </div>
  );
}

export default Review;
