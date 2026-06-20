import { useReducer } from "react";

import AddCarForm from "../Components/AddCarForm";

import {
    carReducer,
    initialState,
} from "../reducer/carReducer";

function Profile() {
    const [state, dispatch] = useReducer(
        carReducer,
        initialState
    );

    return (
        <div className="page">
            <h1>Admin Dashboard</h1>

            <p>
                Manage custom showroom cars.
            </p>

            <AddCarForm dispatch={dispatch} />

            <div className="cars-grid">
                {state.cars.map((car) => (
                    <div
                        className="car-card"
                        key={car.id}
                    >
                        <img
                            src={car.image}
                            alt={car.name}
                        />

                        <h3>{car.name}</h3>

                        <h4>{car.price}</h4>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "DELETE_CAR",
                                    payload: car.id,
                                })
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;