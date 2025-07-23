import Person from "./comp/Person.jsx";
import Product from "./comp/Product.jsx";

const App = () => {
  return (
    <>
      <Person name="Mohit" age={18} />
      <Product name="iPhone" price={34543} />
    </>
  );
};

export default App;
