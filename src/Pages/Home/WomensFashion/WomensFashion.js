import React from 'react';

const WomenFashion = ({ getWomenFashion }) => {
    const { img, title, price } = getWomenFashion;
    return (
        <>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="">{title.slice(0, 18)}...</h2>
                    <p>price: ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WomenFashion;