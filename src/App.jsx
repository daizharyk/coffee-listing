import React, { useState } from "react";
import Background from "./components/Background";
import CoffeeList from "./components/CoffeeList";
import FilterButtons from "./components/FilterButtons";
import Footer from "./components/Footer";

function App() {
  const [filter, setFilter] = useState("all");
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/resources/bg-cafe-lg.jpg)`,
    backgroundSize: "auto",
    backgroundColor: "#111315",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",

    padding: "150px 10px 10px 10px",
  };

  return (
    <div style={backgroundStyle}>
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
        <img
          className="vector-svg"
          src={`${process.env.PUBLIC_URL}/resources/vector.svg`}
          alt=""
        />
        <CoffeeList filter={filter} />
      </Background>
      <Footer />
    </div>
  );
}

export default App;
