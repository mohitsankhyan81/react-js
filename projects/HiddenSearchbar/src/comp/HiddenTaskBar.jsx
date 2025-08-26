import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../style.css";

const HiddenTaskBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    if (e.target.className === "cont") {
      setShowInput(false);
      setBgColor("#fff");
    } else {
      setBgColor("#1a1a1a");
    }
  };

  return (
    <section style={{ backgroundColor: bgColor }} onClick={handleClick} className="cont">
      {showInput ? (
        <input type="text" placeholder="Search..." onClick={(e) => e.stopPropagation()} />
      ) : (
        <FaSearch onClick={(e) => { e.stopPropagation(); setShowInput(true); }} />
      )}
    </section>
  );
};

export default HiddenTaskBar;
