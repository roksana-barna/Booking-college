import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';


const Admission = () => {
    return (

        <div className=' md:ml-16  md:mt-10 font-semibold'>
            <ol className=' space-y-4 '>

                <li> <Link to='/admissionform'>Bangladesh University of Engineering and Technology<FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                </li>

                <li> <Link to='/admissionform'>Comilla Medical College<FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                </li>

                <li> <Link to='/admissionform'>Khulna University of Engineering and Technology<FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                </li>

                <li> <Link to='/admissionform'>Jessore University of Science and Technology<FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                </li>

                <li> <Link to='/admissionform'>Tejgaon college<FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                </li>

                <li> <Link to='/admissionform'>Bangladesh Agricultural University<FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                </li>

                <li> <Link to='/admissionform'>Rangpur Medical College<FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                </li>

                <li> <Link to='/admissionform'>Rajshahi Medical College<FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                </li>

                <li> <Link to='/admissionform'>Shaheed Ziaur Rahman Medical College<FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                </li>

                <li> <Link to='/admissionform'>Shahjalal University of Science and Technology<FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                </li>
            </ol>
        </div>

    );
};

export default Admission;