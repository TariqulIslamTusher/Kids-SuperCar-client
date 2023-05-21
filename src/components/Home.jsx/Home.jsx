import React from 'react';
import HomeBanner from './HomeBanner';
import HomeGalary from './HomeGalary';
import HomeCategory from './HomeCategory';
import useTitle from '../UseHooks/UseTitle';

const Home = () => {
    useTitle('Home')
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