import React from 'react';
import { Link } from 'react-router-dom';
import infoImg from '../../assets/info-policies-1.webp';
import infoImg2 from '../../assets/info-policies-2.webp';
import infoImg3 from '../../assets/info-policies-3.png';
const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 p-10 bg-slate-200 gap-4 my-10">
            <div className="flex justify-between">
                <img className="h-16 w-fit mr-5" src={infoImg} alt="" />
                <div>
                    <h2 className="text-xl font-bold mb-3">Free Shipping & Returns*</h2>
                    <p>Phasellus lorem malesuada ligula cosmopolis</p>
                    <Link className="underline" to="/">Terms & Condition Applied</Link>
                </div>
            </div>
            <div className="flex justify-between">
                <img className="h-16 w-fit mr-5" src={infoImg2} alt="" />
                <div>
                    <h2 className="text-xl font-bold mb-3">Free Shipping & Returns*</h2>
                    <p>Phasellus lorem malesuada ligula cosmopolis</p>
                    <Link className="underline" to="/">Terms & Condition Applied</Link>
                </div>
            </div>
            <div className="flex justify-between">
                <img className="h-16 w-fit mr-5" src={infoImg3} alt="" />
                <div>
                    <h2 className="text-xl font-bold mb-3">Free Shipping & Returns*</h2>
                    <p>Phasellus lorem malesuada ligula cosmopolis</p>
                    <Link className="underline" to="/">Terms & Condition Applied</Link>
                </div>
            </div>
        </div>
    );
};

export default Info;