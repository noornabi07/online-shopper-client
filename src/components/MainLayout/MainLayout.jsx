import React from 'react';
import Home from '../Home/Home';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
        </div>
    );
};

export default MainLayout;