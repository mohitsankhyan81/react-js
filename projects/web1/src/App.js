import { useState } from "react";
import Nav from "./navigation/Nav";
import Products from "./Pro/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/Sidebar";
import './index.css';
//database
import products from './db/data';
import Category from "./SideBar/Category/Category";
import Card from "./components/Card";
function App() {
  const [selectCategory,setSelectCategory]=useState(null);
  const [query,setquery]=useState("")

  const handleInputChanges = event=>{
    setquery(event.target.value)
  }

  const filterdItems=products.filter(product=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1))

  //-------Radio Filter---

  const handleChange=event=>{
    setSelectCategory(event.target.value)
  }

  //button filter----
  const handleClick=event=>{
    setSelectCategory(event.target.value)
    }

    function filteredData(products,selected,query){
      let filteredProducts=products

      if(query){
        filteredProducts=filterdItems
      }
      if(selected){
        filteredProducts=filteredProducts.filter(({category,color,company,newPrice,title})=>
          category===selected || color===selected || 
         company === selected || 
         newPrice === selected || 
         title === selected
        );
      }
      return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice})=>(
        <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
        />
      ));
    }
    const result=filteredData(products,selectCategory,query);

  
  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav />
      <Recommended/>
      <Products/>
    </>
  );
}

export default App;