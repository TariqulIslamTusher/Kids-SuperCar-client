import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const MainOutlet = () => {
    return (
        <div>
            <div className=' shadow-xl'>
                <Navbar></Navbar>
            </div>
            <div className='mx-auto'>
                <Outlet></Outlet>
            </div>
            <div className=' bg-neutral text-neutral-content'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainOutlet;