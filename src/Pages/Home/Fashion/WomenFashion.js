import React from 'react';
import womensFashionBanner from '../../../assets/Mens Fashion/mens-headers.jpg';
import WomensFashions from '../WomensFashion/WomensFashions';

const WomenFashion = () => {
    return (
        <>
            <img src={womensFashionBanner} alt="" />
            <div className="flex items-center justify-between py-4">
                <h2 className="text-2xl">Women's Fashion</h2>
                <div className="flex items-center">
                    <p>Sort by: </p>
                    <select name="" className=" outline-none border-none">
                        <option value="">Best Match</option>
                        <option value="">Price low to high</option>
                        <option value="">Price high to low</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-row my-5 gap-10">
                <div className="menu hidden lg:block lg:w-96">
                    <div>
                        {/* Brands */}
                        <h2>Brand:</h2>
                        <div className="flex items-center">
                            <input className="checkbox" type="checkbox" id="goodMan" name="goodMan" value="Bike" />
                            <label for="goodMan" className="ml-3"> Good Women </label>
                        </div>
                        <div className="flex items-center my-1">
                            <input className="checkbox" type="checkbox" id="cityBoy" name="cityBoy" value="Bike" />
                            <label for="cityBoy" className="ml-3"> City Girl </label>
                        </div>
                        <div className="flex items-center">
                            <input className="checkbox" type="checkbox" id="stoneRose" name="stoneRose" value="Bike" />
                            <label for="stoneRose" className="ml-3"> Stone Rose </label>
                        </div>
                        <div className="flex items-center my-1">
                            <input className="checkbox" type="checkbox" id="sunnyHeart" name="sunnyHeart" value="Bike" />
                            <label for="sunnyHeart" className="ml-3"> Sunny Heart </label>
                        </div>
                        <div className="flex items-center">
                            <input className="checkbox" type="checkbox" id="manFare" name="manFare" value="Bike" />
                            <label for="manFare" className="ml-3"> Women Fare </label>
                        </div>
                        <div className="flex items-center my-1">
                            <input className="checkbox" type="checkbox" id="leeBas" name="leeBas" value="Bike" />
                            <label for="leeBas" className="ml-3"> Lee Bas </label>
                        </div>
                    </div>

                    {/* Service */}
                    <div className="my-5">
                        <h2>Service:</h2>
                        <div className="flex items-center">
                            <input className="checkbox" type="checkbox" id="installment" name="installment" value="Bike" />
                            <label for="installment" className="ml-3"> Installment </label>
                        </div>
                        <div className="flex items-center my-1">
                            <input className="checkbox" type="checkbox" id="cashOnDelivery" name="cashOnDelivery" value="Bike" />
                            <label for="cashOnDelivery" className="ml-3"> Cash On Delivery</label>
                        </div>
                        <div className="flex items-center">
                            <input className="checkbox" type="checkbox" id="fulFilled" name="fulFilled" value="Bike" />
                            <label for="fulFilled" className="ml-3"> Fulfilled by E-commerce</label>
                        </div>
                        <div className="flex items-center my-1">
                            <input className="checkbox" type="checkbox" id="freeShiopping" name="freeShiopping" value="Bike" />
                            <label for="freeShiopping" className="ml-3"> Free shipping</label>
                        </div>
                    </div>

                    {/* Main Material */}
                    <div className="my-5">
                        <h2>Main Material:</h2>
                        <div className="flex items-center">
                            <input className="checkbox" type="checkbox" id="cotton" name="cotton" value="Bike" />
                            <label for="cotton" className="ml-3"> Cotton </label>
                        </div>
                        <div className="flex items-center my-1">
                            <input className="checkbox" type="checkbox" id="polyster" name="polyster" value="Bike" />
                            <label for="polyster" className="ml-3"> Polyester </label>
                        </div>
                        <div className="flex items-center">
                            <input className="checkbox" type="checkbox" id="microfiberPolyster" name="microfiberPolyster" value="Bike" />
                            <label for="microfiberPolyster" className="ml-3"> Microfiber Polyester </label>
                        </div>
                        <div className="flex items-center my-1">
                            <input className="checkbox" type="checkbox" id="denim" name="denim" value="Bike" />
                            <label for="denim" className="ml-3"> Denim </label>
                        </div>
                        <div className="flex items-center my-1">
                            <input className="checkbox" type="checkbox" id="polyCotton" name="polyCotton" value="Bike" />
                            <label for="polyCotton" className="ml-3"> Poly-Cotton </label>
                        </div>
                        <div className="flex items-center my-1">
                            <input className="checkbox" type="checkbox" id="silk" name="silk" value="Bike" />
                            <label for="silk" className="ml-3"> Silk </label>
                        </div>
                    </div>

                    {/* Warranty Type */}
                    <div className="my-5">
                        <h2>Warranty Type:</h2>
                        <div className="flex items-center">
                            <input className="checkbox" type="checkbox" id="warranty" name="warranty" value="Bike" />
                            <label for="warranty" className="ml-3"> No Warranty </label>
                        </div>

                    </div>
                </div>
                <div>
                    <WomensFashions type="MensFashions" />
                </div>
            </div>
        </>
    );
};

export default WomenFashion;