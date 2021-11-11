import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const responce = await fetch(url);
    const data = await responce.json();
    setUsers(data);
    // console.log(data)
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <React.Fragment>
      <h3>Github Users</h3>
      <ul className="users">
      {users.map((user) => {
        const {id,login,avatar_url,html_url}=user
        return (
          <li key={id}>
            <img src={avatar_url} alt={login}/>
            <div>
              <h4>{login}</h4>
              <a href="html_url">profile</a>
            </div>
          </li>
        );
      })}
      </ul>
    </React.Fragment>
  );
};

export default UseEffectFetchData;
