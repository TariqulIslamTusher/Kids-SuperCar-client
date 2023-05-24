import React, { useContext, useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FaRegEdit, FaRegStar, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import useTitle from '../../UseHooks/UseTitle';
import AuthProvider, { AuthContext } from '../../AuthProvider/AuthProvider';


const OwnViewDetails = () => {
    useTitle('View My Added Products')
    const { id } = useParams()
    const [singleData, setSingleData] = useState('')
    // const {singleData, setSingleData} = AuthProvider(AuthContext)
    const [change , setChange] =useState(false)

    useEffect(() => {
        fetch(`https://toy-market-place-server-eight.vercel.app/products/${id}`)
            .then(res => res.json())
            .then(data => {
               // console.log(data);
                setSingleData(data)
                setChange(true)
            })
    }, [change])

   // console.log(singleData, id);
    const { _id, toyName, subCategory, sellerName, sellerEmail, rating, price, photoURL, description, category, availableQty } = singleData


    // updating the data 
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const price = form.price.value
        const qty = form.qty.value
        const description = form.description.value

        const updateData = {
            price, qty, description, _id
        }

        fetch(`https://toy-market-place-server-eight.vercel.app/products/${_id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
               // console.log(data);
                setChange(false)
                Swal.fire({
                    title: 'Success!',
                    text: 'Items Updated',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
    }


    return (
        <div className='m-8'>

            <div className="flex flex-col items-center hover:bg-white border border-gray-400 rounded-lg shadow-lg md:flex-row md:w-10/12 bg-yellow-50 container mx-auto">

                <img className="w-full md:w-6/12 rounded-t-lg object-cover md:rounded-none md:rounded-l-lg md:ml-5" src={photoURL} alt="" />

                <div className="flex flex-col justify-between p-6 leading-normal w-6/12 relative">
                    <h1 className="mb-3 lg:text-4xl pb-3 font-bold text-gray-900 border-b-4">{toyName}</h1>


                    {/* Open Modal button for edit data  */}
                    <label htmlFor="my-modal-5" className="absolute right-2 top-2" data-tooltip-id="my-tooltip" data-tooltip-content="Update Data">
                        <FaRegEdit id="my-tooltip" className='text-2xl text-blue-800'></FaRegEdit>
                    </label>
                    {/* Put this part before </body> tag */}


                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-8/12 max-w-5xl">
                            <label className="modal-action btn btn-sm btn-outline w-fit ml-auto" htmlFor="my-modal-5" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </label>



                            <div className='text-center'>
                                <h2 className='text-3xl heading-text'>{toyName}</h2>

                            </div>

                            {/*  updating form  */}
                            <form onSubmit={handleUpdate}>
                                <div className="mb-4 w-full">
                                    <label className="block mb-2 text-lg font-medium" htmlFor="price">
                                        Price: {price}
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        type="number"
                                        id="price"
                                        name="price"
                                        placeholder='update your price'
                                        required

                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block mb-2 text-lg font-medium" htmlFor="qty">
                                        Availabe Quantity: {availableQty}
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        type="number"
                                        id="qty"
                                        name="qty"
                                        placeholder='update your Quantity'
                                        required
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block mb-2 text-lg font-medium" htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        type="text"
                                        id="description"
                                        name="description"
                                        placeholder='update Description'
                                        required
                                    />
                                </div>
                                <button className="btn btn-success">Update</button>
                            </form>

                        </div>
                    </div>


                    {
                        description ? <>
                            <p className="lg:text-2xl mb-3 pb-3 text-gray-700 border-b-4 text-justify">{description}</p>
                        </> : ''
                    }
                    {/* second Border */}
                    <div>
                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Seller Name :</span> {sellerName}</h1>

                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Seller Email :</span>{sellerEmail}</h1>

                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Category :</span>{category}</h1>

                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Price :</span>{price}</h1>


                        <h1 className='text-xl text-black leading-8'><span className='font-bold mr-3'>Availabe Quantity :</span>{availableQty}</h1>

                        <div className='flex flex-col md:flex-row justify-between items-center mt-2 border-t-2 pt-2'>
                            <div className='flex items-center justify-between flex-1'>
                                <p className='font-bold text-xl'>Ratings: {rating}</p>
                                <Rating
                                    className='text-2xl text-yellow-500 ml-auto'
                                    placeholderRating={rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                ></Rating>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OwnViewDetails;