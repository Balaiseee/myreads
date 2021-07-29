import React, { Component } from "react";
import Book from "./Book.js";
import * as BooksAPI from "./BooksAPI";

class SearchBook extends Component {
  state = {
    result: []
  };
  updateQuery = query => {
    BooksAPI.search(query).then(books =>
      this.setState({
        result: books
      })
    );
  };
  render() {
    const { handleOnClick, handleUpdate } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={handleOnClick}>
            Close
          </button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
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
