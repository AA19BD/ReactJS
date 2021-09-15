import React,{useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

function Shop() {
  
  useEffect(()=>{
    fetchItems();
  },[])

  const[items,setItems]=useState([]);


  const fetchItems = async()=>{
    const data= await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    const items=await data.json();
    console.log(items.data);
    setItems(items.data);
     
  } 

    return (
      <div >
      {items.map((item) =>(
        <h1 key={item.IDNation}>
          <Link to={`/shop/${item.Year}`}>
          Population {item.Population} of {item.Year} in {item.Nation}
          </Link>
        </h1>
      ))}
      </div>
    );
  }
  
  export default Shop; ;
  