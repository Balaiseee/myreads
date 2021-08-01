import React from "react";
import Bookshelf from "./Bookshelf.js";

/**
 * @component Dashboard
 * @description Renders a Dashboard component
 * @param {Object}  props
 * @param {Array} props.books - The books of the bookshelf
 * @param {function} props.handleUpdate - Handle the call of handleUpdate in App.js
 **/

const Dashboard = props => {
  const { books, handleUpdate } = props;
  const titles = {
    currentlyReading: {
      title: "Currently Reading"
    },
    wantToRead: {
      title: "Want to read"
    },
    read: {
      title: "Read"
    }
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            title={titles.currentlyReading.title}
            books={books.filter(book => book.shelf === "currentlyReading")}
            handleUpdate={handleUpdate}
          />
          <Bookshelf
            title={titles.wantToRead.title}
            books={books.filter(book => book.shelf === "wantToRead")}
            handleUpdate={handleUpdate}
          />
          <Bookshelf title={titles.read.title} books={books.filter(book => book.shelf === "read")} handleUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
