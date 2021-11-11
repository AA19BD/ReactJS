import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const[value,setValue] = useState(0)
  useEffect(() => {//callback function!
    console.log("Call useEffect!")
    if(value>0){
      document.title=value
    }
  },[value]);
  console.log("Render component!")
  return (
    
    <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value+1)}>Click</button>
    </>
  )
};

export default UseEffectBasics;
