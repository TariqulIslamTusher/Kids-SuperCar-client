import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyTableRows = ({ product, i, handleDelete }) => {
    const { _id, toyName, sellerName, price, subCategory, availableQty, photoURL } = product



    return (
        <>
            <tr className='hover'>
                <td>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </td>
                <td>
                    {i+1}
                </td>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar" />
                        </div>
                    </div>
                </td>
                <td>
                    {toyName}
                </td>
                <td>{sellerName}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{availableQty}</td>
                <th>
                    <Link to='/viewDetails'><button className="btn btn-ghost btn-xs">details</button></Link>
                </th>

            </tr>
        </>
    );
};

export default MyTableRows;