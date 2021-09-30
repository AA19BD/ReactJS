import React, { useState } from "react";
import Profile from "./components/Profile";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.jpeg";
import image4 from "./images/4.webp";

import "./App.css";

function App() {
  const [profiles, setProfiles] = useState([
    {
      image:image1,
      name: "James",
      age: 21,
      country: "US",
      skills: ["Java", "Python", "C++"],
    },
    {
      image:image3,
      name: "Kate",
      age: 30,
      country: "UK",
      skills: ["Design", "NodeJs", "C++"],
    },
    {
      image:image2,
      name: "Simon",
      age: 27,
      country: "Germany",
      skills: ["Pascale", "Python", "ReactJS"],
    },
    {
      image:image4,
      name: "Martha",
      age: 33,
      country: "France",
      skills: ["SQL", "Go", "JS"],
    },
  ]);
  const [index, setIndex] = useState(0);
  const updateProfile = () => {
    let quoteNum = Math.floor(Math.random() * profiles.length);
    console.log(quoteNum);
    setIndex(quoteNum);
    
  };
  return (
    <div className="App">
      <h1>Random profile - React Application</h1>
      <Profile className="profile"
      image={profiles[index].image}
      name={profiles[index].name}
      age={profiles[index].age}
      country={profiles[index].country}
      skills={profiles[index].skills}/>

      <div className="button">
        <button  onClick={updateProfile}>Random Profile</button>
      </div>
     
    </div>
  );
}

export default App;
