import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import Popular from '../Popular/Popular';
import Offers from '../Offers/Offers';


const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Popular></Popular>
            <Offers></Offers>
        </div>
    );
};

export default Home;