const Poductinfo = () => {
  const products={
    name:"laptop",
    price:34567,
    avilable:"no stock"
  }
  return (
    <div>
      <p>name : {products.name}</p>
      <p>price : {products.price}</p>
    </div>
  )
}

export default Poductinfo