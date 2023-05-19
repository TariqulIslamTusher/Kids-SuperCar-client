import React from 'react';

const TableRow = ({ product, i }) => {
    const {  toyName, sellerName, price, subCategory, availableQty, photoURL } = product



    return (
        <>
            <tr className='hover'>
                
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
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>

            </tr>
        </>
    );
};

export default TableRow;