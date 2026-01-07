import React, { useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  async function getData() {
    if (searchQuery.trim().length == 0) return;
    let data = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    let jsonData = await data.json();
    setSearchSuggestions(jsonData.products);
  }

  let timerId = useRef(null);

  useEffect(() => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      getData();
    }, 500);
  }, [searchQuery]);

  return (
    <div className="search-container">
      <input
        className="search-input"
        onChange={(event) => setSearchQuery(event.target.value)}
        type="text"
        placeholder="Search products..."
      />

      {searchQuery.trim().length !== 0 && searchSuggestions.length > 0 && (
        <div className="search-suggestions">
          {searchSuggestions.map((data) => (
            <p key={data.id} className="suggestion-item">
              {data.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
