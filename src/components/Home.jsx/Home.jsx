import React from 'react';
import HomeBanner from './HomeBanner';
import HomeGalary from './HomeGalary';
import HomeCategory from './HomeCategory';
import useTitle from '../UseHooks/UseTitle';
import Marquee from "react-fast-marquee";
import OurLet from './Outlets/OurLet';
import SuccessStory from './SuccessHome/SuccessStory';
import ClientSay from './clientsSay/ClientsSay';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { FaLongArrowAltUp } from 'react-icons/fa';

const Home = () => {
    useTitle('Home')
    return (
        <div id='home' className='bg-slate-200'>
            <HomeBanner></HomeBanner>
            <Marquee pauseOnHover speed={100} className='bg-orange-100 py-5'>
                <h3 className="text-xl font-mono">** Update: Our All Outlet are giving <span className='text-red-700 font-bold'>Discount</span> up to 60%</h3>
            </Marquee>
            <div>
                <HomeCategory></HomeCategory>
            </div>
            <div className='container mx-auto' data-aos="slide-up">
                <HomeGalary></HomeGalary>
            </div>
            <div >
                <div data-aos='slide-left'>
                    <OurLet ></OurLet>
                </div>
                <div data-aos='slide-right'>
                    <ClientSay></ClientSay>
                </div>
                <div data-aos='slide-left'>
                    <SuccessStory></SuccessStory>
                </div>
                <div className='absolute bottom-8 right-7 animate-ping'  data-aos="slide-up">
                    <a href="#home"> <button className='btn btn-outline rounded-full'><FaLongArrowAltUp></FaLongArrowAltUp></button></a>
                </div>
            </div>
        </div>
    );
};

export default Home;