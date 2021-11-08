import React from "react";
import { data } from "./books";
import Book from "./Book";
import "./App.css";

function App() {
  ///BookList
  return (
    <section className="booklist">
      {data.map((book, index) => {
        // const { title, author, img } = book;
        // return <Book title={title} author={author} img={img} />;
        // return <Book book={book} key={book.id} />;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

export default App;
