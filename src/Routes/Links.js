import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div className="wrapperLinks">
      <NavLink to="/" exact activeClassName="activeNavLink">
        Home
      </NavLink>
      <NavLink to="/feedback" activeClassName="activeNavLink">
        Feedback
      </NavLink>
      <NavLink to="/todos" activeClassName="activeNavLink">
        Todo
      </NavLink>
    </div>
  );
};

export default Links;
