import React from 'react';

const MensFashion = ({ getmenFashion }) => {
    const { image, title, price } = getmenFashion;
    return (
        <>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="image" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{title}</h2>
                    <p>price: ${price}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MensFashion;