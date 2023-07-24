import { useLoaderData, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Events from './Events';
import Sports from './Sports';

const DetailsCompo = () => {
    const viewdetails = useLoaderData()
    const { name, admissionDate, admissionProcess, events, sports,researchWorks
    } = viewdetails;
    console.log(viewdetails)

    return (
        <div className=''>

            <div>
                <div className="card md:w-9/12 bg-base-100 shadow-xl space-y-3">
                    <div className="card-body">
                        <p className='text-blue-800 font-semibold text-2xl '>{name}</p>
                        <p><span className='text-blue-800 font-semibold '>Admission:</span> {admissionDate}</p>
                        <p><span className='text-blue-800 font-semibold '>Admission Process:</span> {admissionProcess}</p>
                        <p><span className='text-blue-800 font-semibold '>Research Works:</span> {researchWorks}</p>

                        <h2 className='text-blue-800 font-semibold text-center'>Events</h2>
                        {
                            events.map(event => <Events
                                key={event._id}
                                event={event}
                            >

                            </Events>
                            )
                        }

                        <h2 className='text-blue-800 font-semibold text-center'>Sports</h2>
                        {
                            sports.map(sport => <Sports
                                key={sport._id}
                                sport={sport}
                            >

                            </Sports>
                            )
                        }

                        <div className="card-actions justify-end">
                            <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsCompo;