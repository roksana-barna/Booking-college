import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
          .then(result => {
            const createdUser = result.user;
            updateUserData(result.user, name);
            console.log(createdUser);
            form.reset();
          })
          .catch(error => {
            console.log(error)
          })
      }
      const updateUserData = (user, name) => {
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            console.log('updated')
          })
          .catch(error => {
            console.log(error.message)
          })
      }
    return (
        <div className='w-9/12 mx-auto'>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-1/2">
                  </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                   
                    <h1 className="text-3xl  text-center font-bold text-blue-800"> Please Register!</h1>
                    <form onSubmit={handleRegister}>
                    <div className="form-control">
                        
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" />
                      
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className='bg-blue-800 p-3 text-white rounded-xl' type="submit" value="Register" />
                    </div>
                    <p>Already Have An Account??? please <Link className='text-blue-800' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Register;