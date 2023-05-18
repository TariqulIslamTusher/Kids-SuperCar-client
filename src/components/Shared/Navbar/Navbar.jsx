import React, { useContext } from 'react';
import logo from '../../../assets/toyCarLogo.png'
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
    const {user, signOutUser} = useContext(AuthContext)
    console.log(user);
    const handleLogOut =()=>{
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


                <div className="dropdown dropdown-end hidden sm:block">
                    <label tabIndex={0} className="btn btn-ghost btn-circle" data-tooltip-id="my-toys"
                        data-tooltip-content={'My toys'}>
                        <Tooltip id="my-toys" ></Tooltip>
                        <div className="indicator" tooltip='toy'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>

                </div>


                <div className="dropdown dropdown-end sm:ml-5">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full" data-tooltip-id="my-tooltip"
                            data-tooltip-content={'hey Tariqul'}>
                            <Tooltip id="my-tooltip" ></Tooltip>
                            <img src={user? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/16/16363.png?w=740&t=st=1684413586~exp=1684414186~hmac=099d827d099e8fcd0fd10f202d63209149e7afa823db4512bc04a76d8b9e8761'} alt="" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72 md:w-96 text-xl">
                        <li><h2 className='text-2xl font-semibold'>Md Tariqul Islam</h2></li>
                        <li><a>Home</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>All Toys</a></li>
                        <li className='sm:hidden'><a>My Toys</a></li>
                        <li><a>Add Toys</a></li>
                        <li>
                            {user? <button onClick={handleLogOut}>LogOut</button> : <Link to='/login'><button>Login</button></Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;