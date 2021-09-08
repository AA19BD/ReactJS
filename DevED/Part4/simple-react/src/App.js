import React, { useState } from "react";
import "./App.css";
import Nav2 from "./components/Nav2";
import Video from "./components/Video";
//{useState}->means we are importing specific from React library
// import Nav from "./components/Nav";
// import Tweets from "./components/Tweets";

function App() {
  //App(main) component
  //Here we  write JavaScript code
  const [counter, setCounter] = useState(0);
  //to modify our counter we use setCounter function
  const incrementer = () => {
    // setCounter((prev) => prev + 1); //prev means counter=0
    //-->setCounter будет менять последнее состояние (the last instance of our state)
    //->например посл. состояние было 1 стало 2 и так далее..
    setCounter(counter + 1);
    console.log(counter);
  };

  const [toggle, setToggle] = useState(false);
  const toggleElement = () => {
    // setToggle(!toggle);
    //or
    setToggle((prev) => !prev);
  };
  return (
    <div className="App">
      <h2>Counter {counter}</h2>
      <button onClick={incrementer}>Click me</button>
      {/* <h1 className={toggle ? "active" : ""}>Hello React!</h1>
      
      <button onClick={toggleElement}>Toggle</button> */}
      <Nav2 toggle={toggle}/>
      <Video nr={counter} setToggle={toggleElement}/>
    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     <h1>Hello React!</h1>
//     <div className="home">
//       <Nav />
//       <Tweets />
//     </div>
//   </div>
// );
