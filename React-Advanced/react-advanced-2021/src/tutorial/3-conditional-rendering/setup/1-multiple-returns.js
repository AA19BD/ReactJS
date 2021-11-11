import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default user!");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status>= 200 && res.status<=299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        // const { login } = data;
        // setUser(login);
        setUser([{...data}]);
        setIsLoading(false);
      })
      .catch((err) =>console.log(err));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error....</h1>;
      </div>
    );
  }
  return (
    <React.Fragment>
      <ul className="users">
      {user.map((us) => {
        const {id,login,avatar_url,html_url,bio}=us
        return (
          <li key={id}>
            <img src={avatar_url} alt={login}/>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
              <p>{bio}</p>
            </div>
          </li>
        );
      })}
      </ul>
    </React.Fragment>
  );
};

export default MultipleReturns;
