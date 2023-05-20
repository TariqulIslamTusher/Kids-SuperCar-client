import React from 'react';

const Gallery = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 ]'>
            {/* 1st 3 photo */}
            <div className='hover:scale-110 transition-all duration-300 border-2 border-slate-500 rounded-lg shadow-lg md:row-span-2'>
                <img className='w-full md:h-full object-cover object-center' src="https://images.pexels.com/photos/4491686/pexels-photo-4491686.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='hover:scale-110 transition-all duration-300 border-2 md:col-span-3 border-slate-500 rounded-lg shadow-lg'>
                <img className='w-full md:h-52 object-cover object-bottom' src="https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='hover:scale-110 transition-all duration-300 border-2 border-slate-500 rounded-lg shadow-lg'>
                <img className='w-full md:h-52 object-cover object-center' src="https://images.pexels.com/photos/6139833/pexels-photo-6139833.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>

{/* 2nd 3 photo */}
            <div className='hover:scale-110 transition-all duration-300 border-2 border-slate-500 rounded-lg shadow-lg'>
                <img className='w-full md:h-52 object-cover object-center' src="https://images.pexels.com/photos/6138620/pexels-photo-6138620.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='hover:scale-110 transition-all duration-300 border-2 border-slate-500 rounded-lg shadow-lg md:row-span-2'>
                <img className='w-full md:h-full object-cover object-center' src="https://images.pexels.com/photos/4491548/pexels-photo-4491548.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='hover:scale-110 transition-all duration-300 border-2 border-slate-500 rounded-lg shadow-lg'>
                <img className='w-full md:h-52 object-cover object-center' src="https://images.pexels.com/photos/9980986/pexels-photo-9980986.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>

{/* 3rd 3 photo */}
            <div className='hover:scale-110 transition-all duration-300 border-2 border-slate-500 rounded-lg shadow-lg md:col-span-2'>
                <img className='w-full md:h-52 object-cover object-bottom' src="https://images.pexels.com/photos/10212593/pexels-photo-10212593.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            {/* <div hover:scale-110 transition-all duration-300 className='border-2 border-slate-500 rounded-lg shadow-lg'>
                <img className='w-full md:h-52 object-cover object-center' src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='hover:scale-110 transition-all duration-300 border-2 border-slate-500 rounded-lg shadow-lg'>
                <img className='w-full md:h-52 object-cover object-center' src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div> */}

{/* 4th 3 photo */}
            {/* <div hover:scale-110 transition-all duration-300 className='border-2 border-slate-500 rounded-lg shadow-lg'>
                <img className='w-full md:h-52 object-cover object-center' src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='hover:scale-110 transition-all duration-300 border-2 border-slate-500 rounded-lg shadow-lg'>
                <img className='w-full md:h-52 object-cover object-center' src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='hover:scale-110 transition-all duration-300 border-2 border-slate-500 rounded-lg shadow-lg'>
                <img className='w-full md:h-52 object-cover object-center' src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div> */}

        </div>
    );
};

export default Gallery;