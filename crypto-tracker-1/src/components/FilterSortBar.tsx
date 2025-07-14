import React, { useState } from "react";

interface FilterSortBarProps {
  onFilter: (filter: string) => void;
  onSort: (sortBy: string) => void;
}

const FilterSortBar: React.FC<FilterSortBarProps> = ({ onFilter, onSort }) => {
  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterText(value);
    onFilter(value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortOption(value);
    onSort(value);
  };

  return (
    <div className="filter-sort-bar">
      <input
        type="text"
        placeholder="Filter by name..."
        value={filterText}
        onChange={handleFilterChange}
        className="filter-input"
      />
      <select value={sortOption} onChange={handleSortChange} className="sort-select">
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="marketCap">Market Cap</option>
        <option value="change1h">Change (1h)</option>
        <option value="change24h">Change (24h)</option>
        <option value="change7d">Change (7d)</option>
      </select>
    </div>
  );
};

export default FilterSortBar;