import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login({ authed, setAuthed }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    if (username === "admin" && password === "admin1") {
      setAuthed(true);
      navigate("/", { replace: true });
    } else {
      setErrorMessage("Data is not correct");
    }
  }

  return (
    <section className="container-sm">
      <h1>Login page</h1>
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <label for="user">User</label>
          <input
            type="text"
            class="form-control"
            id="user"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <small class="form-text text-muted">
            The correct username is: admin
          </small>
        </div>
        <div class="form-group">
          <label for="passsword">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <small class="form-text text-muted">
            The correct password is: admin1
          </small>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div class="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </section>
  );
}
