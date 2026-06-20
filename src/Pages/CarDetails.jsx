import { useParams } from "react-router-dom";
import useCars from "../Hooks/useCars";

function CarDetails() {
    const { id } = useParams();

    const { cars } = useCars();

    const car = cars.find(
        (item) => item.id === Number(id)
    );

    if (!car) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="details-container">
            <img
                src={car.image}
                alt={car.name}
            />

            <h1>{car.name}</h1>

            <h2>{car.company}</h2>

            <h3>{car.city}</h3>

            <h2>{car.price}</h2>

            <p>
                This premium vehicle offers
                luxury, performance and cutting
                edge technology.
            </p>
        </div>
    );
}

export default CarDetails;