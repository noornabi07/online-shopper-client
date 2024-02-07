import React from 'react';
import Container from '../Shared/Container/Container';
import './HeroBanner.css'
import heroImg from '../assets/all-products/hero_image.png'
import handIcon from '../assets/all-products/hand_icon.png'
import { FaArrowRight } from "react-icons/fa6";

const HeroBanner = () => {
    return (
        <Container>
            <div className='bgcolor rounded-lg'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:gap-72 lg:flex-row-reverse">
                        <img src={heroImg} className="max-w-sm" />
                        <div>
                            <p className="uppercase font-bold">New Arrivals Only</p>
                            <div className='flex items-center gap-3'>
                                <p className='lg:text-7xl text-3xl md:text-5xl font-semibold'>new </p>
                                <img src={handIcon} width='80' height='80' alt="" />
                            </div>
                            <p className='lg:text-7xl text-3xl md:text-5xl font-semibold mb-3 mt-2'>Collections</p>
                            <p className='lg:text-7xl text-3xl md:text-5xl font-semibold mb-3'>for everyone</p>
                            <div className='flex mt-7 items-center justify-center bg-red-500 w-44 rounded-2xl'>
                                <button className='p-2 text-white'>Latest Collection</button>
                                <FaArrowRight className='text-white'></FaArrowRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HeroBanner;