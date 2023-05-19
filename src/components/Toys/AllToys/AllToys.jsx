import React from 'react';
import ToysTable from './ToysTable';


const AllToys = () => {
    

    return (
        <div className='container mx-auto'>
            <h1 className='heading-text'>All Toys</h1>
            <ToysTable></ToysTable>
        </div>
    );
};

export default AllToys;