import React from 'react';

const HomeBanner = () => {
    return (
        <div>
            <div className="carousel h-[600px] object-cover relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1276490353/photo/blue-car-hits-to-yellow-car-from-behind.jpg?s=612x612&w=0&k=20&c=gG8ymsiyNmCSNmEPV0vFoUH0Umh7xS6CRCkGYfZ7z38=" className="w-full" />
                    <div className="absolute flex gap-5 transform bottom-10 right-10">
                        <a href="#slide4" className="btn btn-circle btn-lg opacity-75 text-2xl font-bold hover:opacity-100">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-lg opacity-75 text-2xl font-bold hover:opacity-100">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1136542784/photo/many-colored-toy-cars-on-multicolored-background.jpg?s=612x612&w=0&k=20&c=QAKHJEV0HmmzkAToEoAX4IehTUxdWKCbvS7RyoL7zx0=" className="w-full" />
                    <div className="absolute flex gap-5 transform bottom-10 right-10">
                        <a href="#slide1" className="btn btn-circle btn-lg opacity-75 text-2xl font-bold hover:opacity-100">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-lg opacity-75 text-2xl font-bold hover:opacity-100">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1441914534/photo/childs-hands-playing-with-toy-cars.jpg?s=612x612&w=0&k=20&c=bOPShzuULYCo1MyS1UeYlzdSRhY1XY5rYth7vCRXYOU=" className="w-full" />
                    <div className="absolute flex gap-5 transform bottom-10 right-10">
                        <a href="#slide2" className="btn btn-circle btn-lg opacity-75 text-2xl font-bold hover:opacity-100">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-lg opacity-75 text-2xl font-bold hover:opacity-100">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1435857673/photo/little-boy-playing-with-toy-cars-indoors.jpg?s=612x612&w=0&k=20&c=yhpCjeRqG0ebpFUpYVu-l40AadQbsAgZiNfu6tkluXA=" className="w-full" />
                    <div className="absolute flex gap-5 transform bottom-10 right-10">
                        <a href="#slide3" className="btn btn-circle btn-lg opacity-75 text-2xl font-bold hover:opacity-100">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-lg opacity-75 text-2xl font-bold hover:opacity-100">❯</a>
                    </div>
                </div>
            </div>
            <div className='absolute right-0 -translate-y-16 top-1/2 w-6/12 bg-slate-900 bg-opacity-40 hover:bg-opacity-80 transition-all duration-500 hover:right-12 p-10 text-white rounded-l-2xl'>
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>

            </div>
        </div>
    );
};

export default HomeBanner;