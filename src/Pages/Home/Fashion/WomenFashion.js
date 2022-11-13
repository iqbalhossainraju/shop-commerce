import React from 'react';
import headerBanner from '../../../assets/Mens Fashion/mens-headers.jpg';
import WomensFashions from '../WomensFashion/WomensFashions';

const WomenFashion = () => {
    return (
        <>
            <img src={headerBanner} alt="" />
            <div className="flex my-10 gap-5">
                <div>
                    <h2 className="capitalize">ratings:</h2>
                </div>
                <div>
                    <WomensFashions type="WomensFashions" />
                </div>
            </div>
        </>
    );
};

export default WomenFashion;