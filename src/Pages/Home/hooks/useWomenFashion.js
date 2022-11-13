import { useEffect, useState } from "react";

const useWomenFashion = () => {
    const [womenFashions, setWomenFashions] = useState([]);
    useEffect(() => {
        fetch(`womensFashion.json`)
            .then(res => res.json())
            .then(data => setWomenFashions(data));
    }, []);
    return { womenFashions: womenFashions };
};

export default useWomenFashion;