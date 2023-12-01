import { useState } from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import {products,categories} from "./Helper/data";


function App() {
  const [category, setCategory]=useState("ALL")
  let veri=[]

  const Click = (e) =>{
    setCategory(e.target.textContent);
    console.log(category);
  }
  if (category==="ALL") {
    veri=products
    
  }else{
    veri=products.filter(product=>product.category===category.toLocaleLowerCase())
  }
  return (
    <div className="App">
     <Header choose={Click} data={categories}/>
     <ProductCard data={veri}/>

    </div>
  );
}

export default App;
