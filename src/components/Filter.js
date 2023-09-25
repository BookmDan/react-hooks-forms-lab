import React, { useState, useEffect } from "react";

function Filter({ search: initialSearch, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchChange(term);
  };

  return (
    <div className="Filter">
      <input
        name="search"
        placeholder="Search..."
        type="text"
        value={initialSearch}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Filter;
