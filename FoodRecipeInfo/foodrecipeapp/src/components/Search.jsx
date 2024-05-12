import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "79e1dc06e5be459d96049c3f7287dd4f";
export default function Search({ foodData, setfoodData }) {
  const [query, setQuery] = useState("pizza ");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
