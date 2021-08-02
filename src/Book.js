import React from "react";
import UpdateBook from "./UpdateBook.js";
import PropTypes from "prop-types";

/**
 * @component Book
 * @description Renders a Book component
 **/

const Book = props => {
  const { book, handleUpdate } = props;
  const authors = book.authors.join(", ");
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}
        />
        <UpdateBook book={book} handleUpdate={handleUpdate} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default Book;
