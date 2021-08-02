import React from "react";
import Bookshelf from "./Bookshelf.js";
import PropTypes from "prop-types";

/**
 * @component Dashboard
 * @description Renders a Dashboard component
 **/

const Dashboard = props => {
  const { books, handleUpdate } = props;
  const titles = {
    currentlyReading: {
      title: "Currently reading"
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
            books={books.filter(book => book.shelf === "currentlyReading")}
            title={titles.currentlyReading.title}
            handleUpdate={handleUpdate}
          />
          <Bookshelf
            books={books.filter(book => book.shelf === "wantToRead")}
            title={titles.wantToRead.title}
            handleUpdate={handleUpdate}
          />
          <Bookshelf books={books.filter(book => book.shelf === "read")} title={titles.read.title} handleUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  books: PropTypes.array.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default Dashboard;
