import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 0;
    return initialCount;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Example;
