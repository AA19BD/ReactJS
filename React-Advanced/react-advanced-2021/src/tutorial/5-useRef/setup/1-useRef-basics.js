import React, { useEffect, useRef,useState } from 'react';

// preserves value
//useRef==works as useState but-> // 1)DOES NOT trigger re-render
//target DOM nodes/elements

/*useState should be used when the value of state should affect what gets rendered. 
useRef should be used when you want to have a piece of information that persists “for the full lifetime of the component” - not just during its render cycle */
const UseRefBasics = () => {
  const refContainer=useRef(null)
  const divContainer=useRef(null)
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(refContainer.current.value) 
    console.log(divContainer.current)
  }
  // console.log(refContainer);
  useEffect(()=>{
    console.log(refContainer.current)
    refContainer.current.focus()//like->useEffect(()=>{},[.focus()])

  })
  return <>
  <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refContainer}/>
        <button type='submit'>Submit</button>
      </div>
  </form>
  <div ref={divContainer}>Hello World!</div>
  </>;
};

export default UseRefBasics;
