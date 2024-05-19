import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import itemList from "./itemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "65bd64acabaa4668a636be84ab7466b9";
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
      </div>
      <div className={styles.recipeDetails}>
        <span>
          <strong>🕣{food.readyInMinutes}Minutes</strong>
        </span>
        <span>
          <strong>🧑‍🧑‍🧒‍🧒Serves{food.servings}Minutes</strong>
        </span>
        <span>
          {" "}
          <strong>{food.vegetarian ? "🍗Veg" : "🥬Non-Veg"}</strong>
        </span>
        <span>
          <strong>{food.vegan ? "🥑Vegan" : ""}</strong>
        </span>
      </div>
      <div>
        $
        <span>
          <strong>{food.pricePerServing / 100} per serving</strong>
        </span>
      </div>
      <h2>Ingredients</h2>
      <itemList food={food} isLoading={isLoading} />
      <h2>Instructions</h2>
      <div className={styles.recipeInstruction}>
        <ol>
          {isLoading ? (
            <p>Loading.....</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
