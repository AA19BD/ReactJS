import React from "react";

const Nav2 = (props) => {
  return <nav>{props.toggle ? <h1>Nav</h1> : ""}</nav>;
};

export default Nav2;
