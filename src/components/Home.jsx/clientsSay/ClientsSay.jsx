import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ClientSay = () => {
    return (
        <div className='container mx-auto '>
            <div className="caption text-center pt-6 md:pt-10">

                <h2 className="md:text-5xl text-2xl heading-text py-5">
                    What's Our Clients Says
                </h2>
                <p className="text-slate-600 px-4 text-lg md:w-6/12 mx-auto">Since 1998 we had an eligant choise for your concentrations . We enjoy to provides you the best services in the era. Our team member and shopkeepers are highly educated and well meners people who will serve you 18 hours in every day without sunday</p>
            </div>


            <div className="carousel  object-cover py-6 my-9 relative bg-white rounded-full shadow-xl">
                <div id="curosel1" className="carousel-item relative w-full">
                    <div className="py-7 flex flex-col-reverse md:flex-row gap-6 md:gap-12 md:w-9/12 mx-auto md:px-16 items-center justify-between">
                        <div className='w-10/12 mx-auto flex flex-col-reverse md:flex-col'>
                            <h2 className="text-sm md:text-lg text-slate-800">Assalamualaikum, And very good morning. I am Md Tariqul Islam enough satisfy on the service of this organisations and alhamdulliah i have also brought the client card of this organisation. you will be happy to know , if you buy something from here they will reduced their money to orphabnage</h2>
                            <div>
                                <p className="py-5 text-red-700 font-bold">Tariqul Islam</p>
                                <p className="text-muted">Happy customar</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://templates.envytheme.com/finix/default/assets/img/clients/man.png" alt="" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 top-44 md:top-1/2">
                        <a href="#curosel5" className="btn btn-circle">❮</a>
                        <a href="#curosel2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="curosel2" className="carousel-item relative w-full">
                    <div className="py-7 flex flex-col-reverse md:flex-row gap md:gap-12-6 md:w-9/12 mx-auto md:px-16 items-center justify-between">
                        <div className='w-10/12 mx-auto  flex flex-col-reverse md:flex-col'>
                            <h2 className="text-lg text-slate-800">Assalamualaikum, And very good morning. I am Md Tariqul Islam enough satisfy on the service of this organisations and alhamdulliah i have also brought the client card of this organisation. you will be happy to know , if you buy something from here they will reduced their money to orphabnage</h2>
                            <div>
                                <p className="py-5 text-red-700 font-bold">Joya Akhtar</p>
                                <p className="text-muted">Happy customar</p>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLggDriPfK7aHsBMEeG0jNIXREbTrSEjhhw&usqp=CAU" alt="" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 top-44 md:top-1/2">
                        <a href="#curosel1" className="btn btn-circle">❮</a>
                        <a href="#curosel3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="curosel3" className="carousel-item relative w-full">
                    <div className="py-7 flex flex-col-reverse md:flex-row gap md:gap-12-6 md:w-9/12 mx-auto md:px-16 items-center justify-between">
                        <div className='w-10/12 mx-auto  flex flex-col-reverse md:flex-col'>
                            <h2 className="text-lg text-slate-800">Assalamualaikum, And very good morning. I am Md Tariqul Islam enough satisfy on the service of this organisations and alhamdulliah i have also brought the client card of this organisation. you will be happy to know , if you buy something from here they will reduced their money to orphabnage</h2>
                            <div>
                                <p className="py-5 text-red-700 font-bold">Jannat Sign</p>
                                <p className="text-muted">Happy customar</p>
                            </div>
                        </div>
                        <div className='w-6/12'>
                            <img className='rounded-full' src="https://plus.unsplash.com/premium_photo-1661668451715-0edac830bcd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZSUyMHdvbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 top-44 md:top-1/2">
                        <a href="#curosel2" className="btn btn-circle">❮</a>
                        <a href="#curosel4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="curosel4" className="carousel-item relative w-full">
                    <div className="py-7 flex flex-col-reverse md:flex-row gap md:gap-12-6 md:w-9/12 mx-auto md:px-16 items-center justify-between">
                        <div className='w-10/12 mx-auto flex flex-col-reverse md:flex-col'>
                            <h2 className="text-lg text-slate-800">Assalamualaikum, And very good morning. I am Md Tariqul Islam enough satisfy on the service of this organisations and alhamdulliah i have also brought the client card of this organisation. you will be happy to know , if you buy something from here they will reduced their money to orphabnage</h2>
                            <div>
                                <p className="py-5 text-red-700 font-bold">Aminul Haque</p>
                                <p className="text-muted">Happy customar</p>
                            </div>
                        </div>
                        <div className='w-6/12'>
                            <img className='rounded-full' src="https://i.scdn.co/image/ab6761610000e5eb238d9f19f17c35cad9ce7540" alt="" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 top-44 md:top-1/2">
                        <a href="#curosel3" className="btn btn-circle">❮</a>
                        <a href="#curosel5" className="btn btn-circle">❯</a>
                    </div>
                </div>


            </div>




            {/* <div className="py-7 flex flex-col-reverse md:flex-row md:gap-12 gap-6 md:w-9/12 mx-auto md:px-16 items-center justify-between">
                <div>
                    <h2 className="text-lg text-slate-800">Assalamualaikum, And very good morning. I am Md Tariqul Islam enough satisfy on the service of this organisations and alhamdulliah i have also brought the client card of this organisation. you will be happy to know , if you buy something from here they will reduced their money to orphabnage</h2>
                    <p className="py-5 text-red-700 font-bold">Tariqul Islam</p>
                    <p className="text-muted">Happy customar</p>
                </div>
                <div>
                    <img src="https://templates.envytheme.com/finix/default/assets/img/clients/man.png" alt="" />
                </div>
          className='hidden md:block'   </div> */}
        </div>
    );
};

export default ClientSay;