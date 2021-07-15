import React from "react";

export default function Home() {
  return (
    <div className="wrapperHome">
      <h2>
        this is start page of test redux page (all tasks has been written on
        react/redux):{" "}
      </h2>

      <ul className="ulMenu">
        <li> Increment(last lesson)</li>
        <li>feedback(second hw from react)</li>
        <li>todo(all lesson of react)</li>
        <li>phonebook(hw2,hw3)</li>
        <li>gallery (hw3)</li>
      </ul>
    </div>
  );
}
