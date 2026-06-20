import { useState } from "react";

function AddCarForm({ dispatch }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            name.trim() === "" ||
            price.trim() === "" ||
            image.trim() === ""
        ) {
            alert("All fields are required");
            return;
        }

        const newCar = {
            id: Date.now(),
            name,
            price,
            image,
            company: "Custom Car",
            city: "Hyderabad",
        };

        dispatch({
            type: "ADD_CAR",
            payload: newCar,
        });

        setName("");
        setPrice("");
        setImage("");
    };

    return (
        <form
            className="add-car-form"
            onSubmit={handleSubmit}
        >
            <h2>Add New Car</h2>

            <input
                type="text"
                placeholder="Car Name"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) =>
                    setPrice(e.target.value)
                }
            />

            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) =>
                    setImage(e.target.value)
                }
            />

            <button type="submit">
                Add Car
            </button>
        </form>
    );
}

export default AddCarForm;