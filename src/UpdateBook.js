import React from "react";
import PropTypes from "prop-types";

/**
 * @component UpdateBook
 * @description Renders a UpdateBook component
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

UpdateBook.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default UpdateBook;
