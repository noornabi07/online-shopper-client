import React from 'react';
import avatar from '../../../assets/all-products/placeholder.jpg'

const Avatar = () => {
    return (
        <img src={avatar} className='rounded-full' height='30' width='30' alt="Profile" />
    );
};

export default Avatar;