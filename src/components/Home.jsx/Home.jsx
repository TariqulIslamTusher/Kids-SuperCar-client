import React from 'react';
import HomeBanner from './HomeBanner';
import HomeGalary from './HomeGalary';
import HomeCategory from './HomeCategory';

const Home = () => {
    return (
        <div className='bg-slate-200'>
            <HomeBanner></HomeBanner>
            <div>
                <HomeCategory></HomeCategory>
            </div>
            <div className='container mx-auto'>
                <HomeGalary></HomeGalary>
            </div>
        </div>
    );
};

export default Home;