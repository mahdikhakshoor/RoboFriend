import React from "react";
function SearchBox({ searchChange }) {
  return (
    <div className="pa2">
      <input
        className="bg-light-green   pa3 ma3 "
        type="search"
        placeholder="find your robot"
        onChange={searchChange}
      />
    </div>
  );
}
export default SearchBox;
