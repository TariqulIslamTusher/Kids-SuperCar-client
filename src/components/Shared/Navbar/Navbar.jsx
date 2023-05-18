import React, { useContext } from 'react';
import logo from '../../../assets/toyCarLogo.png'
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    
    const handleLogOut = () => {
        signOutUser()
    }

    return (
        <div className="navbar justify-between bg-base-100 container mx-auto">
            <div className="flex flex-1 items-center gap-2">
                <Link to='/'>
                    <img className='w-20' src={logo} alt="Web site logo" />
                </Link>
                <h2 className='text-lg sm:text-xl  md:text-3xl font-bold font-mono'>Kid's <span className='text-green-800'>Super</span> <span className='text-red-700'>Car</span></h2>
            </div>


            <div className="flex-none">


                <div className="dropdown dropdown-end hidden lg:block">
                    <ul tabIndex={0} className="flex gap-5 items-center font-bold ">
                        <li><a>Home</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>All Toys</a></li>
                        {user ? 
                        <>
                            <li><a>My Toys</a></li>
                            <li><a>Add Toys</a></li>
                        </> : ''}
                        <li>
                            {user ?
                                <button className='btn btn-primary w-full' onClick={handleLogOut}>LogOut</button> :
                                <Link to='/login'><button className='btn btn-primary w-full'>Login</button></Link>}
                        </li>
                    </ul>

                </div>


                <div className="dropdown dropdown-end sm:ml-5">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full" data-tooltip-id="my-tooltip"
                            data-tooltip-content={user ? user.displayName : 'Add User'}>
                            <Tooltip className='z-30' id="my-tooltip" ></Tooltip>
                            <img src={user ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/16/16363.png?w=740&t=st=1684413586~exp=1684414186~hmac=099d827d099e8fcd0fd10f202d63209149e7afa823db4512bc04a76d8b9e8761'} alt="" />
                        </div>
                    </label>

                    <ul tabIndex={0} className="menu lg:hidden dropdown-content divide-y mt-3 p-2 shadow bg-base-100 rounded-box w-72 md:w-72 text-lg">
                        <li><h2 className='text-xl font-semibold'>{user?.displayName}</h2></li>
                        <li><a>Home</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>All Toys</a></li>
                        {user ? <>
                            <li className='sm:hidden'><a>My Toys</a></li>
                            <li><a>Add Toys</a></li>
                        </> : ''}
                        <li>
                            {user ? <button className='btn btn-primary w-full' onClick={handleLogOut}>LogOut</button> : <Link to='/login'><button className='btn btn-primary w-full'>Login</button></Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;