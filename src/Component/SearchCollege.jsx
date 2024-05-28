import React, { useState } from 'react';

const SearchCollege = ({ collegeCard, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className="p-4 mt-10 justify-center">
            <form onSubmit={handleSubmit}>
              <aside className='flex lg:w-2/4 justify-center'>
              <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Search for a college name"
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Search
                </button>
              </aside>
            </form>
        </div>
    );
};

export default SearchCollege;
