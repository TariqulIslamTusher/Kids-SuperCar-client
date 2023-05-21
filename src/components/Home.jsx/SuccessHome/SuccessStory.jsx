import React from 'react';

const SuccessStory = () => {
    return (
        <div className='container mx-auto'>
            <div className="caption text-center py-6">
               
                <h2 className="text-2xl md:text-5xl heading-text py-5">
                    OUR SUCCESS STORY 
                </h2>
                <p className="text-muted text-sm px-3  md:w-6/12 mx-auto ">Since 1998 we had an eligant choise for your concentrations . We enjoy to provides you the best services in the era. Our team member and shopkeepers are highly educated and well meners people who will serve you 18 hours in every day without sunday</p>
            </div>
            <div className="py-7 px-3 grid grid-col-1 md:grid-cols-3 gap-8 md:px-16">
                <div className='flex flex-col gap-5 justify-between border border-double shadow-xl rounded-xl drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>

                    <img className='rounded-t-xl objext-cover max-h-64 w-full' src="https://templates.envytheme.com/finix/default/assets/img/team/image3.jpg" alt="" />
                    <div className='p-6 flex flex-col gap-3'>
                        <p className="text-red-700 text-sm">On 22 July 99</p>
                        <h3 className="text-xl font-bold font-mono">Our First Aniversary of Organisations </h3>
                        <button className="btn btn-outline">Read More</button>
                    </div>
                </div>
                <div className='flex flex-col gap-5 justify-between border border-double shadow-xl rounded-xl drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>

                    <img className='rounded-t-xl objext-cover max-h-64 w-full' src="https://templates.envytheme.com/finix/default/assets/img/team/image3.jpg" alt="" />
                    <div className='p-6 flex flex-col gap-3'>
                        <p className="text-red-700 text-sm">On 22 July 99</p>
                        <h3 className="text-xl font-bold font-mono">Our First Aniversary of Organisations </h3>
                        <button className="btn btn-outline">Read More</button>
                    </div>
                </div>
                <div className='flex flex-col gap-5 justify-between border border-double shadow-xl rounded-xl drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>

                    <img className='rounded-t-xl objext-cover max-h-64 w-full' src="https://templates.envytheme.com/finix/default/assets/img/team/image3.jpg" alt="" />
                    <div className='p-6 flex flex-col gap-3'>
                        <p className="text-red-700 text-sm">On 22 July 99</p>
                        <h3 className="text-xl font-bold font-mono">Our First Aniversary of Organisations </h3>
                        <button className="btn btn-outline">Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SuccessStory;