import React, { Component } from "react";

const AddBook = props => {
  const { handleOnClick } = props;
  return (
    <div className="open-search">
      <button onClick={handleOnClick}>Add a book</button>
    </div>
  );
};
export default AddBook;
