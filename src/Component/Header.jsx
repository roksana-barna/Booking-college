import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navItems = <>
    <li><Link to="/" className='text-xl text-white font-semibold'>Home</Link></li>
    <li><Link to="/colleges" className='text-xl text-white font-semibold'>Colleges</Link></li>
    <li><Link to="/admission" className='text-xl text-white font-semibold'>Admission</Link></li>
    <li><Link to="/mycollege" className='text-xl text-white font-semibold'>My College</Link></li>
    {
        user ? <>
        <h2 className='text-white mt-3'>{user.displayName}</h2>
            <button onClick={handleLogOut} className="btn ml-4 text-black">LogOut</button>
        </> : <>
            <li><Link to="/login" className="btn pt-4 text-black">Login</Link></li>
        </>
    }

</>
    return (
        <>
        <div className="navbar fixed  z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                {/* <img className='w-10 h-10  ml-2 rounded-2xl' src={logo} alt="" /> */}
                <FaBookOpen className='text-white h-5 w-5 ml-4'></FaBookOpen>
                <a className="btn btn-ghost normal-case text-2xl ml-1 text-white">Eduplan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

        </div>
    </>

    );
};

export default Header;