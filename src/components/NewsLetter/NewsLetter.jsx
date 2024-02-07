import React from 'react';
import Container from '../Shared/Container/Container';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <Container>
            <div className='newscolor rounded-xl my-5'>
                <div className="hero h-[400px]">
                    <div className="hero-content text-center">
                        <div className="">
                            <h1 className="text-5xl font-semibold">Get Exclusive Offers On Your Email</h1>
                            <p className="py-6 text-lg font-semibold text-gray-500">Subscribe to our newsletter and stay updated</p>
                            {/* newsletter input letter */}
                            <div className='flex items-center justify-center'>
                                <input type="text" placeholder="Type here" className="input input-primary w-full max-w-sm" />
                                <button className="py-3 -ml-7 rounded-3xl px-8 bg-black text-white">Subscribes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default NewsLetter;