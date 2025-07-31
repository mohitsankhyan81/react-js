import { useState, useEffect } from "react";

const Example = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const clearName = () => {
    setName("");
  };

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button onClick={clearName}>Clear Name</button>
    </div>
  );
};

export default Example;
