import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import exBrands from '../../assets/Explore-Brands/ep-brand1.webp';
import exBrands2 from '../../assets/Explore-Brands/ep-brand2.webp';
import exBrands3 from '../../assets/Explore-Brands/ep-brand3.webp';
import exBrands4 from '../../assets/Explore-Brands/ep-brand4.webp';
import exBrands5 from '../../assets/Explore-Brands/ep-brand5.webp';
import exBrands6 from '../../assets/Explore-Brands/ep-brand6.webp';
import exBrands7 from '../../assets/Explore-Brands/ep-brand7.webp';
import '../Css/ExploreBrands.css';

const ExploreBrands = () => {
    return (
        <>
            <div className="my-10">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl my-5 mr-2 inline-block capitalize">popular brands </h2>
                    <Link className="hover:text-primary flex items-center" to="/">See all <AiOutlineArrowRight className="ml-2 inline-block" /></Link>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-2 lg:grid-cols-7 gap-5">
                        <div >
                            <Link to="/" className="text-center inline-block hover:underline">
                                <img className="expImg" src={exBrands} alt="" />
                                <p className="mt-5">Apple</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" className="text-center inline-block hover:underline">
                                <img className="expImg" src={exBrands2} alt="" />
                                <p className="mt-5">Samsung</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" className="text-center inline-block hover:underline">
                                <img className="expImg" src={exBrands3} alt="" />
                                <p className="mt-5">Sony</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" className="text-center inline-block hover:underline">
                                <img className="expImg" src={exBrands4} alt="" />
                                <p className="mt-5">Ugreen</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" className="text-center inline-block hover:underline">
                                <img className="expImg" src={exBrands5} alt="" />
                                <p className="mt-5">Xiaomi</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" className="text-center inline-block hover:underline">
                                <img className="expImg" src={exBrands6} alt="" />
                                <p className="mt-5">Nike</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" className="text-center inline-block hover:underline">
                                <img className="expImg" src={exBrands7} alt="" />
                                <p className="mt-5">Born Pretty</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExploreBrands;