import React from "react";
import "./App.css";
import Dashboard from "./Dashboard.js";
import SearchBook from "./SearchBook.js";
import AddBook from "./AddBook.js";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  };
  toggleSearchPage = () => {
    this.setState(currentState => ({
      showSearchPage: !currentState.showSearchPage
    }));
  };
  handleUpdate = (book, shelf) => {
    // Handle update of the shelf property of a book passed in argument with the backend server
    BooksAPI.update(book, shelf).then(response => {
      // When the promise is resolved, update the shelf property of the book passed in argument
      book.shelf = shelf;
      // Update the book in the books state
      this.setState(currentState => ({
        books: currentState.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  };
  componentDidMount() {
    // Load books from the backend server and store them to the state in an array called books
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook
            handleOnClick={this.toggleSearchPage}
            handleUpdate={this.handleUpdate}
          />
        ) : (
          <>
            <Dashboard
              books={this.state.books}
              handleUpdate={this.handleUpdate}
            />

            <AddBook handleOnClick={this.toggleSearchPage} />
          </>
        )}
      </div>
    );
  }
}

export default BooksApp;
