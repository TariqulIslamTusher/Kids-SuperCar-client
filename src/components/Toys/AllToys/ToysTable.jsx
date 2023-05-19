import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import Swal from 'sweetalert2';

const ToysTable = () => {
    const [products, setProducts] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])


    if (!products) {
        return (
            <div className='text-center h-[300px]'>

                <div className="radial-progress animate-spin " style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>
                </div>
            </div>

        )
    }

    return (
        <div className="overflow-x-auto w-full shadow-xl">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Ser</th>
                        <th>Photo</th>
                        <th>Toy</th>
                        <th>Seller</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Availabe Qty</th>
                        <th>Details</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                 

                    {
                        products.map((product, i) => <TableRow key={i} product={product} i={i}></TableRow>)
                    }


                </tbody>
                {/* foot */}
                {products.length > 20 ? <>
                    <tfoot>
                        <tr>
                        <th>Ser</th>
                        <th>Photo</th>
                        <th>Toy</th>
                        <th>Seller</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Availabe Qty</th>
                        <th>Details</th>
                        </tr>
                    </tfoot>
                </> : ''}

            </table>
        </div>
    );
};

export default ToysTable;