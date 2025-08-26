const Productlist = () => {
  const products = [
    { id: 1, name: "mohit", price: 345 },
    { id: 2, name: "ankit", price: 45 },
    { id: 3, name: "sahil", price: 875 },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h1>Name: {p.name}</h1>
          <h1>Price: {p.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default Productlist;
