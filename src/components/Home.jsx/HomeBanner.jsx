import React from 'react';

const HomeBanner = () => {
    return (
        <div>
            <div className="carousel min-h-[300px] md:h-[600px] object-cover relative ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/4138544/pexels-photo-4138544.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide6" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide2" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/163546/radpanzer-model-military-vehicle-163546.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide1" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide3" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/13047784/pexels-photo-13047784.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide2" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide4" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/1648419/pexels-photo-1648419.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide3" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide5" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>


                <div id="slide5" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/5670303/pexels-photo-5670303.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide4" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide6" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>


                <div id="slide6" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/6976455/pexels-photo-6976455.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide5" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide1" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>


            </div>

                <div className='md:animate-pulse hover:animate-none md:absolute md:right-0 md:top-1/3 p-5 md:p-10 h-min md:hover:w-8/12 md:w-4/12 bg-slate-900 md:bg-opacity-40 md:hover:bg-opacity-80 transition-all duration-500 text-white md:rounded-l-3xl'>
                    <h1 className="text-2xl md:text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-amber-600 ">Get Started</button>

                </div>

        </div>
    );
};

export default HomeBanner;