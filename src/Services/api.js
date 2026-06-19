import carsData from "../data/carsData";

export const getCars = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(carsData);
        }, 500);
    });
};