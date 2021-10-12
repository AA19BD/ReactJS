import React, { useState } from "react";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const profiles = [
    {
      image:
        "https://designpress-10674.kxcdn.com/wp-content/uploads/2012/07/pictures-of-famous-people/abraham-lincoln.jpg",
      name: "James",
      age: 21,
      country: "US",
      skills: ["Java", "Python", "C++"],
    },
    {
      name: "Katrin",
      image:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/7DF3/production/_99834223_hi034541798.jpg",
      age: 30,
      country: "UK",
      skills: ["Design", "NodeJs", "C++"],
    },
    {
      image:
        "https://designpress-10674.kxcdn.com/wp-content/uploads/2012/07/steve-jobs-1280x720.jpg",
      name: "Simon",
      age: 27,
      country: "Germany",
      skills: ["Pascale", "Python", "ReactJS"],
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjK8OrKfuIYuhXlvPsHpJuITXDVRSj8OxBg&usqp=CAU",
      name: "Martha",
      age: 33,
      country: "France",
      skills: ["SQL", "Go", "JS"],
    },
  ];
  const [index, setIndex] = useState(0);
  const updateProfile = () => {
    let quoteNum = Math.floor(Math.random() * profiles.length);
    console.log(quoteNum);
    setIndex(quoteNum);
  };
  return (
    <div className="App">
      <h1>Random profile - React Application</h1>
      <Profile
        className="profile"
        image={profiles[index].image}
        name={profiles[index].name}
        age={profiles[index].age}
        country={profiles[index].country}
        skills={profiles[index].skills}
      />

      <div className="button">
        <button onClick={updateProfile}>Random Profile</button>
      </div>
    </div>
  );
}

export default App;
