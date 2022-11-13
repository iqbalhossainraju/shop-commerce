import React, { useEffect, useState } from 'react';
import useMensFashion from '../hooks/useMensFashion';
import MensFashion from './MensFashion';

const MensFashions = ({ type }) => {
    const { menFashions } = useMensFashion();
    const [getmenFashions, setGetmenFashions] = useState([])
    useEffect(() => {
        if (type === 'home') {
            setGetmenFashions(menFashions.slice(0, 8));
        } else {
            setGetmenFashions(menFashions);
        }

    }, [menFashions]);
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    getmenFashions?.map(getmenFashion => <MensFashion
                        key={getmenFashion._id}
                        getmenFashion={getmenFashion}
                    ></MensFashion>)
                }
            </div>
        </>
    );
};

export default MensFashions;