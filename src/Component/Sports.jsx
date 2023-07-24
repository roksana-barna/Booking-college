import React from 'react';

const Sports = ({sport}) => {
    const {name,description,coach,captain}=sport;

    return (
        <div>
             <p> <span className='text-blue-800 font-semibold'>Name </span>:{name}</p>
            <p><span className='text-blue-800 font-semibold'>Description: </span> {description}</p>
            <p><span className='text-blue-800 font-semibold'>Coach: </span> {coach}</p>
            <p> <span className='text-blue-800 font-semibold'>Captain: </span>{captain}</p>
          
            
            
        </div>
    );
};

export default Sports;