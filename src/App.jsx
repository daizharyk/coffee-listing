import Background from "./components/Background";
import CoffeeList from "./components/CoffeeList";

function App() {
  return (
    <Background>
      <div className="collection-container">
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="buttons">
          <button className="btn">All Products</button>
          <button className="btn">Available Now</button>
        </div>
      </div>
      <CoffeeList />
    </Background>
  );
}

export default App;
