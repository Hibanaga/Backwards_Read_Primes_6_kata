import React from "react";

const Filter = ({ filter, onFilterChangeHandler }) => {
  return (
    <label htmlFor="" className="labelFilter">
      {" "}
      text to Search:
      <input type="text" value={filter} onChange={onFilterChangeHandler} />
    </label>
  );
};

export default Filter;
