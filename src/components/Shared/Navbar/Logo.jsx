import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/all-products/logo.png'

const Logo = () => {
    return (
        <div className='flex flex-row items-center gap-4'>
            <Link to='/'><img src={logo} className='hidden md:block' width='50' height='50' alt="logo" /></Link>
            <Link to='/'><h2 className='font-bold text-lg hidden md:block text-red-300'>Online Shopper</h2></Link>
        </div>
    )
};

export default Logo;