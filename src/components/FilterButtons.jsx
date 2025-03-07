const FilterButtons = ({ setFilter, filter }) => {
    return (
      <div className="buttons">
        <button
          className={`btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Products
        </button>
        <button
          className={`btn ${filter === "available" ? "active" : ""}`}
          onClick={() => setFilter("available")}
        >
          Available Now
        </button>
      </div>
    );
  };
  
  export default FilterButtons;
  