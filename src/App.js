import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard.js";
import SearchBook from "./SearchBook.js";
import ToggleSearchPage from "./ToggleSearchPage.js";
import { getAll, update, search } from "./BooksAPI";

/**
 * @component BooksApp
 * @description Renders the main component of the app, BooksApp
 **/

class BooksApp extends React.Component {
  state = {
    books: [],
    result: []
  };

  /**
   * @memberof BooksApp
   * @method handleUpdate
   * @description Update the shelf of a book in the state of this component and in the backend server
   * @param {Object} book - The book (containing at minimum an id attribute)
   * @param {string} shelf - The new shelf for the book (contains one of ["wantToRead", "currentlyReading", "read"])
   **/

  handleUpdate = (book, shelf) => {
    // Handle update of the shelf property of a book passed in argument with the backend server
    update(book, shelf).then(response => {
      // When the promise is resolved, update the shelf property of the book passed in argument
      book.shelf = shelf;
      // Update the book in the books state
      this.setState(currentState => ({
        books: currentState.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  };

  /**
   * @memberof BooksApp
   * @method handleSearch
   * @description Fetch the books found by the query and store them in the state
   * @param {string} query - The title or the author of the book(s) searched
   **/

  handleSearch = query => {
    search(query).then(books =>
      this.setState(currentState => ({
        result: books
      }))
    );
  };

  /**
   * @memberof BooksApp
   * @method emptySearch
   * @description Empty the current result of the search in the state
   **/

  emptySearch = () => {
    this.setState(currentState => ({
      result: []
    }));
  };
  componentDidMount() {
    // Load books from the backend server and store them to the state in an array called books
    getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/">
          <Dashboard books={this.state.books} handleUpdate={this.handleUpdate} />
          <ToggleSearchPage />
        </Route>
        <Route exact path="/search">
          <SearchBook
            handleUpdate={this.handleUpdate}
            handleSearch={this.handleSearch}
            emptySearch={this.emptySearch}
            result={this.state.result}
            books={this.state.books}
          />
        </Route>
      </div>
    );
  }
}

export default BooksApp;
