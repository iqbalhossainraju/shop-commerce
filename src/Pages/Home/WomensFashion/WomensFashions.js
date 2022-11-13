import React, { useEffect, useState } from 'react';
import useWomenFashion from '../hooks/useWomenFashion';
import WomensFashion from './WomensFashion';

const MensFashions = ({ type }) => {
    const { womenFashions } = useWomenFashion();
    const [getWomenFashions, setGetWomenFashions] = useState([])
    useEffect(() => {
        if (type === 'home') {
            setGetWomenFashions(womenFashions.slice(0, 8));
        } else {
            setGetWomenFashions(womenFashions);
        }

    }, [womenFashions]);
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5'>
                {
                    getWomenFashions?.map(getWomenFashion => <WomensFashion
                        key={getWomenFashion._id}
                        getWomenFashion={getWomenFashion}
                    ></WomensFashion>)
                }
            </div>
        </>
    );
};

export default MensFashions;