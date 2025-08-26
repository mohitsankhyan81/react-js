// App.jsx
import React from "react";

const App = () => {
  return (
    <User
      img="C:\Users\Mohit Sankhyan\Downloads\WhatsApp Image 2025-07-01 at 23.35.20_a80f9ffd.jpg"
      name="Mohit"
      age={18}
      isMarried={false}
      hobbies={["coding", "reading", "sleeping"]}
    />
  );
};

const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.name} width={200} />
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Married: {props.isMarried ? "Yes" : "No"}</h3>
      <h4>Hobbies:</h4>
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default App;
