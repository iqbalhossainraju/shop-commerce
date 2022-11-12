import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
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
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl my-5 mr-2 inline-block capitalize">Mens Fashion</h2>
                    <Link className="hover:text-primary flex items-center" to="/menfashion">See all <AiOutlineArrowRight className="ml-2 inline-block" /></Link>
                </div>
                <MensFashions type="home" />
            </div>
        </>
    );
};

export default Home;