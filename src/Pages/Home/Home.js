import React from 'react';
import Carousel from './Carousel';
import ExploreBrands from './ExploreBrands';
import Info from './Info';
import MensFashions from './MensFashions/MensFashions';
import PopularCategories from './PopularCategories';
import TopCategories from './TopCategories';

const Home = () => {
    return (
        <>
            <Carousel />
            <Info />
            <TopCategories />
            <ExploreBrands />
            <PopularCategories />
            <MensFashions type="home" />
        </>
    );
};

export default Home;