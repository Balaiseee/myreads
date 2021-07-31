import React from "react";

/**
 * @component ToggleSearchPage
 * @description Renders a ToggleSearchPage component
 * @param {Object}  props
 * @param {function} props.handleClick - Handle the call of toggleSearchPage in App.js
 **/

const ToggleSearchPage = props => {
  const { handleClick } = props;
  return (
    <div className="open-search">
      <button onClick={handleClick}>Add a book</button>
    </div>
  );
};
export default ToggleSearchPage;
