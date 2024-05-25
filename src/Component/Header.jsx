import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { IoCallOutline } from "react-icons/io5";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navItems = <>
        <li><Link to="/" className='text-xl text-white font-normal font-serif'>Home</Link></li>
        <li><Link to="/colleges" className='text-xl text-white font-normal font-serif'>Colleges</Link></li>
        <li><Link to="/admission" className='text-xl text-white font-normal font-serif'>Admission</Link></li>
        <li><Link to="/mycollege" className='text-xl text-white font-normal font-serif'>My College</Link></li>
        {
            user ? <>
                <h2 className='text-white mt-3'>{user.displayName}</h2>
                <button onClick={handleLogOut} className="btn ml-4 text-black">LogOut</button>
            </> : <>
                <li><Link to="/login" className="btn pt-4 font-serif text-black">Login</Link></li>
            </>
        }

    </>
    return (
        <>
            <footer className="footer items-center p-3  bg-blue-950 text-neutral-content px-10">
                <aside className="items-center grid-flow-col">
                    <IoCallOutline />
                    <p> Phone: +8801755707070 ; +8801715322220
                    </p>
                    <p className='ml-10'>We are open: Sat - Thu: 11 am - 8 pm</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </nav>
            </footer>
            <div className="navbar fixed  z-10  max-w-screen-xl bg-slate-700 bg-opacity-60 text-white">
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