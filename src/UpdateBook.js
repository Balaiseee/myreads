import React from "react";
import * as BooksAPI from "./BooksAPI";

class UpdateBook extends React.Component {
  handleChange = event => {
    this.props.handleUpdate(this.props.book, event.target.value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={this.props.book.shelf}>
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
  }
}
export default UpdateBook;
