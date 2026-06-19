import {
    NavLink,
    Outlet,
    useSearchParams,
} from "react-router-dom";

import useCars from "../hooks/useCars";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";

function Cars() {
    const { cars, loading } = useCars();

    const [searchParams, setSearchParams] =
        useSearchParams();

    const search =
        searchParams.get("search") || "";

    const handleSearch = (value) => {
        setSearchParams({
            search: value,
        });
    };

    const filteredCars = cars.filter(
        (car) =>
            car.name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            car.company
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            car.category
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (
        <div className="page">
            <h1>Our Cars</h1>

            <SearchBar
                search={search}
                setSearch={handleSearch}
            />

            <div className="nested-links">
                <NavLink to="suv">SUV</NavLink>

                <NavLink to="sedan">
                    Sedan
                </NavLink>

                <NavLink to="electric">
                    Electric
                </NavLink>
            </div>

            <Outlet />

            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div className="cars-grid">
                    {filteredCars.map((car) => (
                        <CarCard
                            key={car.id}
                            car={car}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cars;