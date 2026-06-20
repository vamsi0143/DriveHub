import { useEffect, useState } from "react";
import { getCars } from "../Services/api";

function useCars() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        const fetchCars = async () => {
            const data = await getCars();

            setCars(data);
            setLoading(false);
        };

        fetchCars();
    }, []);

    return { cars, loading };
}

export default useCars;