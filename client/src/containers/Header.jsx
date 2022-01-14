import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const setQuery = useState("");

  // only setQuery when finish typing, setSearch back to empty string for the next search
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return { 
    // BUG!!!
      // search={search},
      getSearch,
      updateSearch
    }
};

export default Header;
