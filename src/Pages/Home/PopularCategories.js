import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import popularCategory from '../../assets/Popular-Categories/popular-Category.webp';
import popularCategory2 from '../../assets/Popular-Categories/popular-Category2.webp';
import popularCategory3 from '../../assets/Popular-Categories/popular-Category3.webp';
import popularCategory4 from '../../assets/Popular-Categories/popular-Category4.webp';
import popularCategory5 from '../../assets/Popular-Categories/popular-Category5.webp';
import popularCategory6 from '../../assets/Popular-Categories/popular-Category6.webp';
import popularCategory7 from '../../assets/Popular-Categories/popular-Category7.webp';
import '../Css/PopularCategories.css';

const PopularCategories = () => {
    return (
        <div>
            <div className="my-10 p-5">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl my-5 mr-2 inline-block capitalize">popular Categories </h2>
                    <Link className="hover:text-primary flex items-center" to="/">See all <AiOutlineArrowRight className="ml-2 inline-block" /></Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-7 gap-5">
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img class="popularImg" src={popularCategory} alt="" />
                            <p className="mt-5">
                                Sneakers</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img class="popularImg" src={popularCategory2} alt="" />
                            <p className="mt-5">Korean beauty</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img class="popularImg" src={popularCategory3} alt="" />
                            <p className="mt-5">Wristwatches</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img class="popularImg" src={popularCategory4} alt="" />
                            <p className="mt-5">Fishies</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img class="popularImg" src={popularCategory5} alt="" />
                            <p className="mt-5">Collectibles</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img class="popularImg" src={popularCategory6} alt="" />
                            <p className="mt-5">Smartphones</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img class="popularImg" src={popularCategory7} alt="" />
                            <p className="mt-5">Sell</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;