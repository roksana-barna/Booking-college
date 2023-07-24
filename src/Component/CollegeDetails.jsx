import React, { useState,useEffect } from 'react';

const CollegeDetails = ({ onSubmitReview }) => {
   
  const [review, setReview] = useState({ rating: 0, comment: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReview(review);
    setReview({ rating: 0, comment: '' });
  };

  return (
    <div className="container mx-auto p-4">

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Add a Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-bold">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={review.rating}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
            >
              <option value={0}>Select Rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-bold">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={review.comment}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollegeDetails;
