import item from "./item";
export default function itemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        food.extendedIngrediants.map((item) => <item item={item} />)
      )}
    </div>
  );
}
