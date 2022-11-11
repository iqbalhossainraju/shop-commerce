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

const PopularCategories = () => {
    return (
        <div>
            <div className="my-10">
                <div className="flex items-center">
                    <h2 className="underline text-3xl my-5 mr-2 inline-block capitalize">popular Categories </h2> || <Link className="text-2xl ml-2 hover:text-primary font-bold" to="/">see all <AiOutlineArrowRight className="inline-block" /></Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-7 gap-5">
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img src={popularCategory} alt="" />
                            <p className="mt-5 text-xl">
                                Sneakers</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img src={popularCategory2} alt="" />
                            <p className="mt-5 text-xl">Korean beauty</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img src={popularCategory3} alt="" />
                            <p className="mt-5 text-xl">Wristwatches</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img src={popularCategory4} alt="" />
                            <p className="mt-5 text-xl">Fishies</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img src={popularCategory5} alt="" />
                            <p className="mt-5 text-xl">Collectibles</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img src={popularCategory6} alt="" />
                            <p className="mt-5 text-xl">Smartphones</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="text-center inline-block hover:underline">
                            <img src={popularCategory7} alt="" />
                            <p className="mt-5 text-xl">Sell</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;