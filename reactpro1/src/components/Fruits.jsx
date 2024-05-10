import Fruit from "./Fruit";
export default function fruits() {
  const fruits = [
    { name: "apple", emoji: "🍎", price: "10" },
    { name: "banana", emoji: "🍌", price: "5" },
    { name: "mango", emoji: "🥭", price: "8" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
          />
        ))}
      </ul>
    </div>
  );
}
