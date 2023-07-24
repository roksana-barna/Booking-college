import React from 'react';

const Banner = () => {
    return (
        <div className="bg-blue-300 text-white py-12 px-6 ">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Book My Campus</h1>
                <p className="text-xl md:text-2xl">Your go-to place for booking campus facilities and events.</p>
                <p className="text-lg md:text-xl mb-4 ">Explore and Reserve:</p>
                <ul className="text-lg md:text-xl text-left  mb-8">
                    <li>- Sports Facilities</li>
                    <li>- Conference Rooms</li>
                    <li>- Auditoriums</li>
                    <li>- Classrooms</li>
                    <li>- Event Spaces</li>
                </ul>
                    <button className="bg-white text-blue-500 py-3 px-6 rounded-full text-lg hover:bg-blue-100 transition-colors duration-300 ">Get Started</button>
                </div>     
        </div>
    );
};

export default Banner;
