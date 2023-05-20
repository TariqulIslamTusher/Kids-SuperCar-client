import React  from 'react';
import Gallery from './Gallery';


const HomeGalary = () => {

    
    return (
        <div className='text-center'>
            <div>
                <h1 className='heading-text text-3xl md:text-6xl '>OUR CLIENTS GALLARY</h1>
                <div className='border-4 w-9/12 mx-auto'>
                    <Gallery></Gallery>
                </div>
            </div>
            
        </div>
    );
};

export default HomeGalary;