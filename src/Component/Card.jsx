import React from 'react';
import Eventsome from './Eventsome';
import { Link } from 'react-router-dom';

const Card = ({ college }) => {
    const { image, name, admissionDate, researchHistory, events, sportsCategories,_id
    } = college;
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
            <img src={image} alt={name} className="w-96 h-72 rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
            <p className="text-gray-500 mb-4">Admission Date: {admissionDate}</p>
            {/* <p className="text-gray-600 mb-4">Events: {college.events}</p> */}
            <p className="text-gray-600 mb-4">Research History: {researchHistory}</p>
            <p className='text-blue-800 font-semibold text-center' >Event
                {
                    events.map(eventsom => <Eventsome
                        key={eventsom._id}
                        eventsom={eventsom}
                    >

                    </Eventsome>
                    )
                }

            </p>
            <p className="text-gray-600 mb-4"><span className='text-blue-800'>Sport Categorys:</span> {sportsCategories}</p>


            <Link to={`/details/${_id}`}> <button className='bg-blue-900 rounded-xl px-6 py-2 text-white'>Details</button></Link>
        </div>
    );
};

export default Card;
