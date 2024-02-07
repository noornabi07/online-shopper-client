import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import Popular from '../Popular/Popular';
import Offers from '../Offers/Offers';
import NewCollections from '../NewCollections/NewCollections';


const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Popular></Popular>
            <Offers></Offers>
            <NewCollections></NewCollections>
        </div>
    );
};

export default Home;