import React from 'react';

const HomeBanner = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="carousel w-full md:w-2/3">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1136542784/photo/many-colored-toy-cars-on-multicolored-background.jpg?s=612x612&w=0&k=20&c=QAKHJEV0HmmzkAToEoAX4IehTUxdWKCbvS7RyoL7zx0=" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1276490353/photo/blue-car-hits-to-yellow-car-from-behind.jpg?s=612x612&w=0&k=20&c=gG8ymsiyNmCSNmEPV0vFoUH0Umh7xS6CRCkGYfZ7z38=" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1441914534/photo/childs-hands-playing-with-toy-cars.jpg?s=612x612&w=0&k=20&c=bOPShzuULYCo1MyS1UeYlzdSRhY1XY5rYth7vCRXYOU=" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1435857673/photo/little-boy-playing-with-toy-cars-indoors.jpg?s=612x612&w=0&k=20&c=yhpCjeRqG0ebpFUpYVu-l40AadQbsAgZiNfu6tkluXA=" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/3'>


                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>

            </div>
        </div>
    );
};

export default HomeBanner;