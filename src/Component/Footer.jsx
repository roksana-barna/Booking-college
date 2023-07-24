import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-2xl font-semibold">BookMyCampus</h3>
            <p className="mt-2">Your go-to place for booking campus facilities and events.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h4 className="text-lg font-semibold">Useful Links</h4>
            <ul className="mt-2">
              <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Book Facilities</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Upcoming Events</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <ul className="mt-2">
              <li><a href="#" className="text-white hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-800" />
        <p className="text-center text-sm">© 2023 BookMyCampus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
