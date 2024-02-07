import React from 'react';
import Container from '../Shared/Container/Container';
import './Offers.css'
import offerImg from '../assets/all-products/exclusive_image.png'

const Offers = () => {
    return (

        <Container>
            <div className='offercolor'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:gap-96 lg:flex-row-reverse">
                        <img src={offerImg} className="max-w-sm " />
                        <div>
                            <div className='flex flex-col gap-3 text-3xl md:text-7xl font-semibold'>
                                <h1>Exclusive</h1>
                                <h1>Offers For You</h1>
                            </div>
                            <p className="py-6 uppercase font-bold text-sm">Only One Best Sellers Products</p>

                            <button className='py-1 px-6 bg-red-600 text-lg rounded-2xl  text-white'>Check Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    );
};

export default Offers;