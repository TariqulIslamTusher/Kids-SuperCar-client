import React from 'react';
import MyToysTable from './MyToysTable';

const MyToys = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='heading-text'>MY Added Toys</h1>
            <MyToysTable></MyToysTable>
        </div>
    );
};

export default MyToys;