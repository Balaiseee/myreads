import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book.js";
import { search } from "./BooksAPI";

/**
 * @component
 * @description Renders a SearchBook component
 * @param {Object}  props
 * @param {function} props.handleUpdate - Handle the call of handleUpdate in App.js
 **/

class SearchBook extends Component {
  state = {
    result: []
  };

  /**
   * @memberof SearchBook
   * @method updateQuery
   * @description Fetch the books found by the query and store them in the state
   * @param {string} query - The title or the author of the book(s) searched
   **/

  updateQuery = query => {
    search(query).then(books =>
      this.setState({
        result: books
      })
    );
  };
  render() {
    const { handleUpdate } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* Check if result exist and if the result is successful if so map result into books found*/}
            {this.state.result !== undefined &&
              !("error" in this.state.result) &&
              this.state.result.map(book => (
                <li key={book.id}>
                  {/* Check if authors and imageLinks exist if so call Book component with an object that add a new property shelter on book that is passed in argument*/}
                  {book.authors !== undefined &&
                    book.imageLinks !== undefined && (
                      <Book
                        book={Object.assign({}, book, { shelf: "none" })}
                        handleUpdate={handleUpdate}
                      />
                    )}
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBook;
