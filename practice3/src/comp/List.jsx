const List = () => {
  const list = [1, 2, 3, 4, 5, 6];

  return (
    <main>
      {list.map(item => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
    </main>
  );
};

export default List;
