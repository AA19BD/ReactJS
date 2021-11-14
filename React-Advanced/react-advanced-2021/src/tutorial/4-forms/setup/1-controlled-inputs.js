import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const[firstName,setFirstName]=useState('')
  const[email,setEmail]=useState('')
  const[people,setPeople]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(firstName && email){
      const person={id:new Date().getTime().toString(),firstName,email}
      setPeople((people)=>{
        return [...people,person]
      })
    }
    setFirstName('')
    setEmail('')
  }

  return (
    <React.Fragment>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firsrtName">Name : </label>
          <input type="text" id="firstName" name="firstName"  required value={firstName} onChange={(e)=>setFirstName(e.target.value)} /> 
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input type="email" id="email" name="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/> 
        </div>
        <button type="submit">Add Person</button>
      </form>
      {people.map((person)=>{
        const {id,firstName,email}=person
        return(
          <div className="item" key={id}> 
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
   </article>
   
    </React.Fragment>
  
  )
  
};

export default ControlledInputs;
