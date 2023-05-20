import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const OwnViewDetails = () => {

    const singleData = useLoaderData()

    const { toyName, subCategory, sellerName, sellerEmail, rating, price, photoURL, description, category, availableQty } = singleData

    return (
        <div className='m-8'>

            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg md:flex-row md:w-9/12 hover:bg-yellow-50 container mx-auto">

                <img className="w-full md:w-6/12 h-full rounded-t-lg object-cover md:rounded-none md:rounded-l-lg " src={photoURL} alt="" />

                <div className="flex flex-col justify-between p-6 leading-normal">
                    <h1 className="mb-3 lg:text-4xl pb-3 font-bold text-gray-900 border-b-4">{toyName}</h1>

                    {/* first border */}
                    <p className="lg:text-2xl mb-3 pb-3 text-gray-700 border-b-4 text-justify">{description}</p>
                    {/* second Border */}
                    <div>
                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Seller Name :</span> {sellerName}</h1>

                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Seller Email :</span>{sellerEmail}</h1>

                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Price :</span>{price}</h1>


                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Availabe Quantity :</span>{availableQty}</h1>

                        <div className='flex justify-between'>
                            
                            <button>Update</button>
                        </div>




                    </div>

                </div>

            </div>
        </div>
    );
};

export default OwnViewDetails;