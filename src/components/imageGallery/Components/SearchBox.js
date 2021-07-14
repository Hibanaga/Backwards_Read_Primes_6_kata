import React, { useState } from "react";

export default function SearchBox({ onSubmitQueryHandler }) {
  const [query, setQuery] = useState("");

  const submitQueryHandler = (event) => {
    event.preventDefault();
    onSubmitQueryHandler(query);
  };

  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form className="searchBoxForm" onSubmit={submitQueryHandler}>
        <input type="text" value={query} onChange={handleChangeQuery} />
        <button type="submit">search</button>
      </form>
    </div>
  );
}
