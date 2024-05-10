function ListGroup() {
  let items = ["newyork", "india", "america", "france", "paris"];

  return (
    <>
      <h1> List</h1>
      {items.length == 0 && <p>No element found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
