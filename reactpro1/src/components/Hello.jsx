function Hello({ person }) {
  return (
    <h1>
      {person.msg} {person.name} {person.emoji} {person.seatNumbers}
    </h1>
  );
}

export default Hello;
