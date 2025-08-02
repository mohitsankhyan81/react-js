import { useContext, useState } from "react";
import { UserContext } from "../UserEffect";

const Updateuser = () => {
  const { updateName } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (name.trim()) {
      updateName(name);
      setName("");
    }
  };

  return (
    <div>
      <h1>Update User Name</h1>
      <form onSubmit={handleChange}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter new name"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Updateuser;
