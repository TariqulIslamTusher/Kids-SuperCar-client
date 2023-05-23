import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div>
            <div className="carousel min-h-[300px] md:h-[600px] object-cover relative ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide8" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide2" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide1" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide3" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/567445/pexels-photo-567445.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide2" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide4" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/4484785/pexels-photo-4484785.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide3" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide5" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>


                <div id="slide5" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/4487981/pexels-photo-4487981.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide4" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide6" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>


                <div id="slide6" className="carousel-item relative w-full">
                    <img className='object-cover object-center w-full' src="https://images.pexels.com/photos/4488189/pexels-photo-4488189.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div className="absolute flex gap-5 transform bottom-6 right-6">
                        <a href="#slide5" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❮</a>
                        <a href="#slide8" className="btn btn-circle md:btn-lg opacity-75 bg-slate-900 md:text-2xl md:font-bold hover:opacity-100">❯</a>
                    </div>
                </div>


            </div>

                <div className='md:animate-pulse hover:animate-none md:absolute md:right-0 md:top-1/3 p-5 md:p-10 h-min md:hover:w-6/12 md:w-3/12 bg-slate-900 md:bg-opacity-40 md:hover:bg-opacity-80 transition-all duration-500 text-white md:rounded-l-3xl'>
                    <h1 className="text-2xl md:text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Our Provinent service is always ready for your choice in our shop. We are availabe everyday exept sunday in our all outlets </p>
                    <Link to='/error'><button className="btn bg-amber-500 ">Chose your Toys</button></Link>

                </div>

        </div>
    );
};

export default HomeBanner;