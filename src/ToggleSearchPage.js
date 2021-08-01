import React from "react";
import { Link } from "react-router-dom";

/**
 * @component ToggleSearchPage
 * @description Renders a ToggleSearchPage component
 **/

const ToggleSearchPage = () => {
  return (
    <Link to="/search">
      <div className="open-search">
        <button>Add a book</button>
      </div>
    </Link>
  );
};
export default ToggleSearchPage;
