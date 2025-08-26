import { useContext } from "react";
import { DataContext } from "../App";

const CompC = () => {
  const username=useContext(DataContext)
  return (
    <h1>My name is {username}</h1>
  );
};

export default CompC;
