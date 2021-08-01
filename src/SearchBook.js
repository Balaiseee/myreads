import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book.js";

/**
 * @component
 * @description Renders a SearchBook component
 * @param {Object}  props
 * @param {function} props.handleUpdate - Handle the call of handleUpdate in App.js
 * @param {function} props.handleSearch - Handle the call of handleSearch in App.js
 * @param {Array} props.result - The array of Book Object containing the result of the search
 * @param {Array} props.books - The array of Book Object containing the books in the bookshelf
 **/

class SearchBook extends React.Component {
  componentWillMount() {
    this.props.emptySearch();
  }
  render() {
    const { handleUpdate, handleSearch, result, books } = this.props;
    const sanitizeResult = () => {
      // Check if result exist and if the result is successful
      if (result !== undefined && !("error" in result)) {
        // Intersection between books and result
        const intersectionBooksResult = books.filter(b => result.some(book => book.id === b.id));
        // Intersection between result and intersectionBooksResult
        const resultWithoutIntersectionBooksResult = result.filter(book => intersectionBooksResult.every(b => b.id !== book.id));
        // Insert books already in bookshelf at the beginning of b
        resultWithoutIntersectionBooksResult.unshift(...intersectionBooksResult);
        return resultWithoutIntersectionBooksResult;
      } else {
        return [];
      }
    };
    const sanitizeBook = book => {
      // Check if authors and imageLinks exist
      if (book.imageLinks !== undefined) {
        if (book.authors === undefined) {
          book.authors = ["Unknown"];
        }
        // Check if book has it own shelf property
        if (book.hasOwnProperty("shelf")) {
          return <Book book={book} handleUpdate={handleUpdate} />;
        } else {
          return <Book book={Object.assign({}, book, { shelf: "none" })} handleUpdate={handleUpdate} />;
        }
      }
    };
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
            {sanitizeResult().map(book => (
              <li key={book.id}>{sanitizeBook(book)}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBook;
