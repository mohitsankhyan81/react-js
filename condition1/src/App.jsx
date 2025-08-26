const Cart = () => {
  const items = ["wireless earbuds", "power bank", "new ssd", "new hobbies"];
  return (
    <div>
      <h1>CART</h1>
      {items.length > 0 && <h2>you have {items.length} items in your cart</h2>}

      <ul>
        <h1>Product</h1>
    {items.map(item => {
    return <li key={item}>{item}</li>;
      })}

      </ul>
    </div>
  );
};

const App = () => {
  return <Cart />;
};

export default App;
