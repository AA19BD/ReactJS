import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Some message",
  });

  // const [name, setName] = useState('Jorsh')
  // const [age, setAge] = useState(36)
  // const [message, setMessage] = useState('This is a Jorsh!')


  const changeMessage=()=>{
    setPerson({...person, message:"New Message"})//Spread Operator we copy all ,then decide what to change
    // setMessage("Hello World!")
  }
  return (
    <React.Fragment>
      <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        {/* <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{message}</h3> */}
        <button onClick={changeMessage} className="btn">
          Change Message
        </button>
      </div>
    </React.Fragment>
  );
};

export default UseStateObject;
