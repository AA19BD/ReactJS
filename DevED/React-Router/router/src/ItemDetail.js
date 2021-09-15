import React,{useState,useEffect } from 'react';

function  Item({match}) {
  
  useEffect(()=>{
    fetchItem();
  },[])

  const[item,setItem]=useState({
      
  });


  const fetchItem = async()=>{
    const fetchItem=await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population/get?ids=${match}`);
    const item=await fetchItem.json();
    setItem(item);
    console.log(item);
     
  } ;

    return (
      <div >
          <h1>Item</h1>
      </div>
    );
  }
  
  export default Item;
  