import React, { useContext, useEffect, useState } from 'react';
import TableRow from './TableRow';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loader from '../../Loader/Loader';

const ToysTable = () => {

    const [limit, setLimit] = useState(1)

    let [products, setProducts] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    if (!products) {
        return <Loader></Loader>
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
                        <th>Category</th>
                        <th>Price</th>
                        <th>Availabe Qty</th>
                        <th>Details</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        limit ?
                            products.slice(0, 10).map((product, i) => <TableRow key={i} product={product} i={i}></TableRow>)
                            :
                            products.map((product, i) => <TableRow key={i} product={product} i={i}></TableRow>)
                    }


                </tbody>
                {/* foot
                {!limit ? <>
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
                </> : ' '} */}

            </table>
            {
                products.length > 10 ?
                    <div className='w-full my-2 text-right'>
                        {
                            limit ? <button className='btn' onClick={() => setLimit(0)}>Show More</button> : <button className='btn' onClick={() => setLimit(1)}>Show Less</button>
                        }
                    </div> : ''
            }
        </div>
    );
};

export default ToysTable;