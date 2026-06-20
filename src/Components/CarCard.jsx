import { Link } from "react-router-dom";

function CarCard({ car }) {
    return (
        <div className="car-card">
            <img
                src={car.image}
                alt={car.name}
            />

            <h3>{car.name}</h3>

            <p>{car.company}</p>

            <p>{car.city}</p>

            <h4>{car.price}</h4>

            <Link to={`/car/${car.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
}

export default CarCard;