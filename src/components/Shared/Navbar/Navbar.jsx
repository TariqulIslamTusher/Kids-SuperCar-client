import React from 'react';
import logo from '../../../assets/toyCarLogo.png'
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Navbar = () => {
    return (
        <div className="navbar justify-between bg-base-100 container mx-auto">
            <div className="flex flex-1 items-center gap-2">
                <Link to='/'><img className='w-20' src={logo} alt="Web site logo" /></Link>
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
                            <img src="data:image/png;base64,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" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72 md:w-96 text-xl">
                        <li><h2 className='text-2xl font-semibold'>Md Tariqul Islam</h2></li>
                        <li><a>Home</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>All Toys</a></li>
                        <li className='sm:hidden'><a>My Toys</a></li>
                        <li><a>Add Toys</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;