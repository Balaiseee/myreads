import React from "react";
import Book from "./Book.js";

const Bookshelf = props => {
  const { title, books, handleUpdate } = props;
  const booksList = books.map(book => (
    <li key={book.id}>
      <Book book={book} handleUpdate={handleUpdate} />
    </li>
  ));
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{booksList}</ol>
      </div>
    </div>
  );
};

export default Bookshelf;
