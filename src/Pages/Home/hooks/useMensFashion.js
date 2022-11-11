import { useEffect, useState } from "react";

const useMensFashion = () => {
    const [menFashions, setmenFashions] = useState([]);
    useEffect(() => {
        fetch(`mensFashion.json`)
            .then(res => res.json())
            .then(data => setmenFashions(data));
    }, []);
    return { menFashions: menFashions };
};

export default useMensFashion;