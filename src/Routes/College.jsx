import React, {useEffect,useState } from 'react';
import CollegeCard from '../Component/CollegeCard';


const College = () => {
    const [college, setCollege] = useState([])
    useEffect(() => {
        fetch('https://booking-college-server-zeta.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                setCollege(data)
                console.log(data)

            })

    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
             {
                        college.map(clg=> <CollegeCard
                            key={clg.id}
                            clg={clg}
                        >

                        </CollegeCard>)
                    }
        </div>
    );
};

export default College;