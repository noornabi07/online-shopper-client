import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import Popular from '../Popular/Popular';
import Offers from '../Offers/Offers';
import NewCollections from '../NewCollections/NewCollections';
import NewsLetter from '../NewsLetter/NewsLetter';


const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Popular></Popular>
            <Offers></Offers>
            <NewCollections></NewCollections>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;