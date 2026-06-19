export const initialState = {
    cars: JSON.parse(localStorage.getItem("customCars")) || [],
};

export const carReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CAR":
            const addedCars = [...state.cars, action.payload];

            localStorage.setItem(
                "customCars",
                JSON.stringify(addedCars)
            );

            return {
                ...state,
                cars: addedCars,
            };

        case "DELETE_CAR":
            const filteredCars = state.cars.filter(
                (car) => car.id !== action.payload
            );

            localStorage.setItem(
                "customCars",
                JSON.stringify(filteredCars)
            );

            return {
                ...state,
                cars: filteredCars,
            };

        case "UPDATE_CAR":
            const updatedCars = state.cars.map((car) =>
                car.id === action.payload.id
                    ? action.payload
                    : car
            );

            localStorage.setItem(
                "customCars",
                JSON.stringify(updatedCars)
            );

            return {
                ...state,
                cars: updatedCars,
            };

        default:
            return state;
    }
};