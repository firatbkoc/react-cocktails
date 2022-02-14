import React from "react";
import { useGlobalContext } from "../context";
import { useRef, useEffect } from "react";
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchRef = useRef("");
  const searchCocktails = () => {
    setSearchTerm(searchRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search for cocktails</label>
          <input
            type="text"
            id="name"
            ref={searchRef}
            onChange={searchCocktails}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
