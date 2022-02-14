import React from "react";
import CocktailList from "../components/CocktailList.js";
import SearchForm from "../components/SearchForm.js";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
