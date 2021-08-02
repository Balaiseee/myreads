import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book.js";
import PropTypes from "prop-types";

/**
 * @component
 * @description Renders a SearchBook component
 **/

class SearchBook extends React.Component {
  /**
   * @memberof SearchBook
   * @method sanitizeBook
   * @description Sanitize the book
   * @param {Object} book - The book
   **/

  sanitizeBook = (book, handleUpdate) => {
    if (book.imageLinks === undefined) {
      book.imageLinks = {
        // URL to an image not available image
        thumbnail: "https://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      };
    }
    if (book.authors === undefined) {
      book.authors = ["Unknown"];
    }
    if (book.hasOwnProperty("shelf")) {
      return <Book book={book} handleUpdate={handleUpdate} />;
    } else {
      return <Book book={Object.assign({}, book, { shelf: "none" })} handleUpdate={handleUpdate} />;
    }
  };

  /**
   * @memberof SearchBook
   * @method sanitizeResult
   * @description Sanitize the result of the search
   * @param {Array} result - The array of Book Object containing the result of the search
   * @param {Array} books - The array of Book Object containing the books in the bookshelf
   **/

  sanitizeResult = (result, books) => {
    // Check if result exist and if the result is successful
    if (result !== undefined && !("error" in result)) {
      return this.updateResultShelf(result, books);
    } else {
      return [];
    }
  };

  /**
   * @memberof SearchBook
   * @method updateResultShelf
   * @description Update the shelf of already owned books in the result of the search
   * @param {Array} result - The array of Book Object containing the result of the search
   * @param {Array} books - The array of Book Object containing the books in the bookshelf
   **/

  updateResultShelf = (result, books) => {
    // Intersection between books and result
    const intersectionBooksResult = books.filter(b => result.some(book => book.id === b.id));
    // Intersection between result and intersectionBooksResult
    const resultWithoutIntersectionBooksResult = result.filter(book => intersectionBooksResult.every(b => b.id !== book.id));
    // Insert books already in bookshelf at the beginning of b
    resultWithoutIntersectionBooksResult.unshift(...intersectionBooksResult);
    return resultWithoutIntersectionBooksResult;
  };

  render() {
    const { books, result, handleSearch, handleUpdate } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={event => handleSearch(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.sanitizeResult(result, books).map(book => (
              <li key={book.id}>{this.sanitizeBook(book, handleUpdate)}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    this.props.emptySearch();
  }
}

SearchBook.propTypes = {
  books: PropTypes.array.isRequired,
  result: PropTypes.array,
  handleSearch: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default SearchBook;
