import React, { useContext} from 'react';

import { AuthContext } from '../Provider/AuthProvider';

const AdmissionForm = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Retrieve all the values from the input fields
        const form = event.target;
        // const sellerName = user?.displayName;
        const candidateName = form.candidateName.value;
        const subject = form.subject.value;
        // const email = user?.email;
        const candidateEmail = form.candidateEmail.value;
        const candidatePhone = form.candidatePhone.value;
        const address = form.address.value;
        const dateOfBirth = form.dateOfBirth.value;

        const image = form.image.value;
        const student = { candidateName, subject, candidatePhone, candidateEmail, dateOfBirth, address, image };
        console.log(student);
        form.reset();
        fetch('http://localhost:5000/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('admission successfull')
                }
            })

    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-4">Admission Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="candidateName" className="block font-medium">
                                Candidate Name
                            </label>
                            <input
                                type="text"
                                name="candidateName"
                                defaultValue={user.displayName}
                                className="w-full border-gray-300 bg-slate-200 p-2 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block font-medium">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                className="w-full border-gray-300 bg-slate-200 p-2  rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="candidateEmail" className="block font-medium">
                                Candidate Email
                            </label>
                            <input
                                type="email"
                                name="candidateEmail"
                                defaultValue={user.email}
                                className="w-full border-gray-300 bg-slate-200 p-2 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="candidatePhone" className="block font-medium">
                                Candidate Phone number
                            </label>
                            <input
                                type="tel"
                                name="candidatePhone"
                                className="w-full border-gray-300 bg-slate-200 p-2 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="block font-medium">
                                Address
                            </label>
                            <textarea
                                name="address"
                                className="w-full border-gray-300 bg-slate-200 p-2 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="dateOfBirth" className="block font-medium">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                className="w-full border-gray-300 bg-slate-200 p-2  rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="image" className="block font-medium">
                                Image
                            </label>
                            <input
                                type="file"
                                name="image"
                                className="w-full border-gray-300 bg-slate-200 p-2  rounded-md"
                                accept="image/*"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-6 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;