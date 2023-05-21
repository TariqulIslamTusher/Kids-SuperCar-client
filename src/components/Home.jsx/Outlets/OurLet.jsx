import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const OurLet = () => {
    return (
        <div className='container mx-auto'>
            <div className="caption text-center py-6">
                <p className="text-sm text-red-700">
                    We have total 4 outlets
                </p>
                <h2 className="md:text-4xl heading-text py-5">
                    OUR OUTLES & TEAM MEMBERS
                </h2>
                <p className="text-muted text-lg w-11/12 md:w-6/12 mx-auto">Since 1998 we had an eligant choise for your concentrations . We enjoy to provides you the best services in the era. Our team member and shopkeepers are highly educated and well meners people who will serve you 18 hours in every day without sunday</p>
            </div>
            <div className="py-7 grid grid-col-1 md:grid-cols-4 gap-8 md:px-16">
                <div className='flex flex-col gap-5 justify-between border border-double shadow-xl rounded-xl p-2 md:p-3 drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>
                    <div className='hidden text-2xl hover:flex z-30 gap-4 absolute bottom-1/3 left-1/2'>
                        <FaFacebook className='bg-opacity-75 bg-white rounded-full'></FaFacebook>
                        <FaTwitter className='bg-opacity-75 bg-white rounded-full'></FaTwitter>
                        <FaInstagram className='bg-opacity-75 bg-white rounded-full'></FaInstagram>
                    </div>
                    <img className='rounded-t-xl objext-cover' src="https://templates.envytheme.com/finix/default/assets/img/team/image3.jpg" alt="" />
                    <div className='p-4'>
                        <h3 className="text-xl text-red-700 font-bold font-mono">Micall Joarge</h3>
                        <p className="text-muted text-lg">Managing director</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5 justify-between border border-double shadow-xl rounded-xl p-2 md:p-3 drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>
                    <div className='hidden text-2xl hover:flex z-30 gap-4 absolute bottom-1/3 left-1/2'>
                        <FaFacebook className='bg-opacity-75 bg-white rounded-full'></FaFacebook>
                        <FaTwitter className='bg-opacity-75 bg-white rounded-full'></FaTwitter>
                        <FaInstagram className='bg-opacity-75 bg-white rounded-full'></FaInstagram>
                    </div>
                    <img className='rounded-t-xl objext-cover' src="https://templates.envytheme.com/finix/default/assets/img/team/image3.jpg" alt="" />
                    <div className='p-4'>
                        <h3 className="text-xl text-red-700 font-bold font-mono">Micall Joarge</h3>
                        <p className="text-muted text-lg">Managing director</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5 justify-between border border-double shadow-xl rounded-xl p-2 md:p-3 drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>
                    <div className='hidden text-2xl hover:flex z-30 gap-4 absolute bottom-1/3 left-1/2'>
                        <FaFacebook className='bg-opacity-75 bg-white rounded-full'></FaFacebook>
                        <FaTwitter className='bg-opacity-75 bg-white rounded-full'></FaTwitter>
                        <FaInstagram className='bg-opacity-75 bg-white rounded-full'></FaInstagram>
                    </div>
                    <img className='rounded-t-xl objext-cover' src="https://templates.envytheme.com/finix/default/assets/img/team/image3.jpg" alt="" />
                    <div className='p-4'>
                        <h3 className="text-xl text-red-700 font-bold font-mono">Micall Joarge</h3>
                        <p className="text-muted text-lg">Managing director</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5 justify-between border border-double shadow-xl rounded-xl p-2 md:p-3 drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>
                    <div className='hidden text-2xl hover:flex z-30 gap-4 absolute bottom-1/3 left-1/2'>
                        <FaFacebook className='bg-opacity-75 bg-white rounded-full'></FaFacebook>
                        <FaTwitter className='bg-opacity-75 bg-white rounded-full'></FaTwitter>
                        <FaInstagram className='bg-opacity-75 bg-white rounded-full'></FaInstagram>
                    </div>
                    <img className='rounded-t-xl objext-cover' src="https://templates.envytheme.com/finix/default/assets/img/team/image3.jpg" alt="" />
                    <div className='p-4'>
                        <h3 className="text-xl text-red-700 font-bold font-mono">Micall Joarge</h3>
                        <p className="text-muted text-lg">Managing director</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurLet;