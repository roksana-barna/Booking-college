import React from 'react';

const Eventsome = ({eventsom}) => {
    const {name}=eventsom;
    return (
        <div>
            <p> <span className='text-blue-800 font-semibold'>Name </span>:{name}</p>
          
            
        </div>
    )
};

export default Eventsome;