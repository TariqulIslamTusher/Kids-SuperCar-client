import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ViewDetails = () => {
    const { singleData } = useContext(AuthContext)
    const { toyName, subCategory, sellerName, sellerEmail, rating, price, photoURL, description, category, availableQty } = singleData
    console.log(singleData);
    return (
        <div className='m-8'>

            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg md:flex-row md:w-9/12 hover:bg-yellow-50 container mx-auto">

                <img className="w-full rounded-t-lg h-96 md:h-auto md:w-5/12 md:rounded-none md:rounded-l-lg md:ml-5" src={photoURL} alt="" />

                <div className="flex flex-col justify-between p-6 leading-normal">
                    <h1 className="mb-3 lg:text-4xl pb-3 font-bold text-gray-900 border-b-4">{toyName}</h1>
                    {/* first border */}
                    <p className="lg:text-2xl mb-3 pb-3 text-gray-700 border-b-4 text-justify">{description}</p>
                    {/* second Border */}
                    <div>
                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Seller Name :</span> {sellerName}</h1>

                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Seller Email :</span>{sellerEmail}</h1>

                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Price :</span>{price}</h1>

                        <div className='flex flex-col md:flex-row justify-between gap-4'>
                            <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Availabe Quantity :</span>{availableQty}</h1>


                            <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Availabe Quantity :</span>{availableQty}</h1>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default ViewDetails;