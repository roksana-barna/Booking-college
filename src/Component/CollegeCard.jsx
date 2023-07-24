import React from 'react';
import { Link } from 'react-router-dom';


const CollegeCard = ({ clg }) => {
    const { name, image, rating, admissionDate, researchHistory,_id } = clg;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-10 h-5/6">
                <figure><img className='h-72 rounded-xl' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        { name }   
                         <div className="badge badge-secondary">{rating}</div>
                    </h2>
                    <p>Admission Date:  {admissionDate}</p>
                    <p>Research Count:  {researchHistory}</p>

                    <div className="card-actions justify-center mt-4">
                       <Link to={`/details/${_id}`}> <button  className='bg-blue-900 rounded-xl px-6 py-2 text-white'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;