import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Category = ({ data }) => {
    const { category, toyName, sellerName, price, rating, availableQty, photoURL, description } = data
    return (
        <div>
            <div className="card items-stretch bg-base-100 shadow-xl rounded-xl hover:scale-105 transition-all duration-300">
                <figure><img className='h-72 object-cover object-center' src={photoURL} alt="ProductPhoto" /></figure>


                <div className="card-body bg-gradient-to-br from-amber-100 to-slate-50">
                    <h2 className="card-title font-bold border-b-2">
                        {toyName}
                    </h2>
                    <div className='text-left'>


                        <p className="text-lg divide-y-2">Seller: {sellerName}</p>
                        <p className="text-lg divide-y-2">Category :{category}</p>

                        <p>Price : {price}</p>
                        <p>Quantity : {availableQty}</p>


                        <p className="text-lg border-y-2">{description}</p>
                    </div>
                    <div className='flex flex-col md:flex-row text-center items-center md:justify-between flex-1'>
                        <p className='font-semibold text-left text-xl'>Ratings: {rating}</p>
                        
                        <Rating
                            className='text-2xl text-yellow-500 md:ml-auto'
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
    );
};

export default Category;