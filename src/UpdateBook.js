import React from "react";

/**
 * @component UpdateBook
 * @description Renders a UpdateBook component
 * @param {Object}  props
 * @param {Object} props.book - The book
 * @param {function} props.handleUpdate - Handle the call of handleUpdate in App.js
 **/

const UpdateBook = props => {
  const { book, handleUpdate } = props;
  const handleChange = event => {
    handleUpdate(props.book, event.target.value);
  };
  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} value={book.shelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default UpdateBook;
