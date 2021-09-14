import React from "react";

const SearchInput = () => {
  return (
    <form id="form">
      <input type="search" id="query" name="q" placeholder="Search..." />
      <button>Search</button>
    </form>
  );
};

export default SearchInput;
