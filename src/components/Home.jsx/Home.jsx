import React from 'react';
import HomeBanner from './HomeBanner';
import HomeGalary from './HomeGalary';
import HomeCategory from './HomeCategory';
import useTitle from '../UseHooks/UseTitle';
import Marquee from "react-fast-marquee";
import OurLet from './Outlets/OurLet';
import SuccessStory from './SuccessHome/SuccessStory';
import ClientSay from './clientsSay/ClientsSay';

const Home = () => {
    useTitle('Home')
    return (
        <div className='bg-slate-200'>
            <HomeBanner></HomeBanner>
            <Marquee pauseOnHover speed={100} className='bg-orange-100 py-5'>
                <h3 className="text-xl font-mono">** Update: Our All Outlet are giving <span className='text-red-700 font-bold'>Discount</span> up to 60%</h3>
            </Marquee>
            <div>
                <HomeCategory></HomeCategory>
            </div>
            <div className='container mx-auto'>
                <HomeGalary></HomeGalary>
            </div>
            <div>
                <OurLet></OurLet>
                <ClientSay></ClientSay>
                <SuccessStory></SuccessStory>
            </div>
        </div>
    );
};

export default Home;