import React from "react";
import Book from "./Book.js";
import PropTypes from "prop-types";

/**
 * @component Bookshelf
 * @description Renders a Bookshelf component
 **/

const Bookshelf = props => {
  const { books, title, handleUpdate } = props;
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

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.oneOf(["Want to read", "Currently reading", "Read"]).isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default Bookshelf;
