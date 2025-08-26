import axios from "axios";
import { useState, useEffect } from "react";
import "../style.css";

const Meals = () => {
  const [item, setitems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data.meals);
        setitems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemList = item.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section>
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div>{itemList}</div>;
};

export default Meals;
