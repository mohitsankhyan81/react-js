import { useState } from "react";

const App = () => {
  const [friends, setFriends] = useState(["Alex", "John"]);

  const addOneFriend = () => setFriends([...friends, "Mohit Sankhyan","krish"]);
  const removeFriend = () => setFriends(friends.filter(f => f !== "John"));
  const updateonefriend=()=>{
    setFriends(friends.map(f=>f === "Alex"?"Alex Jhon":f))
  }

  return (
    <div>
      <ul>
        {friends.map(friend => (
          <li key={friend}>{friend}</li>
        ))}
      </ul>

      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateonefriend}>Update one friend</button>
    </div>
  );
};

export default App;
