import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [IncrementBy, setIncrementBy] = useState(1);
  function handleIncrement() {
    setCount(count + IncrementBy);
  }
  function handleDecrement() {
    setCount(count - IncrementBy);
  }
  function handleIncrementBy() {
    setIncrementBy(IncrementBy + 1);
  }
  function handleDecrementBy() {
    setIncrementBy(IncrementBy - 1);
  }
  return (
    <div>
      <h1>the counter Value is:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>Increment by: {IncrementBy}</h1>
      <button onClick={handleIncrementBy}>IncrementBy</button>
      <button onClick={handleDecrementBy}>DecrementBy</button>
    </div>
  );
}
