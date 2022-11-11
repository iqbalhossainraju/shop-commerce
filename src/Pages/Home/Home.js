import React from 'react';
import Carousel from './Carousel';
import ExploreBrands from './ExploreBrands';
import TopCategories from './TopCategories';

const Home = () => {
    return (
        <>
            <Carousel />
            {/* <Info /> */}
            <TopCategories />
            <ExploreBrands />
            {/* <ExploreCategories /> */}
        </>
    );
};

export default Home;