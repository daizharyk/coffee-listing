import React, { useState, useEffect } from "react";
import axios from "axios";
import CoffeeCard from "./CoffeeCard";

function CoffeeList() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(coffeeData);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
      )
      .then((response) => {
        setCoffeeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="coffee-list">
      {coffeeData.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </section>
  );
}

export default CoffeeList;
