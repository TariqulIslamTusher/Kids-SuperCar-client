import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const OurLet = () => {
    return (
        <div className='container mx-auto'>
            <div className="caption text-center py-6">
                
                <h2 className="md:text-5xl text-2xl heading-text py-5">
                    OUR DIRECTOR'S PANEL
                </h2>
                <p className="text-muted text-lg w-11/12 md:w-6/12 mx-auto">Since 1998 we had an eligant choise for your concentrations . We enjoy to provides you the best services in the era. Our team member and shopkeepers are highly educated and well meners people who will serve you 18 hours in every day without sunday</p>
            </div>
            <div  className="py-7 grid grid-col-1 md:grid-cols-4 gap-8 md:px-16">
                <div data-aos-duration="500" data-aos="slide-left" className='flex flex-col gap-5 bg-gradient-to-br from-yellow-200 to-slate-50 justify-between border border-double shadow-xl rounded-xl p-2 md:p-3 drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>
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


                <div  data-aos="slide-left" className='flex flex-col gap-5 bg-gradient-to-br from-yellow-200 to-slate-50 justify-between border border-double shadow-xl rounded-xl p-2 md:p-3 drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>
                    <div className='hidden text-2xl hover:flex z-30 gap-4 absolute bottom-1/3 left-1/2'>
                        <FaFacebook className='bg-opacity-75 bg-white rounded-full'></FaFacebook>
                        <FaTwitter className='bg-opacity-75 bg-white rounded-full'></FaTwitter>
                        <FaInstagram className='bg-opacity-75 bg-white rounded-full'></FaInstagram>
                    </div>
                    <img className='rounded-t-xl objext-cover' src="https://templates.envytheme.com/finix/default/assets/img/team/image2.jpg" alt="" />
                    <div className='p-4'>
                        <h3 className="text-xl text-red-700 font-bold font-mono">John Doe</h3>
                        <p className="text-muted text-lg">Product director</p>
                    </div>
                </div>



                <div  data-aos="slide-right" className='flex flex-col gap-5 bg-gradient-to-br from-yellow-200 to-slate-50 justify-between border border-double shadow-xl rounded-xl p-2 md:p-3 drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>
                    <div className='hidden text-2xl hover:flex z-30 gap-4 absolute bottom-1/3 left-1/2'>
                        <FaFacebook className='bg-opacity-75 bg-white rounded-full'></FaFacebook>
                        <FaTwitter className='bg-opacity-75 bg-white rounded-full'></FaTwitter>
                        <FaInstagram className='bg-opacity-75 bg-white rounded-full'></FaInstagram>
                    </div>
                    <img className='rounded-t-xl objext-cover' src="https://templates.envytheme.com/finix/default/assets/img/team/image1.jpg" alt="" />
                    <div className='p-4'>
                        <h3 className="text-xl text-red-700 font-bold font-mono">Robert Henry</h3>
                        <p className="text-muted text-lg">Deputy Director</p>
                    </div>
                </div>


                <div  data-aos-duration="500" data-aos="slide-right" className='flex flex-col gap-5 bg-gradient-to-br from-yellow-200 to-slate-50 justify-between border border-double shadow-xl rounded-xl p-2 md:p-3 drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>
                    <div className='hidden text-2xl hover:flex z-30 gap-4 absolute bottom-1/3 left-1/2'>
                        <FaFacebook className='bg-opacity-75 bg-white rounded-full'></FaFacebook>
                        <FaTwitter className='bg-opacity-75 bg-white rounded-full'></FaTwitter>
                        <FaInstagram className='bg-opacity-75 bg-white rounded-full'></FaInstagram>
                    </div>
                    <img className='rounded-t-xl objext-cover' src="https://templates.envytheme.com/finix/default/assets/img/team/image4.jpg" alt="" />
                    <div className='p-4'>
                        <h3 className="text-xl text-red-700 font-bold font-mono">Micall Joarge</h3>
                        <p className="text-muted text-lg">Marketing Manager</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurLet;