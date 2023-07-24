import React, { useState } from 'react';

const Profile = ({ userDetails, setUserDetails }) => {
    const [editing, setEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState(userDetails);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserDetails(editedDetails);
    setEditing(false);
  };


    
      
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {editing ? (
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedDetails.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedDetails.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="university" className="block text-sm font-bold">University:</label>
            <input
              type="text"
              id="university"
              name="university"
              value={editedDetails.university}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-bold">Address:</label>
            <textarea
              id="address"
              name="address"
              value={editedDetails.address}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>University: {userDetails.university}</p>
          <p>Address: {userDetails.address}</p>
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      )}
    </div>
    );
};

export default Profile;