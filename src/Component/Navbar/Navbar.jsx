import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    console.log({ user });
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                setLoader(true)
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className="navbar bg-base-100 flex justify-between w-5/6 mx-auto my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='text-base font-bold text-[#181D4E]'>Home</Link></li>
                        <li><Link to='/alltoys' className='text-base font-bold text-[#181D4E]'>All Toys</Link></li>
                        <li><Link to='/blog' className='text-base font-bold text-[#181D4E]'>Blog</Link></li>
                        {
                            user ? <>
                                <li><Link to='/' className='text-base font-bold text-[#181D4E]'>My Toys</Link></li>
                                <li><Link to='/alltoys' className='text-base font-bold text-[#181D4E]'>Add A Toy</Link></li>
                                <li>
                                    <div>
                                        <img className='w-12 h-12 rounded-full' src={user?.photoURL} title={user?.displayName || "no name found"} />
                                    </div>
                                </li>
                                <li onClick={handleLogout} className='text-base font-bold text-[#181D4E]'>Logout</li>
                            </> : <li><Link to='/login' className='text-base font-bold text-[#181D4E]'>Login</Link></li>
                        }

                    </ul>

                </div>
                <a className="cursor-pointer font-bold normal-case text-5xl text-[#2396DC]">Funtopia</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className='grow'>
                    <ul className="menu menu-horizontal px-1">

                        <li><Link to='/' className='text-base font-bold text-[#181D4E]'>Home</Link></li>
                        <li><Link to='/alltoys' className='text-base font-bold text-[#181D4E]'>All Toys</Link></li>
                        <li><Link to='/' className='text-base font-bold text-[#181D4E]'>Blog</Link></li>
                        {
                            user ? <>
                                <li><Link to='/' className='text-base font-bold text-[#181D4E]'>My Toys</Link></li>
                                <li><Link to='/addatoy' className='text-base font-bold text-[#181D4E]'>Add A Toy</Link></li>
                                <li>
                                    <div>
                                        <img className='w-12 h-12 rounded-full' src={user?.photoURL} title={user?.displayName || "no name found"} />
                                    </div>
                                </li>
                            </> : <li><Link to='/login' className='text-base font-bold text-[#181D4E]'>Login</Link></li>
                        }

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;