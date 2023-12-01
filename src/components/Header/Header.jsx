import React from 'react'
import "../Header/Header.scss"
const Header = ({data, choose}) => {
    // console.log(data);
  return (
    <header>
      <div>
        <h1>Product List</h1>
        </div>
        <nav>
      {data.map((category,i)=>(
        <button className='btn' key={i} onClick={choose}>{category.toUpperCase()}</button>
        
        ))}
      </nav>
    </header>
  )
}

export default Header
