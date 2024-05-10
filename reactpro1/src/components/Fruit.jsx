export default function Fruit({ name, emoji, price }) {
  return (
    <li>
      {name} {emoji} ${price}
    </li>
  );
}
