import React from "react";
import "./search.component.css";
export const SearchBox = props => {
  return (
    <input
      className="search"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      style={props.style}
    />
  );
};
