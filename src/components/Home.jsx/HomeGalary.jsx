import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import SimpleImageSlider from "react-simple-image-slider";
import PhotoCard from './PhotoCard';


const HomeGalary = () => {
    const [imageNum, setImageNum] = useState(1);
    const sliderImages = [
        {
            url: "https://media.istockphoto.com/id/1435857673/photo/little-boy-playing-with-toy-cars-indoors.jpg?s=612x612&w=0&k=20&c=yhpCjeRqG0ebpFUpYVu-l40AadQbsAgZiNfu6tkluXA=",
        },
        {
            url: "https://media.istockphoto.com/id/1435857673/photo/little-boy-playing-with-toy-cars-indoors.jpg?s=612x612&w=0&k=20&c=yhpCjeRqG0ebpFUpYVu-l40AadQbsAgZiNfu6tkluXA=",
        },
        {
            url: "https://media.istockphoto.com/id/1435857673/photo/little-boy-playing-with-toy-cars-indoors.jpg?s=612x612&w=0&k=20&c=yhpCjeRqG0ebpFUpYVu-l40AadQbsAgZiNfu6tkluXA=",
        }
    ]



    return (
        <div>
            <div>
                <h1 className='heading-text'>OUR PHOTO GALLARY</h1>
            </div>
            <Marquee className='gap-6' pauseOnHover='true'>
                <PhotoCard>https://media.istockphoto.com/id/1435857673/photo/little-boy-playing-with-toy-cars-indoors.jpg?s=612x612&w=0&k=20&c=yhpCjeRqG0ebpFUpYVu-l40AadQbsAgZiNfu6tkluXA=</PhotoCard>
            </Marquee>

            {/* <SimpleImageSlider
                width={1100}
                height={470}
                images={sliderImages}
                showNavs={true}
                showBullets={true}
                autoPlay={true}
                onStartSlide={(index, length) => {
                    setImageNum(index);
                }}
                autoPlayDelay={3}
            /> */}
        </div>
    );
};

export default HomeGalary;