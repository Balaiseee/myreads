import React from "react";
import UpdateBook from "./UpdateBook.js";

/**
 * @component Book
 * @description Renders a Book component
 * @param {Object}  props
 * @param {Object} props.book - The book
 * @param {function} props.handleUpdate - Handle the call of handleUpdate in App.js
 **/

const Book = props => {
  const { book, handleUpdate } = props;
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
      <div className="book-authors">{book.authors[0]}</div>
    </div>
  );
};
export default Book;
