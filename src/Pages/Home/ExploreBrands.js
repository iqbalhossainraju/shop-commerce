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

const ExploreBrands = () => {
    return (
        <div className="my-10">
            <div className="flex items-center">
                <h2 className="underline text-3xl my-5 mr-2 inline-block capitalize">popular brands </h2> || <Link className="text-2xl ml-2 hover:text-primary font-bold" to="/">see all <AiOutlineArrowRight className="inline-block" /></Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-7 gap-5">
                <div>
                    <Link to="/" className="text-center inline-block hover:underline">
                        <img src={exBrands} alt="" />
                        <p className="mt-5 text-xl">Apple</p>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="text-center inline-block hover:underline">
                        <img src={exBrands2} alt="" />
                        <p className="mt-5 text-xl">Samsung</p>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="text-center inline-block hover:underline">
                        <img src={exBrands3} alt="" />
                        <p className="mt-5 text-xl">Sony</p>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="text-center inline-block hover:underline">
                        <img src={exBrands4} alt="" />
                        <p className="mt-5 text-xl">Ugreen</p>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="text-center inline-block hover:underline">
                        <img src={exBrands5} alt="" />
                        <p className="mt-5 text-xl">Xiaomi</p>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="text-center inline-block hover:underline">
                        <img src={exBrands6} alt="" />
                        <p className="mt-5 text-xl">Nike</p>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="text-center inline-block hover:underline">
                        <img src={exBrands7} alt="" />
                        <p className="mt-5 text-xl">Born Pretty</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExploreBrands;