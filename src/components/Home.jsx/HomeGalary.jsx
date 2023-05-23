import React  from 'react';
import Gallery from './Gallery';


const HomeGalary = () => {

    
    return (
        <div className='text-center'>
            <div>
                <h1 className='heading-text text-3xl md:text-5xl pt-5'>OUR CLIENTS GALLARY</h1>
                <p className='md:w-6/12 p-5 text-slate-700 mx-auto '>From the cordial love of heart , Our clients are sending their memory of love and here we create a gallery for them</p>
                <div className='border-4 w-9/12 mx-auto'>
                    <Gallery></Gallery>
                </div>
            </div>
            
        </div>
    );
};

export default HomeGalary;