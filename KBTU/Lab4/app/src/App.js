import './App.css';
import Friend from "./components/Friend";
import Friends from "./components/Friends";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useState } from "react";
import { Link, Routes, Route, Navigate, useNavigate } from "react-router-dom"

export default function App() {
  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate();

  function CheckIsAuthed({ authed, children }) {
    return authed
      ? children
      : <Navigate to="/login" replace />;
  }
  
  function logOut() {
    setAuthed(false);
    navigate('/');
  }

  return (
    <main>
      <nav>
        <div className="container wrapper">
          <div>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/profile" className="link">
              Profile
            </Link>
            <Link to="/friends" className="link">
              Friends
            </Link>
          </div>
          {authed ? <span className="link" onClick={logOut}>Logout</span> : <Link className="link" to='/login'>Login</Link>}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home authed={authed} />} />
        <Route path="/profile" element={
          <CheckIsAuthed authed={authed}>
            <Profile />
          </CheckIsAuthed>
        } />
        <Route path="/friends" element={
          <CheckIsAuthed authed={authed}>
            <Friends />
          </CheckIsAuthed>
        }>
          <Route path=":friend" element={<Friend />} />
        </Route>
        <Route path="/login" element={<Login authed={authed} setAuthed={setAuthed} />} />
      </Routes>
    </main>
  )
}