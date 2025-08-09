import { useState } from "react";
import "../style.css";

const Accordian = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordian-cart">
      <div className="header" onClick={() => setIsActive(!isActive)}>
        {title}
        <span className="icon">{isActive ? "-" : "+"}</span>
      </div>

      {isActive && (
        <div className="content">
          <p className="card-info">{content}</p>
        </div>
      )}
    </section>
  );
};

export default Accordian;
