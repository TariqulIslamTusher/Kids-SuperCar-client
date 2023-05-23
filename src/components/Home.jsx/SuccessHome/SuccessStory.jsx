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

                    <img className='rounded-t-xl objext-cover max-h-64 w-full' src="data:image/jpeg;base64,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" alt="" />
                    <div className='p-6 flex flex-col gap-3 bg-gradient-to-br from-yellow-100 to-slate-200'>
                        <p className="text-red-700 text-sm">On 22 July 99</p>
                        <h3 className="text-xl font-bold font-mono">Our First Order Successfully Completed</h3>
                        <button className="btn btn-outline">Read More</button>
                    </div>
                </div>
                <div className='flex flex-col gap-5 justify-between border border-double shadow-xl rounded-xl drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>

                    <img className='rounded-t-xl objext-cover max-h-64 w-full' src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className='p-6 flex flex-col gap-3 bg-gradient-to-br from-yellow-100 to-slate-200'>
                        <p className="text-red-700 text-sm">On 22 Aug 2001</p>
                        <h3 className="text-xl font-bold font-mono">Our First Tour Out of Residence</h3>
                        <button className="btn btn-outline">Read More</button>
                    </div>
                </div>
                <div className='flex flex-col gap-5 justify-between border border-double shadow-xl rounded-xl drop-shadow-2xl bg-white hover:-translate-y-8 transition-all duration-300 relative'>

                    <img className='rounded-t-xl objext-cover max-h-64 w-full' src="https://cleancomedians.com/wp-content/uploads/2021/09/Why-celebrating-success-is-important-for-team-building.jpg" alt="" />
                    <div className='p-6 flex flex-col gap-3 bg-gradient-to-br from-yellow-100 to-slate-200'>
                        <p className="text-red-700 text-sm">On 22 July 2009</p>
                        <h3 className="text-xl font-bold font-mono">10 Years of Organisations we Serving </h3>
                        <button className="btn btn-outline">Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SuccessStory;