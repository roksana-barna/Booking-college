import React from 'react';
import img from '../assets/istockphoto-1222806141-612x612.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img  src={img} alt="" />
            <Link>  <button className='bg-blue-800 px-3 py-2 rounded-xl text-white'>Home</button>
</Link>
        </div>
    );
};

export default NotFound;