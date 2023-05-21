import React from 'react';
import ToysTable from './ToysTable';
import useTitle from '../../UseHooks/UseTitle';


const AllToys = () => {
useTitle("All Toys")

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.targer
        console.log(form);
    }

    return (
        <div className="bg-slate-200 py-6">
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row gap-5 justify-between items-center py-7'>
                    <form onSubmit={handleSubmit} className='flex items-center'>
                        <input placeholder='Search by name' className="w-full px-4 py-3 border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" />
                        <button className='btn btn-outline rounded-l-none border-gray-400 '>Search</button>
                    </form>
                    <div>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text"
                            id="category"
                            name="category"
                            required
                        >
                            <option value="">Sort By</option>
                            <option value="Bus">Low Price</option>
                            <option value="Car">High Price</option>

                        </select>
                    </div>
                </div>
                <ToysTable></ToysTable>
            </div>
        </div>
    );
};

export default AllToys;