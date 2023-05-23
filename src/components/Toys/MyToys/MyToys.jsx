import React, { useContext, useRef, useState } from 'react';
import MyToysTable from './MyToysTable';
import useTitle from '../../UseHooks/UseTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToys = () => {
    const {user} =useContext(AuthContext)
    const inputRef = useRef(null)
    const [sortData, setSortData] = useState(null)
    useTitle('My Added Toys')


    // // handle sort for sorting the item according to price accending and deccending
    // const handleSort = (e) => {
    //     const sort = e.target.value
    //     if (sort === "lowPrice") {
    //         fetch(`http://localhost:4000/addedProductsAccend?email=${user?.email}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 //// console.log(data)
    //                 setSortData(data)
    //             })

    //     } else if (sort === 'highPrice') {
    //         fetch(`http://localhost:4000/addedProductsDeccend?email=${user?.email}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 //// console.log(data)
    //                 setSortData(data)
    //             })
    //     } else if (sort === 'name') {
    //         fetch(`http://localhost:4000/addedProductsName?email=${user?.email}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 //// console.log(data)
    //                 setSortData(data)
    //             })
    //     } else {
    //         setSortData(null)
    //     }
    // }


    // Standard procedure of sorting, here we sorted 3data only in one fetch
    const handleSort = (e) => {
        let sort = e.target.value
        fetch(`http://localhost:4000/dayna?email=${user?.email}&sort=${sort}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setSortData(data)
            })
    }

    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const search = e.target.search.value
        // console.log(search);
        // inputRef.current.focus();
        // console.log(inputRef.current.value);
    }

    const refSearch = () =>{
        const value = inputRef.current.value 
        fetch('')
    }
    
 


    return (
       <div className="bg-slate-200 py-7">
         <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row gap-5 justify-end items-center pb-3'>
                    <form onSubmit={handleSubmit} className='flex items-center'>
                        <input onChange={refSearch} ref={inputRef} placeholder='Search by name' name='search' className="w-full px-4 py-3 border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" />
                        <button  className='btn btn-outline rounded-l-none border-gray-400 '>Search</button>
                    </form>
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
            <MyToysTable sortData={sortData}></MyToysTable>
        </div>
       </div>
    );
};

export default MyToys;