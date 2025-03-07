import React, { useState } from "react";
import Background from "./components/Background";
import CoffeeList from "./components/CoffeeList";
import FilterButtons from "./components/FilterButtons";
import Footer from "./components/Footer";

function App() {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <Background>
        <div className="collection-container">
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <FilterButtons setFilter={setFilter} filter={filter} />
        </div>
        <img className="vector-svg" src="/resources/vector.svg" alt="" />
        <CoffeeList filter={filter} />
      </Background>
      <Footer />
    </>
  );
}

export default App;
