import { useEffect, useState } from "react";
import axios from "axios";

import CoffeeCard from "./CoffeeCard";
const CoffeeList = ({ filter }) => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Фильтрация по доступности
  const filteredData =
    filter === "available"
      ? coffeeData.filter((coffee) => coffee.available)
      : coffeeData;

  return (
    <section className="coffee-list">
      {filteredData.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </section>
  );
};
export default CoffeeList;
