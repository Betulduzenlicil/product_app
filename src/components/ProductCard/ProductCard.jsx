import React from 'react';
import "../../App.scss";
import "../ProductCard/Products.scss"
const ProductCard = ({data}) => {
    // console.log(data);
  return (
    <main>
    <div className='container'>
      {data.map(({id,title,price,image})=>
      (
       <div key={id} className='card'>
         <div>
            <img src={image} alt="" width="200px"/>
        </div>
        <span>{price} $</span>
        <p className='title'>{title}</p>

       </div>
      ))}
    </div>
    </main>
  )
}

export default ProductCard
