import React, { useContext,useEffect,useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyCollegeTable from '../Pages/MyCollegeTable';
import CollegeDetails from '../Component/CollegeDetails';

const My_College = () => {
     const { user } = useContext(AuthContext);
    const [myCollege, setMyCollege] = useState([])
    useEffect(() => {
        fetch(`https://booking-college-server-zeta.vercel.app/students?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCollege(data)
                console.log(data)

            })

    }, []);
    
    return (
        <div>
            <h2></h2>
             <div className='w-9/12 mx-auto'>
            <div >
                <h2 className='text-xl text-teal-600 text-center font-bold my-6'>My College</h2>
            </div>
          
            <div>
                <div className="">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th> picture</th>
                                <th>candidate Name</th>
                                <th>candidate email</th>
                                <th>subject</th>
                                <th>candidatePhone</th>
                                <th>Date of birth</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        myCollege.map(mycollege => <MyCollegeTable
                            key={mycollege._id}
                            mycollege={mycollege}
                        >

                        </MyCollegeTable>)
                    }
                    </tbody>
                    </table>

                </div>
            </div >
        </div>
        <CollegeDetails></CollegeDetails>
            
        </div>
    );
};

export default My_College;