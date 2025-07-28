import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ]);

  const handleClick = () => {
    const updatedMovies = movies.map((m) =>
      m.id === 1 ? { ...m, name: "My name is Mohit" } : m
    );
    setMovies(updatedMovies);
  };

  return (
    <section>
      {movies.map((f) => (
        <li key={f.id}>{f.name}</li>
      ))}

      <button onClick={handleClick}>Change the name</button>
    </section>
  );
};

export default App;
