import React,{useContext} from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyCollegeTable = ({mycollege}) => {
    const { user } =useContext(AuthContext);
    const { candidateName, subject, candidatePhone, candidateEmail, dateOfBirth,image } = mycollege;

    return (
                    <tr>
                        <td>
                            <div className="flex">
                                <div className="avatar">
                                    <div className="mask mask-rounded w-8 h-8">
                                        <img src={image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            {candidateName}
                        </td>
                        <td>
                            { candidateEmail}
                        </td>
                        <td>
                            { subject}
                        </td>
                        <td>
                            ${candidatePhone}
                        </td>
                       
                        <td className='mr-4'>
                            {dateOfBirth}
                        </td>
                      
                       
                       
                    
                    </tr>
    
    );
};

export default MyCollegeTable;