import React from "react";
import "./index.css";

function Input({searchChange}) {
  return (
    <input
      type="search"
      name="search"
      placeholder="Search"
        onChange={(e) => searchChange(e.target.value)}
      className="search-input"
    />
  );
}

export default Input;
