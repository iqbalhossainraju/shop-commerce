import React from 'react';
import { Link } from 'react-router-dom';
import topCat from '../../assets/Top-Categories/activewear.webp';
import topCat10 from '../../assets/Top-Categories/bikinis-swimsuits.webp';
import topCat2 from '../../assets/Top-Categories/co-ords.webp';
import topCat3 from '../../assets/Top-Categories/coats-jackets.avif';
import topCat4 from '../../assets/Top-Categories/dresses.webp';
import topCat5 from '../../assets/Top-Categories/hoodies.webp';
import topCat6 from '../../assets/Top-Categories/jeans.webp';
import topCat8 from '../../assets/Top-Categories/jumpsuits-playsuits.webp';
import topCat9 from '../../assets/Top-Categories/lingeries.webp';
import topCat7 from '../../assets/Top-Categories/skirts-tops.webp';
import './TopCategories.css';

const TopCategories = () => {
    return (
        <>
            <h2 className="underline text-3xl my-5">Top Categories</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={topCat} alt="" />
                        <Link to="/" className="hover:underline text-center">Activewear</Link>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={topCat2} alt="" />
                        <Link to="/" className="hover:underline text-center">Co-orda</Link>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={topCat3} alt="" />
                        <Link to="/" className="hover:underline text-center">Coats & Jackets</Link>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={topCat4} alt="" />
                        <Link to="/" className="hover:underline text-center">Dresses</Link>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={topCat5} alt="" />
                        <Link to="/" className="hover:underline text-center">Hoodies</Link>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={topCat6} alt="" />
                        <Link to="/" className="hover:underline text-center">Jeans</Link>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={topCat7} alt="" />
                        <Link to="/" className="hover:underline text-center">Shirts & Top</Link>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={topCat8} alt="" />
                        <Link to="/" className="hover:underline text-center">Jumpsuits & Playsuits</Link>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={topCat9} alt="" />
                        <Link to="/" className="hover:underline text-center">Lingeries</Link>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={topCat10} alt="" />
                        <Link to="/" className="hover:underline text-center">Bikinis & Swimsuits</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopCategories;