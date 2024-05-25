import React from 'react';
import './Banner/Banner.css'

const Banner = () => {
    return (
        <div className="featured-item bg-fixed text-white h-[500px] pt-14  ">
            <div className="md:flex justify-center items-center bg-slate-700 bg-opacity-60 mt-6 pt-24 pb-10 px-36">
                <div>
                    {/* <img src={featuredImg} alt="" /> */}
                </div>
                <div className="md:ml-4 ">
                    <p className='mb-4 text-xl text-white font-bold'>Unlock Your Future with Expert Guidance
                    </p>
                    <p className="uppercase text-5xl font-bold">Leading Educational Consultancy in Dhaka
                    </p>
                    <p className='text-xl font bold pt-4 pb-4'>Your Success, Our Commitment
                    </p>
                    <p>
                        Discover top global universities, expert visa assistance, and personalized career counseling.

                    </p><button className="btn btn-outline border-0 border-b-4 mt-4 text-white border-red-600">Explore Now</button>
                </div>
            </div>
        </div>


    );
};

// export default Banner;
// import React from 'react';
// import img1 from '../assets/SA.jpg'
// import img2 from '../assets/study abroad.jpg'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// const Banner = () => {
//     return (
//         <Carousel>
//         <div>
//             <img src={img1}/>
//         </div>
//         <div>
//             <img src= {img2}/>
//         </div>
//     </Carousel>

//     );
// };

export default Banner;
