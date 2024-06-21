import React from "react";
import "./globalFilter.css";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <h1>Filter: </h1>
      <form className="search-box">
        <input
          id="filter"
          type="text"
          placeholder=" "
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button type="reset"></button>
      </form>
    </div>
  );
};

export default GlobalFilter;
