import React from "react";
import "./App.css";

const Book = ({ title, author, img }) => {
  // console.log({ title, author, img })
  // const { title, author, img } = props.book;
  const clickHandler = (e) => {
    console.log(e);
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img width="200px" src={img} alt="Dune" />
      <h1 onClick={() => alert("You clicked!")}>{title}</h1>
      <h4 style={{ color: "red", fontSize: "0.75rem", margin: "0.25rem" }}>
        {author.toUpperCase()}
      </h4>
      <button type="button" onClick={clickHandler}>
        Click
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex Button
      </button>
      {/* Compelex Button->when we want to pass the argument,in this case we do ()=>complexExample(author) */}
      {/* {children} */}
    </article>
  );
};

export default Book;
