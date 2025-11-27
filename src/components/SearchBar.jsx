import React, { useState } from "react";

function SearchBar({ onSearch, isLoading }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmed = inputValue.trim();
        if (!trimmed) return;
        onSearch(trimmed);
        setInputValue("");
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                className="search-input"
                type="text"
                placeholder="Check weather by city name..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="search-button" type="submit" disabled={isLoading}>
                {isLoading ? "Searching..." : "Search"}
            </button>
        </form>
    );
}

export default SearchBar;