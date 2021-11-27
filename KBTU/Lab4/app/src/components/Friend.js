import { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function Friend() {
  const { friend } = useParams();
  const [chosenFriend, setChosenFriend] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const friends = [
      {
        name: "Chris",
        age: 24,
        country: "USA",
      },
      {
        name: "Anna",
        age: 55,
        country: "USA",
      },
      {
        name: "Bob",
        age: 36,
        country: "Cuba",
      },
    ];
    const foundFriend = friends.find((person) => person.name === friend);
    if (foundFriend) {
      setChosenFriend(foundFriend);
      setErrorMessage("");
    } else {
      setErrorMessage(
        "You dont have such friend at the moment in your friend list"
      );
    }
  }, [friend]);

  if (errorMessage) {
    return (
      <div class="alert alert-danger" role="alert">
        {errorMessage}
      </div>
    );
  }

  if (!chosenFriend) {
    return <h1>Choose your friend</h1>;
  }

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{chosenFriend.name}</h5>
        <p class="card-text">
          <strong>Age</strong>: {chosenFriend.age}
          <br />
          <strong>Country</strong>: {chosenFriend.country}
        </p>
      </div>
    </div>
  );
}
