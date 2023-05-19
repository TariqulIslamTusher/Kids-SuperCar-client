import React from 'react';
import HomeBanner from './HomeBanner';
import Category from './Category';
import HomeGalary from './HomeGalary';

const Home = () => {
    return (
        <div className='bg-slate-50'>
            <HomeBanner></HomeBanner>
            <div className='container mx-auto'>
                <HomeGalary></HomeGalary>
            </div>
        </div>
    );
};

export default Home;