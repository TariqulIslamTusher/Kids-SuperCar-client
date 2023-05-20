import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const TableRow = ({ product, i }) => {

    const { _id, toyName, sellerName, price, subCategory, availableQty, photoURL } = product

    return (
        <tr className='hover'>

            <td>
                {i + 1}
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
            <td>${price}</td>
            <td>{availableQty}</td>
            <th>
                <Link to={`/viewDetails/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
            </th>

        </tr>
    )
}

export default TableRow;