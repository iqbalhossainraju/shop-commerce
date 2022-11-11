import React from 'react';
import Carousel from './Carousel';
import ExploreBrands from './ExploreBrands';
import Info from './Info';
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
        </>
    );
};

export default Home;