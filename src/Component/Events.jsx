import React from 'react';

const Events = ({event}) => {
    const {date,description,location,name}=event;
    return (
        <div>
            <p> <span className='text-blue-800 font-semibold'>Name </span>:{name}</p>
            <p><span className='text-blue-800 font-semibold'>Date: </span> {date}</p>
            <p><span className='text-blue-800 font-semibold'>Description: </span> {description}</p>
            <p> <span className='text-blue-800 font-semibold'>location: </span>{location}</p>
          
            
        </div>
    );
};

export default Events;