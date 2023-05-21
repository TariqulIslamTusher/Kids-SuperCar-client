import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import MyTableRows from './MyTableRows';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loader from '../../Loader/Loader';

const MyToysTable = ({sortData}) => {
    const { user } = useContext(AuthContext)
    const [limit, setLimit] = useState(1)
    const [products, setProducts] = useState([])

    const url = `http://localhost:4000/addedProducts?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(sortData){
                    setProducts(sortData)
                }else if(!sortData || sortData === '' || sortData === null){
                    setProducts(data)
                } else{
                    
                }
            })
    }, [sortData])

    if (!products) {
        return <Loader></Loader>
    }

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
                fetch(`http://localhost:4000/products/${id}`, {
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
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Availabe Qty</th>
                        <th>Total: {products.length}</th>

                    </tr>
                </thead>
                <tbody>


                    {
                        limit ?
                            products.slice(0, 20).map((product, i) => <MyTableRows key={i} product={product} handleDelete={handleDelete} i={i}></MyTableRows>)
                            :
                            products.map((product, i) => <MyTableRows key={i} product={product} handleDelete={handleDelete} i={i}></MyTableRows>)
                    }


                </tbody>

                

                {/* {
                    products.length > 15 ? <>
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
                } */}

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

export default MyToysTable;