import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import MyTableRows from './MyTableRows';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToysTable = () => {
    const {user} = useContext(AuthContext)
    const [products, setProducts] = useState([])

    const url = `http://localhost:5000/products?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])


    // handle delete the products indivisually 
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = products.filter(product => product._id !== id)
                            setProducts(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        } else {
                            Swal.fire(
                                'DOCUMENT NOT FOUND!',
                                'Your Document is not found',
                                'Wrong Request'
                            )
                        }
                    })
            }
        })
    }

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
                        <th>
                            <label>
                                Delete
                            </label>
                        </th>
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

                    {/* {
                        products.length === 0? <>
                        <h2 className="heading-text">No data added</h2>
                        </> : ''
                    } */}

                    {
                        products.map((product, i) => <MyTableRows key={i} product={product} handleDelete={handleDelete} i={i}></MyTableRows>)
                    }


                </tbody>
                {/* foot */}
                {
                    products.length > 20 ? <>
                        <tfoot>
                            <tr>
                                <th>
                                    <label>
                                        Delete
                                    </label>
                                </th>
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
                    </> : ''
                }

            </table>
        </div>
    );
};

export default MyToysTable;