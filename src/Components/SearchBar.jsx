import { useRef } from "react";

function SearchBar({
    search,
    setSearch,
}) {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div className="search-container">
            <input
                ref={inputRef}
                type="text"
                placeholder="Search Cars..."
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
                className="search-input"
            />

            <button onClick={focusInput}>
                Focus Search
            </button>
        </div>
    );
}

export default SearchBar;