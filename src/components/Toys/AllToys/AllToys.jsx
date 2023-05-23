import React, { useEffect, useState } from 'react';
import ToysTable from './ToysTable';
import useTitle from '../../UseHooks/UseTitle';
import Swal from 'sweetalert2';


const AllToys = () => {
    useTitle("All Toys")
    const [sortData, setSortData] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.search.value.toUpperCase()
        // console.log(value);
        if (value) {
            fetch(`http://localhost:4000/productsByName?toyName=${value}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.length > 0) {
                        setSortData(data)
                    } else {
                        e.target.search.value = ''
                        setSortData(null)
                        Swal.fire(
                            'NO DATA FOUND!',
                            'Your Search is not found',
                            'Wrong Request'
                        )
                    }
                })
        } else {

        }
    }

    const searchName = (e) => {
        const value = e.target.value.toUpperCase()
        // console.log(value);
        if (value) {
            fetch(`http://localhost:4000/productsByName?toyName=${value}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.length > 0) {
                        setSortData(data)
                    }
                })
        }
        if (value.length === 0) {
            fetch('http://localhost:4000/products')
                .then(res => res.json())
                .then(data => {
                    // console.log(data)

                    setSortData(data)

                })
        }
    }


    // standart system of sorting where you can sort multiple data in one fetch
    //  in the server we declare a query as {} if we fetch with email the query will be email: email unless it will give the all data and same as the sorting

    const handleSort = (e) => {
        const sort = e.target.value
        fetch(`http://localhost:4000/dayna?sort=${sort}`)
            .then(res => res.json())
            .then(data => {
                //// console.log(data)
                setSortData(data)
            })
    }


    // sorting the product by lower price and upper price and name
    // const handleSort = (e) => {
    //     const sort = e.target.value
    //     if (sort === "lowPrice") {
    //         fetch('http://localhost:4000/accendProducts')
    //             .then(res => res.json())
    //             .then(data => {
    //                 //// console.log(data)
    //                 setSortData(data)
    //             })

    //     } else if (sort === 'highPrice') {
    //         fetch('http://localhost:4000/deccendProducts')
    //             .then(res => res.json())
    //             .then(data => {
    //                 //// console.log(data)
    //                 setSortData(data)
    //             })
    //     } else if (sort === 'name') {
    //         fetch('http://localhost:4000/nameProducts')
    //             .then(res => res.json())
    //             .then(data => {
    //                 //// console.log(data)
    //                 setSortData(data)
    //             })
    //     } else {
    //         setSortData("")
    //     }
    // }

    return (
        <div className="bg-slate-200 py-6">
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row gap-5 justify-between items-center py-7'>
                    <form onSubmit={handleSubmit} className='flex items-center'>
                        <input placeholder='Search by name' onChange={searchName} name='search' className="w-full px-4 py-3 border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" />
                        <button className='btn btn-outline rounded-l-none border-gray-400 '>Search</button>
                    </form>

                    {/* <div>
                        <h2 className="heading-text text-2xl md:text-5xl">All Data Added By User</h2>
                    </div> */}

                    <div>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text"
                            id="category"
                            name="category"
                            onChange={handleSort}
                            required
                        >
                            <option value="">Sort By</option>
                            <option value="name">By Name</option>
                            <option value="lowPrice">Low Price</option>
                            <option value="highPrice">High Price</option>

                        </select>
                    </div>
                </div>
                <ToysTable sortData={sortData}></ToysTable>
            </div>
        </div>
    );
};

export default AllToys;